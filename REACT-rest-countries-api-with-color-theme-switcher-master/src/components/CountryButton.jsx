import './CountryButton.scss';

export default function CountryButton({
	countries,
	countryCode,
	// setCurrentCountry,
	// history,
	setHistory,
}) {
	// console.log(countries);
	const country = countries.find((country) => country.alpha3Code === countryCode);

	function handleClick(country) {
		// setCurrentCountry(country);
		setHistory((currentHistory) => [...currentHistory, country]);
	}
	return (
		<li className="country-button">
			{/* {countryCode} */}

			<button type="button" onClick={() => handleClick(country)}>
				{country.name}
			</button>
		</li>
	);
}
