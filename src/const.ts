export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: "Todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Activos",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Conmpletos",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const;

export const mockTODOs = [
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
