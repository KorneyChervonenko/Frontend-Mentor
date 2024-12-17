import { useState } from 'react';

import Task from './Task.jsx';
import './TaskList.scss';

export default function TaskList({ tasks, filterType, dispatch }) {
	const [draggedIndex, setDraggedIndex] = useState(null);
	const [draggedEnterIndex, setDraggedEnterIndex] = useState(null);

	function dragStart(index) {
		setDraggedIndex(index);
	}

	function dragEnter(index) {
		if (draggedIndex === index) return;
		setDraggedEnterIndex(index);
	}

	function dragEnd() {
		const draggedTask = tasks.at(draggedIndex);
		const tasksExceptDragged = tasks.filter((task) => draggedTask.id !== task.id);
		const newTasks = [
			...tasksExceptDragged.slice(0, draggedEnterIndex),
			draggedTask,
			...tasksExceptDragged.slice(draggedEnterIndex),
		];
		// setTasks(newTasks);
		dispatch({ type: 'replace_tasks_list', payload: { newTasks } });
		setDraggedIndex(null);
		setDraggedEnterIndex(null);
	}

	let filteredTasks;
	switch (filterType) {
		case 'all':
			filteredTasks = tasks;
			break;

		case 'active':
			filteredTasks = tasks.filter((task) => !task.isCompleted);
			break;

		case 'completed':
			filteredTasks = tasks.filter((task) => task.isCompleted);
			break;

		default:
			break;
	}
	return (
		<ul className="task-list">
			{filteredTasks.map((task, index) => (
				<Task
					task={task}
					dispatch={dispatch}
					key={task.id}
					index={index}
					dragStart={dragStart}
					dragEnter={dragEnter}
					dragEnd={dragEnd}
				/>
			))}
		</ul>
	);
}
