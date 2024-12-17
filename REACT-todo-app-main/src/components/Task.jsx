import './Task.scss';

export default function Task({
	task,
	// onDelTask,
	// onCompleteTask,
	index,
	dragStart,
	dragEnter,
	dragEnd,
	dispatch,
}) {
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
				<input
					className="checkbox-control"
					type="checkbox"
					// onChange={() => onCompleteTask(task)}
					onChange={() => dispatch({ type: 'toggle_completed', payload: { selectedTask: task } })}
					checked={task.isCompleted}
				/>
				<span className="checkbox-emulator"></span>
			</label>

			{/* <span className="task-title">{task.title}</span> */}

			<input
				className="task-title"
				type="text"
				value={task.title}
				onChange={(e) =>
					dispatch({
						type: 'change_title',
						payload: { selectedTask: task, newTitle: e.target.value },
					})
				}
			/>

			<button
				className="del-button"
				type="button"
				// onClick={() => {onDelTask(task);}}
				onClick={() => dispatch({ type: 'del_task', payload: { selectedTask: task } })}
			>
				<span className="visually-hidden">delete task</span>
			</button>
		</li>
	);
}
