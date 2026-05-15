import type { VercelRequest, VercelResponse } from '@vercel/node';

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

export default function handler(req: VercelRequest, res: VercelResponse) {
  const secret = req.query['secret'] as string;

  if (!secret) {
    return res.redirect(302, '/not-found');
  }

  // Vercel inyecta la IP real del cliente en esta cabecera
  const userIp = String(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || '127.0.0.1')
    .split(',')[0]
    .trim();
    
  const allowedIps = process.env['IP_SERVER'] || '127.0.0.1';
  const allowedSecret = process.env['SECRET_SERVER'];

  if (secret === allowedSecret && isAllowedIp(userIp, allowedIps)) {
    // Seteamos la cookie nativamente. No usamos HttpOnly para que Angular pueda leerla.
    res.setHeader('Set-Cookie', 'access-granted=true; Path=/; Max-Age=1800; Secure; SameSite=Lax');
    return res.redirect(302, '/portal-admin');
  }

  console.log(`Acceso denegado. IP: ${userIp}`);
  return res.redirect(302, '/not-found');
}