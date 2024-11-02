import './Task.scss';

export default function Task({ task, onDelTask, onCompleteTask, index, dragStart, dragEnter, dragEnd }) {
	return (
		<li
			index={index}
			className={`task ${task.isCompleted ? 'completed' : ''}`}
			draggable
			onDragStart={() => dragStart(index)}
			onDragEnter={() => dragEnter(index)}
			onDragEnd={dragEnd}
		>
			<label className="checkbox">
				<input className="checkbox-control" type="checkbox" onChange={() => onCompleteTask(task)} />
				<span className="checkbox-emulator"></span>
			</label>
			<span className="task-title">{task.title}</span>
			<button
				className="del-button"
				type="button"
				onClick={() => {
					onDelTask(task);
				}}
			>
				<span className="visually-hidden">delete task</span>
			</button>
		</li>
	);
}
