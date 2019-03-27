import React, { StatelessComponent } from "react";

import { Task } from "../models/task";
import { TaskListItem } from "./TasksListItem";

export interface TaskListProps {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const TasksList: StatelessComponent<TaskListProps> = ({
  tasks,
  onDelete
}) => (
  <ul>
    {tasks.map(task => (
      <TaskListItem task={task} onDelete={onDelete} />
    ))}
  </ul>
);
