import { ListOfTodos, TodoId, TodoInter } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: ({ id }: TodoId) => void;
  // eslint-disable-next-line prettier/prettier
  onToggleTodoCompleteTodo: ({ id, completed }: Pick<TodoInter, 'id' | 'completed'>) => void
}

// eslint-disable-next-line prettier/prettier
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleTodoCompleteTodo }) => {
  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onToggleTodoCompleteTodo={onToggleTodoCompleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
