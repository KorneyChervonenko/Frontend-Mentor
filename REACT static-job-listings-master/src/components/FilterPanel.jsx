import './FilterPanel.scss';
import Filter from './Filter.jsx';

export default function FilterPanel({ filterTags, setFilters }) {
	function clearFilterTags() {
		setFilters(new Set());
	}

	if (filterTags.size === 0) return;
	return (
		<div className="filter-panel">
			<h3 className="visually-hidden">filter panel</h3>
			<ul className="filter-panel__list">
				{[...filterTags].map((tag, index) => (
					<Filter tag={tag} key={index} setFilters={setFilters} />
				))}
			</ul>

			<button type="button" className="filter-panel__clear-btn" onClick={clearFilterTags}>
				Clear
			</button>
		</div>
	);
}
