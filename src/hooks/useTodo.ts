import { useState } from "react";
import { TODO_FILTERS, mockTODOs } from "../const";
import {
  FilterValue,
  ListOfTodos,
  TodoId,
  TodoInter,
  TodoTitle,
} from "../types";

export const useTodo = (): {
  handleAddTodo: (title: TodoTitle) => void;
  handleRemove: (id: TodoId) => void;
  // eslint-disable-next-line prettier/prettier
  handleCompleted: ({ id, completed }: Pick<TodoInter, "id" | "completed">) => void;
  handleUpdateTitle: (params: { id: string; title: string }) => void;
  handleFilterChange: (filter: FilterValue) => void;
  handleRemoveAllCompleted: () => void;
  completedCount: number;
  todos: ListOfTodos;
  filterSelected: FilterValue;
  activeCount: number;
} => {
  const [todos, setTodos] = useState(mockTODOs);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL,
  );

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  // PREGUNTAR A JOSE LUIS //
  // eslint-disable-next-line prettier/prettier
  const handleUpdateTitle = ({ id, title }: { id: string, title: string }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return {
    handleAddTodo,
    handleRemove,
    handleCompleted,
    handleFilterChange,
    handleRemoveAllCompleted,
    handleUpdateTitle,
    completedCount,
    todos: filteredTodos,
    filterSelected,
    activeCount,
  };
};
