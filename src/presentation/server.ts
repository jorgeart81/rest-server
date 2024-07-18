import express from 'express';
import path from 'path';

interface ServerOptions {
  port: number;
  publicPath?: string;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;

  constructor(private readonly serverOptions: ServerOptions) {
    const { port, publicPath = 'public' } = serverOptions;
    this.port = port || 3000;
    this.publicPath = publicPath;
  }

  async start() {
    //* Middlewares

    //* Public folder
    this.app.use(express.static(this.publicPath));

    //* Routes
    this.app.get('/api', (req, res) => {
      return res.json([
        { id: 1, text: 'Buy milk', createdAt: new Date() },
        { id: 2, text: 'Buy bread', createdAt: null },
        { id: 3, text: 'Buy butter', createdAt: new Date() },
      ]);
    });

    //* SPA
    this.app.get('*', (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`,
      );
      res.sendFile(indexPath);
    });

    this.app.listen(this.port);
    console.log(`Server started on port ${this.port}`);
  }
}
