import './App.scss';

import Header from './Header.jsx';
import InputForm from './InputForm.jsx';
import InfoPanel from './InfoPanel.jsx';
import Map from './Map.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

// переписать пути картинок??!!

// const ipGeolocationAPIURL = 'http://ip-api.com/json/';

export default function App() {
	const [currentIP, setCurrentIP] = useState('');
	const [IPAddressInfo, setIPAddressInfo] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		function () {
			async function fetchIPinfo() {
				try {
					setIsLoading(true);
					let response, data;
					// response = await fetch(`http://ip-api.com/json/${currentIP}`);
					// response = await fetch(`https://freeipapi.com/api/json/${currentIP}`);
					response = await fetch(`https://ipapi.co/${currentIP}/json/`);
					// console.log(response);
					if (!response.ok) throw new Error('Something went wrong with fetching data from IP Geolocation servive');
					data = await response.json();
					console.log(data);
					if (data.error) throw new Error('Invalid IP Address');
					// alert(data.query);
					setCurrentIP(data.ip);
					setIPAddressInfo(data);
				} catch (error) {
					console.log(error.message);
					alert(error.message);
				} finally {
					setIsLoading(false);
				}
			}
			fetchIPinfo();
		},
		[currentIP]
	);

	return (
		<main className="App">
			<Header />
			<InputForm currentIP={currentIP} setCurrentIP={setCurrentIP} />

			{isLoading && <CircularProgress style={{ color: 'yellow' }} />}
			{!isLoading && IPAddressInfo && (
				<>
					<InfoPanel IPAddressInfo={IPAddressInfo} />
					<Map IPAddressInfo={IPAddressInfo} />
				</>
			)}
		</main>
	);
}
