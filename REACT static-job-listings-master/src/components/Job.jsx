import './Job.scss';

export default function Job({ job, setFilters }) {
	function addFilterToFilterPanel(tagToAdd) {
		setFilters((currentTags) => new Set(currentTags).add(tagToAdd));
	}

	const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
	return (
		<li className={`job  ${job.featured ? 'job-featured' : ''}`}>
			<h3 className="visually-hidden">vacancy</h3>
			<img className="company-logo" src={job.logo} alt="company logo" />
			<div className="vacancy">
				<div className="company">
					<span className="company__title">{job.company}</span>
					{job.new && <span className="company__tag company__tag-green">NEW!</span>}
					{job.featured && <span className="company__tag company__tag-black">FEATURED</span>}
				</div>
				<h3 className="position">{job.position}</h3>
				<div className="posted-contract-location">
					<span>{job.postedAt}</span>
					<span>•</span>
					<span>{job.contract}</span>
					<span>•</span>
					<span>{job.location}</span>
				</div>
			</div>
			<hr />
			<div className="job-tags">
				{jobTags.map((tag, index) => (
					<span className="job-tag" key={index} onClick={() => addFilterToFilterPanel(tag)}>
						{tag}
					</span>
				))}
			</div>
		</li>
	);
}
