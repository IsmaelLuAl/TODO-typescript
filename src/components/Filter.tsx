import { FILTERS_BUTTONS } from "../const";
import { FilterValue } from "../types";

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  // const handleClick = (filter: FilterValue) => {

  // }
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";
        return (
          <li key={key}>
            <a
              className={className}
              href={href}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
