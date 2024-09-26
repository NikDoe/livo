'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { categories } from '@/utils/staysCategories';
import { useRouter } from 'next/navigation';

type StaysCategoriesListProps = {
	category?: string;
	search?: string;
}

function StaysCategoriesList({ search }: StaysCategoriesListProps) {
	const router = useRouter();
	const searchTerm = search ? `&search=${search}` : '';

	const handleChange = (value: string) => {
		router.push(`/stays?category=${value}${searchTerm}`, { scroll: false });
	};

	return (
		<Select onValueChange={handleChange}>
			<SelectTrigger className='max-w-80'>
				<SelectValue placeholder='Выберите категорию' />
			</SelectTrigger>
			<SelectContent>
				{categories.map((categoryItem) => {
					return (
						<SelectItem
							key={categoryItem.name}
							value={categoryItem.name}
						>
							<span className='flex items-center gap-4'>
								<categoryItem.icon className='w-6 h-6' /> {categoryItem.label}
							</span>
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
}

export default StaysCategoriesList;
