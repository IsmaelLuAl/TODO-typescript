import { FilterValue } from "../types";
import { Filter } from "./Filter";

interface Props {
  onClearCompleted: () => void;
  filterSelected: FilterValue;
  activeCount: number;
  completedCount: number;
  handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
  onClearCompleted,
  filterSelected,
  activeCount = 0,
  completedCount = 0,
  handleFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending tasks
      </span>

      <Filter
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  );
};
