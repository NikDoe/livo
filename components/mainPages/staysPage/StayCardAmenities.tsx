import { amenities, type Amenity } from '@/utils/amenities';

type StayCardAmenitiesProps = {
	cardAmenities: string;
}

function StayCardAmenities({ cardAmenities }: StayCardAmenitiesProps) {
	const savedAmenities: Amenity[] = JSON.parse(cardAmenities);

	const selectedAmenities = amenities
		.map((amenity) => {
			const savedAmenity = savedAmenities.find((a) => a.name === amenity.name);
			return savedAmenity ? { ...amenity, selected: savedAmenity.selected } : amenity;
		})
		.filter((amenity) => amenity.selected)
		.slice(0, 2);

	return (
		<div className='text-muted-foreground text-sm grid grid-rows-2 h-full'>
			{selectedAmenities.map((amenity, index) => (
				<div key={index} className='flex items-center space-x-2'>
					<amenity.icon />
					<span>{amenity.name}</span>
				</div>
			))}
			{selectedAmenities.length === 0 && (
				<span>Пока нет указанных удобств</span>
			)}
		</div>
	);
}

export default StayCardAmenities;
