// api/main.ts
export default async (req: any, res: any) => {
  try {
    //@ts-ignore: Ignoramos la falta de tipos del archivo compilado
    const { app } = await import('../dist/client/server/server.mjs'); // Verifica que esta ruta coincida con tu dist
    
    // Ejecutamos app() para obtener la instancia de Express y le pasamos req, res
    const server = app();
    return server(req, res);
  } catch (error) {
    console.error('Error al cargar el servidor de Angular SSR:', error);
    res.status(500).send('Error interno del servidor al cargar SSR');
  }
};