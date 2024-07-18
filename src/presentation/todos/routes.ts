import { Router } from 'express';

import { TodoController } from './controller';

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TodoController();

    router.get('/', controller.getTodos);

    return router;
  }
}
