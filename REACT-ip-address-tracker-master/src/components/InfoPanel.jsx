import './InfoPanel.scss';

import getUTCFormatted from './getUTCFormatted.mjs';

export default function InfoPanel({ IPAddressInfo }) {
	// const { city, timezone, isp, zip, query: ipAddress, countryCode } = IPAddressInfo; // ip-api.com
	// const {
	// 	ipAddress,
	// 	latitude,
	// 	longitude,
	// 	countryName,
	// 	countryCode,
	// 	timeZone,
	// 	zipCode,
	// 	cityName,
	// 	regionName,
	// 	continent,
	// 	continentCode,
	// 	timeZones,
	// } = IPAddressInfo; //freeipapi.com/

	const {
		ip: ipAddress,
		city: cityName,
		region,
		country,
		country_code: countryCode,
		country_name,
		continent_code,
		postal: zipCode,
		latitude,
		longitude,
		timezone: timeZone,
		utc_offset: utcOffset,
		org: isp,
	} = IPAddressInfo; // ipapi.co
	// console.log(IPAddressInfo);

	return (
		<ol className="info-panel">
			<h2 className="visually-hidden">info panel</h2>
			<li className="cell">
				<h3 className="cell-title">IP ADDRESS</h3>
				{/* <p className="cell-content">192.212.174.101</p> */}
				<div className="cell-content">{ipAddress}</div>
			</li>
			<li className="cell">
				<h3 className="cell-title">LOCATION</h3>
				<div className="cell-content">
					<p>{cityName}</p>
					<p>{countryCode}</p>
					<p>{zipCode}</p>
				</div>
				{/* <p className="cell-content">Brooklyn, NY 10001</p> */}
			</li>
			<li className="cell">
				<h3 className="cell-title">TIMEZONE</h3>
				{/* <div className="cell-content">{timeZone}</div> */}
				<div className="cell-content">{getUTCFormatted(utcOffset)}</div>
				{/* <p className="cell-content">UTC -05:00</p> */}
			</li>
			<li className="cell">
				<h3 className="cell-title">ISP</h3>
				<div className="cell-content">{isp}</div>
				{/* <p className="cell-content">SpaceX Starlink</p> */}
			</li>
		</ol>
	);
}
