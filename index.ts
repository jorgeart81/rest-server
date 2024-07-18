import { envs } from './src/config/plugins';
import { Server } from './src/presentation/server';

(async () => {
  main();
})();

function main() {
  const server = new Server({ port: envs.PORT });
  server.start();
}
