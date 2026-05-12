// api/main.js

module.exports = async (req: any, res: any) => {
  try {
    //@ts-ignore: Ignoramos la falta de tipos del archivo compilado
    const serverApp = await import('../dist/client/server/server.mjs');
    
    return serverApp.app()(req, res);
  } catch (error) {
    console.error('Error al cargar el servidor de Angular SSR:', error);
    res.status(500).send('Error interno del servidor al cargar SSR');
  }
};