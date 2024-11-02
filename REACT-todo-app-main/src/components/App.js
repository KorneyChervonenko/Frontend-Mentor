import { useState } from 'react';
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

const initTasks = tasksTitles.map((taskTitle) => ({ title: taskTitle, isCompleted: false, id: crypto.randomUUID() }));
initTasks.at(2).isCompleted = true;

export default function App() {
	const [tasks, setTasks] = useState([...initTasks]);
	const [filterType, setFilterType] = useState('all');

	function handleAddTask(taskToAdd) {
		setTasks((currentTasks) => [...currentTasks, taskToAdd]);
	}

	function handleDelTask(taskToDel) {
		setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskToDel.id));
	}

	function handleClearCompleted() {
		setTasks((currentTasks) => currentTasks.filter((task) => !task.isCompleted));
	}

	function handleCompleteTask(taskToComplete) {
		setTasks((currentTasks) =>
			currentTasks.map((task) => (task.id === taskToComplete.id ? { ...task, isCompleted: !task.isCompleted } : task))
		);
	}

	return (
		<div className="App">
			<Logo />
			<AddTaskForm onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onDelTask={handleDelTask}
				onCompleteTask={handleCompleteTask}
				filterType={filterType}
				setTasks={setTasks}
			/>
			<Control
				tasks={tasks}
				onClearCompleted={handleClearCompleted}
				filterType={filterType}
				setFilterType={setFilterType}
			/>
			<p className="dnd-promo">Drag and drop to reorder list</p>
		</div>
	);
}
