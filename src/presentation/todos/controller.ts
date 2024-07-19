import type { Request, Response } from 'express';

const todos = [
  { id: 1, text: 'Buy milk', createdAt: new Date() },
  { id: 2, text: 'Buy bread', createdAt: null },
  { id: 3, text: 'Buy butter', createdAt: new Date() },
];
export class TodoController {
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    return res.json(todos);
  };

  public getTodoById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res
        .status(400)
        .json({ error: `TODO with id ${req.params.id} not found` });
    }

    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return res.status(404).json({ error: `TODO with id ${id} not found` });
    }

    return res.json(todo);
  };

  public createTodo = (req: Request, res: Response) => {
    const body = req.body;
    return res.json(body);
  };
}
