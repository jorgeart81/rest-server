import { Server } from './src/presentation/server';

(async () => {
  main();
})();

function main() {
  const server = new Server({ port: Number(process.env.PORT) ?? 3000 });
  server.start();
}
