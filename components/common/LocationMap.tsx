'use client';

import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
const iconUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
	iconUrl: iconUrl,
	iconSize: [20, 30],
});

import { findCountryByCode } from '@/utils/countries';
import { MAP_ZOOM } from '@/utils/constants';

type StayMapProps = {
	countryCode: string
}

function LocationMap({ countryCode }: StayMapProps) {
	const defaultLocation = [51.505, -0.09] as [number, number];
	const location = findCountryByCode(countryCode)?.location as [number, number];
	return (
		<div className='mt-10'>
			<div className='mb-6'>
				<h1 className='title-level_2 mb-6'>Где вы будете жить</h1>
			</div>
			<MapContainer
				scrollWheelZoom={false}
				zoomControl={false}
				className='h-[50vh] rounded-lg relative z-0'
				center={location || defaultLocation}
				zoom={MAP_ZOOM}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<ZoomControl position='bottomright' />
				<Marker
					position={location || defaultLocation}
					icon={markerIcon}
				></Marker>
			</MapContainer>
		</div>
	);
}

export default LocationMap;
