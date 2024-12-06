import CountryCard from './CountryCard.jsx';

import './CountriesList.scss';

export default function CountriesList({
	searchQuery,
	region,
	countries,
	setDetailsActive,
	// setCurrentCountry,
	setHistory,
}) {
	// alert('region:' + region);

	const countriesFilteredByRegion =
		region === 'All' ? [...countries] : countries.filter((country) => country.region === region);
	// alert(countriesFilteredByRegion.length);
	const filteredCountries =
		searchQuery === ''
			? countriesFilteredByRegion
			: countriesFilteredByRegion.filter((country) => country.name.toLowerCase().startsWith(searchQuery));

	return (
		<>
			<h2 className="visually-hidden">countries list</h2>
			<ul className="countries-list">
				{filteredCountries.map((country, index) => (
					<CountryCard
						key={country.name}
						country={country}
						setDetailsActive={setDetailsActive}
						// setCurrentCountry={setCurrentCountry}
						setHistory={setHistory}
					/>
				))}
			</ul>
		</>
	);
}
