// import getDetails from './utils/getDetails.mjs';
import CountryButton from './CountryButton.jsx';
import './CountryDetails.scss';

export default function CountryDetails({
	// currentCountry,
	countries,
	setDetailsActive,
	// setCurrentCountry,
	history,
	setHistory,
}) {
	// console.log(countryName);

	const currentCountry = history.at(-1);
	if (!currentCountry) return;

	// TODO return to previous country

	function handleBackClick() {
		// setDetailsActive(false);
		setHistory((currentHistory) => currentHistory.slice(0, -1));
		if (history.length === 0) setDetailsActive(false);
	}

	function hasNeighborStates(country) {
		return (
			Object.hasOwn(country, 'borders') && currentCountry.borders instanceof Array && currentCountry.borders.length > 0
		);
	}

	// const neighborCountry = currentCountry.borders.map((countryCode) => <li>countryCode</li>);

	return (
		<>
			<button className="back-button" type="button" onClick={handleBackClick}>
				⬅ Back
			</button>

			<div className="country-details">
				<h2 className="visually-hidden">Country Details</h2>

				<img className="country-flag" src={currentCountry.flag} alt={`flag of ${currentCountry.name}`} />
				<section className="country-statistic">
					<h3 className="country-name">{currentCountry.name}</h3>
					{/* Country statistic */}
					<table className="statistic-table">
						<tbody>
							<tr>
								<th scope="row">Native Name:</th>
								<td>{currentCountry?.nativeName}</td>
							</tr>
							<tr>
								<th scope="row">Population:</th>
								<td>{currentCountry?.population}</td>
							</tr>
							<tr>
								<th scope="row">Region:</th>
								<td>{currentCountry?.region}</td>
							</tr>
							<tr>
								<th scope="row">Sub Region:</th>
								<td>{currentCountry?.subregion}</td>
							</tr>
							<tr>
								<th scope="row">Capital:</th>
								<td>{currentCountry?.capital}</td>
							</tr>
							<tr>
								<th scope="row">Top Level Domain:</th>
								<td>{currentCountry?.topLevelDomain}</td>
							</tr>
							<tr>
								<th scope="row">Currencies:</th>
								<td>{currentCountry?.currencies.map((currency) => currency.name).join(', ')}</td>
							</tr>
							<tr>
								<th scope="row">Languages:</th>
								<td>{currentCountry?.languages.map((language) => language.name).join(', ')}</td>
							</tr>
						</tbody>
					</table>
					{hasNeighborStates(currentCountry) && (
						<table className="neighbor-countries">
							<tbody>
								<tr>
									<th scope="row">Border Countries:</th>
									<td>
										<menu className="neighbor-countries-list">
											{currentCountry.borders.map((countryCode) => (
												// <li key={countryCode}>{countryCode}</li>
												<CountryButton
													key={countryCode}
													countries={countries}
													countryCode={countryCode}
													// setCurrentCountry={setCurrentCountry}
													history={history}
													setHistory={setHistory}
												/>
											))}
										</menu>
									</td>
								</tr>
							</tbody>
						</table>
					)}
				</section>
			</div>
		</>
	);
}
