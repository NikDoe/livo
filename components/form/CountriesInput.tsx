'use client';

import { Label } from '@/components/ui/label';
import { formattedCountries, truncateCountryName } from '@/utils/countries';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Prisma } from '@prisma/client';

const name = Prisma.PropertyScalarFieldEnum.country;

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
								{truncateCountryName(item.name, 34)}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</div>
	);
}

export default CountriesInput;