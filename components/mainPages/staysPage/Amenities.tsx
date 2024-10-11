import { type Amenity, amenities as allAmenities } from '@/utils/amenities';

type AmenitiesProps = {
	amenities: string;
};

function Amenities({ amenities }: AmenitiesProps) {
	const amenitiesList: Amenity[] = JSON.parse(amenities as string);
	const amenitiesMap = new Map(allAmenities.map(amenity => [amenity.name, amenity]));

	const amenitiesWithIcons = amenitiesList.map(selectedAmenity => {
		const amenity = amenitiesMap.get(selectedAmenity.name);
		return amenity ? { ...amenity, selected: selectedAmenity.selected } : null;
	}).filter(Boolean) as Amenity[];

	const hasSelectedAmenities = amenitiesWithIcons.some(amenity => amenity.selected);

	if (!hasSelectedAmenities) {
		return null;
	}

	return (
		<div className='mt-10'>
			<h1 className='title-level_2 mb-6'>Что предлагает это место для вашего отдыха</h1>
			<div className='grid md:grid-cols-2 gap-x-4 text-muted-foreground'>
				{amenitiesWithIcons.map((amenity) => {
					if (!amenity.selected) {
						return null;
					}

					return (
						<div key={amenity.name} className='flex items-center gap-x-4 mb-2'>
							<amenity.icon className='h-5 w-5' />
							<span className='font-light text-sm capitalize'>
								{amenity.name}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Amenities;
