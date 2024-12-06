import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import CountriesList from './CountriesList.jsx';
import CountryDetails from './CountryDetails.jsx';
import CircularProgress from '@mui/material/CircularProgress';

import './App.scss';

export default function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [countries, setCountries] = useState([]);
	const [isDetailsActive, setDetailsActive] = useState(false);
	// const [currentCountry, setCurrentCountry] = useState('Afghanistan');
	// const [currentCountry, setCurrentCountry] = useState(undefined);
	const [history, setHistory] = useState([]);
	const [region, setRegion] = useState('All');
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(function () {
		console.clear();
		async function fetchCountries() {
			try {
				setIsLoading(true);
				// let response, data;
				const response = await fetch('data.json'); //
				// const response = await fetch('https://restcountries.com/v2/all');
				// console.log(response);
				if (!response.ok) throw new Error('Something went wrong with fetching data');
				const data = await response.json();
				// console.log(data);
				// setCountries(data.slice(0, 8));
				setCountries(data);
				// const regions = new Set(data.map((country) => country.region));
				// console.log(regions);

				// console.log(countries);
			} catch (error) {
				console.log(error.message);
				alert(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchCountries();
	}, []);
	return (
		<main className="App">
			<Header
				setDetailsActive={setDetailsActive}
				setHistory={setHistory}
				setRegion={setRegion}
				setSearchQuery={setSearchQuery}
			/>
			{history.length > 0 && isDetailsActive ? (
				<CountryDetails
					key={history.at(-1).name}
					countries={countries}
					setDetailsActive={setDetailsActive}
					history={history}
					setHistory={setHistory}
				/>
			) : (
				<>
					<Search region={region} setRegion={setRegion} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
					{isLoading && (
						<>
							<CircularProgress style={{ color: 'yellow' }} />
						</>
					)}
					{!isLoading && (
						<CountriesList
							searchQuery={searchQuery}
							region={region}
							countries={countries}
							setDetailsActive={setDetailsActive}
							setHistory={setHistory}
						/>
					)}
				</>
			)}
		</main>
	);
}
