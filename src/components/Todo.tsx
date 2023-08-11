import { TodoId, TodoInter, TodoInter as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  // eslint-disable-next-line prettier/prettier
  onToggleTodoCompleteTodo: ({ id, completed }: Pick<TodoInter, 'id' | 'completed'>) => void
}

// eslint-disable-next-line prettier/prettier
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleTodoCompleteTodo }) => {
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleTodoCompleteTodo({ id, completed: event.target.checked });
  };

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckBox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      />
    </div>
  );
};
