// import { useState } from 'react';
import './Search.scss';

export default function Search({ region, setRegion, searchQuery, setSearchQuery }) {
	// const [region, setRegion] = useState('all');
	// const [searchQuery, setSearchQuery] = useState('');
	const regions = ['Asia', 'Europe', 'Africa', 'Oceania', 'Americas', 'Polar', 'Antarctic Ocean', 'Antarctic'];
	return (
		<form className="search">
			<input
				type="text"
				placeholder="🔎 Search for a country..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
				required
			/>
			<select name="region" value={region} onChange={(e) => setRegion(e.target.value)}>
				<option value="All">Filter by region</option>
				{regions.map((region) => (
					<option value={region} key={region}>
						{region}
					</option>
				))}
				{/* <option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
				<option value="Polar">Polar</option>
				<option value="Antarctic Ocean">Antarctic Ocean</option>
				<option value="Antarctic">Antarctic</option> */}
			</select>
		</form>
	);
}
