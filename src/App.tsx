import { Todos } from "./components/Todos";
import "./index.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useTodo } from "./hooks/useTodo";

const App = () => {
  const {
    completedCount,
    filteredTodos,
    filterSelected,
    activeCount,
    handleAddTodo,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleRemoveAllCompleted,
  } = useTodo();

  return (
    <div className="todoapp">
      <Header addTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        removeTodo={handleRemove}
        onToggleTodoCompleteTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
