import React, { StatelessComponent } from "react";

import { Task } from "../models/task";

export interface TasksListItemProps {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: StatelessComponent<TasksListItemProps> = ({
  task,
  onDelete
}) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <li>
      {task.name} <button onClick={onClick}>X</button>
    </li>
  );
};
