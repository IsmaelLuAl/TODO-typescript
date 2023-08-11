import { useState } from "react";
import { Todos } from "./components/Todos";
import "./index.css";
import { TodoInter, TodoId } from "./types";

const mockTODOs = [
  {
    id: "1",
    title: "Todo 1",
    completed: true,
  },
  {
    id: "2",
    title: "Todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockTODOs);

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // eslint-disable-next-line prettier/prettier
  const handleCompleted = (
    // eslint-disable-next-line prettier/prettier
    { id, completed }: Pick<TodoInter, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onToggleTodoCompleteTodo={handleCompleted}
      />
    </div>
  );
};

export default App;
