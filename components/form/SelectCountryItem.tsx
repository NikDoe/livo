import { CountryItem } from '@/utils/types';
import { SelectItem } from '../ui/select';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '../ui/tooltip';
import { truncateCountryName } from '@/utils/countries';

type SelectCountryItemProps = {
	item: CountryItem
}

function SelectCountryItem({ item }: SelectCountryItemProps) {
	const isLongCountryName = item.name.length > 20;

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<SelectItem value={item.code}>
					{truncateCountryName(item.name)}
				</SelectItem>
			</TooltipTrigger>
			{
				isLongCountryName && (
					<TooltipContent className='truncate'>
						{item.name}
					</TooltipContent>
				)
			}
		</Tooltip>
	);
}

export default SelectCountryItem;
