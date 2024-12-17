import { useState } from 'react';
import { useReducer } from 'react';
import Logo from './Logo.jsx';
import AddTaskForm from './AddTaskForm.jsx';
import TaskList from './TaskList.jsx';
import Control from './Control.jsx';

import './App.scss';

console.clear();
const tasksTitles = [
	'Complete online JavaScript course',
	'Jog around the park 3x',
	'10 minutes meditation',
	'Read for 1 hour',
	'Pick up groceries',
	'Complete Todo App on Frontend Mentor',
	'Very very very very very very very very long string',
];

const initTasks = tasksTitles.map((taskTitle) => ({
	title: taskTitle,
	isCompleted: false,
	id: crypto.randomUUID(),
}));
initTasks.at(2).isCompleted = true;

function reducer(state, action) {
	switch (action.type) {
		case 'add_task':
			return [...state, action.payload.taskToAdd];

		case 'del_task':
			return state.filter((task) => task.id !== action.payload.selectedTask.id);

		case 'del_all_completed':
			return state.filter((task) => !task.isCompleted);

		case 'toggle_completed':
			return state.map((task) =>
				task.id === action.payload.selectedTask.id
					? { ...task, isCompleted: !task.isCompleted }
					: task
			);

		case 'replace_tasks_list':
			return action.payload.newTasks;

		case 'change_title':
			return state.map((task) =>
				task.id === action.payload.selectedTask.id
					? { ...task, title: action.payload.newTitle }
					: task
			);

		default:
			throw new Error('Unknown action type');
	}
}

export default function App() {
	const [tasks, dispatch] = useReducer(reducer, [...initTasks]);
	const [filterType, setFilterType] = useState('all');

	return (
		<div className="App">
			<Logo />
			<AddTaskForm dispatch={dispatch} />
			<TaskList tasks={tasks} filterType={filterType} dispatch={dispatch} />
			<Control
				tasks={tasks}
				filterType={filterType}
				setFilterType={setFilterType}
				dispatch={dispatch}
			/>
			<p className="dnd-promo">Drag and drop to reorder list</p>
		</div>
	);
}
