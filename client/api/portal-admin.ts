import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const secret = req.query['secret'] as string;

  if (!secret) {
    console.log('No hay secret')
    return res.redirect(302, '/not-found');
  }

  const allowedSecret = process.env['SECRET_SERVER'];

  if (secret === allowedSecret) {
    res.setHeader('Set-Cookie', 'access-granted=true; Path=/; Max-Age=1800; Secure; SameSite=Lax');
    return res.redirect(302, '/portal-admin');
  }

  return res.redirect(302, '/not-found');
}