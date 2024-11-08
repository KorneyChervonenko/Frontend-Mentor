import Job from './Job.jsx';
import './JobList.scss';

export default function JobList({ jobList, filterTags, setFilters }) {
	let filteredVacancies;
	if (filterTags.size === 0) filteredVacancies = [...jobList];
	else
		filteredVacancies = jobList.filter((job) =>
			filterTags.isSubsetOf(new Set([job.role, job.level, ...job.languages, ...job.tools]))
		);

	return (
		<ul className="job-list">
			{filteredVacancies.map((job, index) => (
				<Job job={job} key={job.id} setFilters={setFilters} />
			))}
		</ul>
	);
}
