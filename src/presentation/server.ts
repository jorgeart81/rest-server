import express from 'express';

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
    this.port = 3000;
    this.publicPath = 'public';
  }

  start() {
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    this.app.listen(this.port);
  }
}
