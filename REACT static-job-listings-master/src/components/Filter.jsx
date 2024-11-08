import './Filter.scss';

export default function Filter({ tag, setFilters }) {
	function delFilterTag(tagToDel) {
		setFilters((currentTags) => new Set([...currentTags].filter((tag) => tag !== tagToDel)));
	}

	return (
		<li className="filter">
			<span className="filter__title">{tag}</span>
			<button type="button" className="filter__del-btn" onClick={() => delFilterTag(tag)}>
				<span className="visually-hidden">delete</span>
			</button>
		</li>
	);
}
