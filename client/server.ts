import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import * as dotenv from 'dotenv';

dotenv.config()

function normalizeIp(ip: string): string {
  if (ip === '::1') return '127.0.0.1';
  return ip.replace(/^::ffff:/, '');
}

function isAllowedIp(clientIp: string, allowedIps: string): boolean {
  return allowedIps
    .split(',')
    .map((ip) => ip.trim())
    .includes(normalizeIp(clientIp));
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine({
    allowedHosts: ['localhost', '127.0.0.1', 'larranaga-muebles.vercel.app']
  });

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve static files from /browser
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  server.get('/api/portal-admin', (req, res, next) => {
    const secret = req.query['secret'];
    if (!secret) return next();

    const userIp = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1')
      .split(',')[0]
      .trim();
    const allowedIps = process.env['IP_SERVER'] || '127.0.0.1';
    const allowedSecret = process.env['SECRET_SERVER'];

    if (secret === allowedSecret && isAllowedIp(userIp, allowedIps)) {
      res.cookie('access-granted', 'true', {
        maxAge: 30 * 60 * 1000,
        httpOnly: false,
        secure: process.env['NODE_ENV'] === 'production',
        sameSite: 'lax',
        path: '/',
      });
      return res.redirect(302, '/portal-admin');
    }
    return res.redirect(302, '/not-found');
  });

  server.get('/portal-admin', (req, res, next) => {
    const hasCookie = req.headers.cookie?.includes('access-granted=true');
    const secret = req.query['secret'];

    if (!hasCookie) {
      if(secret){
        return res.redirect(302, `/api/portal-admin?secret=${secret}`);
      }
      return res.redirect(302, '/not-found')
    }


    next();
  });

  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: baseUrl },
        ],
      })
      .then((html: string) => res.send(html))
      .catch((err: Error) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run()