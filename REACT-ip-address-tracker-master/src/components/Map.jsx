import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapContainer.scss';
import markerPosition from '../images/icon-location.svg';
const customIcon = L.icon({ iconUrl: markerPosition, iconSize: [40, 50] });

export default function Map({ IPAddressInfo }) {
	// console.log('Map');
	// console.log(IPAddressInfo);

	// const { city, country, isp, zip, lat, lon, regionName, query: ipAddress } = IPAddressInfo;
	const {
		ip: ipAddress,
		city: cityName,
		region,
		country,
		country_code: countryCode,
		country_name,
		continent_code,
		postal: zipCode,
		latitude: lat,
		longitude: lon,
		timezone: timeZone,
		utc_offset,
		org: isp,
	} = IPAddressInfo; // ipapi.co

	const position = [lat, lon];

	return (
		<div className="map-container">
			<MapContainer
				key={JSON.stringify(position)}
				center={position}
				zoom={13}
				scrollWheelZoom={false}
				// style={{ height: '80vh', width: '100%' }}
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{/* <Marker position={{ lat: 51.505, lng: -0.09 }} icon={customIcon}> */}
				<Marker position={position} icon={customIcon}>
					<Popup className="marker-popup">
						{`${cityName} ${countryCode}`}
						{/* <p>IP:{ipAddress}</p>
						<p>ISP:{isp}</p>
						<p>{city}</p>
						<p>{regionName}</p>
						<p>{country}</p>
						<p>{zip}</p> */}
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
