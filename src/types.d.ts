export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type ListOfTodos = Array<Todo>;
