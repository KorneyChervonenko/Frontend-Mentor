import './App.scss';
import { Question } from './Question';

const questions = [
	{
		question: 'What is Frontend Mentor, and how will it help me?',
		answer:
			"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
	},

	{
		question: 'Is Frontend Mentor free?',
		answer:
			'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
	},

	{
		question: 'Can I use Frontend Mentor projects in my portfolio?',
		answer:
			"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
	},

	{
		question: "How can I get help if I'm stuck on a challenge?",
		answer:
			"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
	},
];

export default function App() {
	return (
		<main className="App">
			<h1>
				<img src="./assets/images/icon-star.svg" alt="" />
				<span>FAQs</span>
			</h1>
			<ul>
				{questions.map((item, index) => (
					<Question question={item.question} answer={item.answer} key={index} />
				))}
			</ul>
		</main>
	);
}

// export default App;

// function AccordionItem({ number, title, text }) {
// 	const [isOpen, setIsOpen] = useState(false);

// 	function handleToggle() {
// 		setIsOpen(() => !isOpen);
// 	}

// 	return (
// 		<div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
// 			<p className="number">{number < 10 ? `0${number}` : number}</p>
// 			<p className="title">{title}</p>
// 			<p className="icon">{isOpen ? '-' : '+'}</p>
// 			{isOpen && <p className="content-box">{text}</p>}
// 		</div>
// 	);
// }
