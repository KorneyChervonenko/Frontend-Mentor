import './CountriesCard.scss';
export default function CountryCard({
	country,
	setDetailsActive,
	// setCurrentCountry,
	setHistory,
}) {
	function handleClick() {
		// setCurrentCountry(country);
		setHistory((currentHistory) => [...currentHistory, country]);
		setDetailsActive(true);
	}

	// const cardStyle = { backgroundImage: `url(${country.flag})` };
	const cardStyle = {};
	return (
		<li className="country-card" style={cardStyle} onClick={handleClick}>
			{/* <h3 className="country-name">{country.name}</h3> */}
			{/* <h3 className="country-name">{country.name}</h3> */}
			<img src={country.flag} alt={`flag of ${country.name}`} className="country-flag" />
			<table className="country-info">
				<caption className="country-name">{country.name}</caption>
				<tbody>
					<tr>
						<th scope="row">Population:</th>
						<td>{country.population}</td>
					</tr>
					<tr>
						<th scope="row">Region:</th>
						<td>{country.region}</td>
					</tr>
					<tr>
						<th scope="row">Capital:</th>
						<td>{country.capital}</td>
					</tr>
				</tbody>
			</table>

			{/* <div className="country-info">
				<p className="table-row">
					<span className="table-row-title">Population:</span>
					{country.population}
				</p>
				<p className="table-row">
					<span className="table-row-title">Region:</span>
					{country.region}
				</p>
				<p className="table-row">
					<span className="table-row-title">Capital:</span>
					{country.capital}
				</p>
			</div> */}
		</li>
	);
}
