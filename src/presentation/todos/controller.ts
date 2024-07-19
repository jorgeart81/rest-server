import type { Request, Response } from 'express';

const todos = [
  { id: 1, text: 'Buy milk', completedAt: new Date() },
  { id: 2, text: 'Buy bread', completedAt: null },
  { id: 3, text: 'Buy butter', completedAt: new Date() },
];
export class TodoController {
  constructor() {}

  public getTodos(req: Request, res: Response) {
    return res.json(todos);
  }

  public getTodoById(req: Request, res: Response) {
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
  }

  public createTodo(req: Request, res: Response) {
    const { text } = req.body;
    if (!text)
      return res.status(400).json({ error: 'text property is required' });

    const newTodo = {
      id: todos.length + 1,
      text: text,
      completedAt: new Date(),
    };

    todos.push(newTodo);
    return res.json(newTodo);
  }

  public updateTodo(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { text } = req.body;

    if (isNaN(id)) {
      return res
        .status(400)
        .json({ error: `TODO with id ${req.params.id} not found` });
    }

    if (!text)
      return res.status(400).json({ error: 'text property is required' });

    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
      return res.status(404).json({ error: `TODO with id ${id} not found` });
    }

    const copyTodos = { ...todos };
    copyTodos[todoIndex].text = text;

    return res.json(copyTodos[todoIndex]);
  }
}
