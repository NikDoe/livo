import { findCountryByCode } from '@/utils/countries';
import { IoFlagOutline } from 'react-icons/io5';

function FlagAndCountryName({ countryCode }: { countryCode: string }) {
	const validCountry = findCountryByCode(countryCode);

	const countryName =
		validCountry!.name.length > 35
			? `${validCountry!.name.substring(0, 35)}...`
			: validCountry!.name;

	return (
		<span className='flex items-center gap-2 text-sm text-muted-foreground'>
			<IoFlagOutline className='w-5 h-5' />
			{countryName}
		</span>
	);
}

export default FlagAndCountryName;