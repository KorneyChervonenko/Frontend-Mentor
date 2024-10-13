import { useState } from 'react';
import './Question.scss';

export function Question({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggle() {
		setIsOpen(() => !isOpen);
	}

	const stateIconName = isOpen ? 'minus' : 'plus';

	return (
		<li className="question" onClick={handleToggle}>
			<h2 className="question-line">
				<span className="question-text">{question}</span>
				<img src={`./assets/images/icon-${stateIconName}.svg`} alt="" />
			</h2>
			{isOpen && <p className="answer-text">{answer}</p>}
		</li>
	);
}
