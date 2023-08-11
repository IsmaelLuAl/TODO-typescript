export interface TodoInter {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<TodoInter, "id">;
export type TodoTitle = Pick<TodoInter, "title">;
export type TodoCompleted = Pick<TodoInter, "completed">;

export type ListOfTodos = Array<TodoInter>;
