'use client';

import { Label } from '@/components/ui/label';
import { formattedCountries } from '@/utils/countries';
import { formatText } from '@/utils/format';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Prisma } from '@prisma/client';
import { COUNTRY_NAME_MAX_LENGTH } from '@/utils/constants';

const name = Prisma.StayScalarFieldEnum.countryCode;

function CountriesInput({ placeholder }: { placeholder?: string }) {
	return (
		<div>
			<Label htmlFor={name}>
				Страна
			</Label>
			<Select
				name={name}
				required
			>
				<SelectTrigger id={name}>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{formattedCountries.map((item) => {
						return (
							<SelectItem
								key={item.code}
								value={item.code}
							>
								{formatText(item.name, COUNTRY_NAME_MAX_LENGTH)}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</div>
	);
}

export default CountriesInput;