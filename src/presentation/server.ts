import express, { Router } from 'express';
import path from 'path';

interface ServerOptions {
  port: number;
  router: Router;
  publicPath?: string;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(private readonly serverOptions: ServerOptions) {
    const { port, router, publicPath = 'public' } = serverOptions;
    this.port = port || 3000;
    this.publicPath = publicPath;
    this.routes = router;
  }

  async start() {
    //* Middlewares

    //* Public folder
    this.app.use(express.static(this.publicPath));

    //* Routes
    this.app.use(this.routes);

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
