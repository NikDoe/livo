'use client';

import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { amenities, type Amenity } from '@/utils/amenities';
import { Prisma } from '@prisma/client';

const inputName = Prisma.StayScalarFieldEnum.amenities;

type AmenitiesBlockProps = {
	defaultValue?: Amenity[]
}

function AmenitiesBlock({ defaultValue }: AmenitiesBlockProps) {
	const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
		defaultValue || amenities
	);

	const handleChange = (amenity: Amenity) => {
		setSelectedAmenities((prev) => {
			return prev.map((a) => {
				if (a.name === amenity.name) {
					return { ...a, selected: !a.selected };
				}
				return a;
			});
		});
	};

	return (
		<>
			<h3 className='text-base font-bold mt-20 mb-10'>Оснащение и удобства</h3>
			<section>
				<input
					type='hidden'
					name={inputName}
					value={JSON.stringify(selectedAmenities)}
				/>
				<div className='grid grid-cols-2 gap-4'>
					{selectedAmenities.map((amenity) => (
						<div key={amenity.name} className='flex items-center space-x-4'>
							<Checkbox
								id={amenity.name}
								checked={amenity.selected}
								onCheckedChange={() => handleChange(amenity)}
							/>
							<label
								htmlFor={amenity.name}
								className='text-sm font-medium leading-none capitalize flex gap-x-4 items-center'
							>
								{amenity.name}
							</label>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default AmenitiesBlock;
