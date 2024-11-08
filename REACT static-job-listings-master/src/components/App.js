import { useState } from 'react';
import JOBS from '../data.mjs';
import FilterPanel from './FilterPanel.jsx';
import JobList from './JobList.jsx';
import './App.scss';

const tagsShort = [
	// 'HTML',
	// 'CSS',
	// 'JavaScript',
	'React',
];

// const tagsLong = [
// 	'HTML',
// 	'CSS',
// 	'JavaScript',
// 	'React',
// 	'SASS',
// 	'Less',
// 	'Angular',
// 	'Redux',
// 	'Vue',
// 	'Tailwind CSS',
// 	'Next.js',
// 	'Svelte',
// 	'MongoDB',
// ];

function App() {
	const [filterTags, setFilters] = useState(new Set([...tagsShort]));
	const jobList = [...JOBS];

	return (
		<main className="App">
			<h1 className="visually-hidden">Job Listings</h1>
			<div className="bg-header"></div>
			<FilterPanel filterTags={filterTags} setFilters={setFilters} />
			<JobList jobList={jobList} filterTags={filterTags} setFilters={setFilters} />
		</main>
	);
}

export default App;
