import { getPluralBaths, getPluralBedrooms, getPluralBeds, getPluralGuests } from '@/utils/pluralRules';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdBedroomParent } from 'react-icons/md';
import { FaBed } from 'react-icons/fa6';
import { BiSolidBath } from 'react-icons/bi';

type StayDetailsProps = {
	details: {
		bedrooms: number;
		baths: number;
		guests: number;
		beds: number;
	};
}

function StayDetails({ details }: StayDetailsProps) {
	const { baths, bedrooms, beds, guests } = details;

	return (
		<div className='flex gap-6 text-muted-foreground'>
			<p className='flex gap-x-1'>
				<IoPeopleSharp className='w-5 h-5' />
				{getPluralGuests(guests)}
			</p>
			<p className='flex gap-x-1'>
				<MdBedroomParent className='w-5 h-5' />
				{getPluralBedrooms(bedrooms)}
			</p>
			<p className='flex gap-x-1'>
				<FaBed className='w-5 h-5' />
				{getPluralBeds(beds)}
			</p>
			<p className='flex gap-x-1'>
				<BiSolidBath className='w-5 h-5' />
				{getPluralBaths(baths)}
			</p>
		</div>
	);
}

export default StayDetails;
