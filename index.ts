import { envs } from './src/config/plugins';
import { AppRoutes } from './src/presentation/routes';
import { Server } from './src/presentation/server';

(async () => {
  main();
})();

function main() {
  const server = new Server({ port: envs.PORT, router: AppRoutes.routes });
  server.start();
}
