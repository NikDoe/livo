import { Label } from '@/components/ui/label';
import { categories } from '@/utils/staysCategories';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Prisma } from '@prisma/client';

const name = Prisma.PropertyScalarFieldEnum.category;

function CategoriesInput() {
	return (
		<div>
			<Label htmlFor={name}>
				Категория
			</Label>
			<Select
				name={name}
				required
			>
				<SelectTrigger id={name}>
					<SelectValue placeholder='Выберите категорию' />
				</SelectTrigger>
				<SelectContent>
					{categories.map((item) => {
						return (
							<SelectItem key={item.name} value={item.name}>
								<span className='flex items-center gap-4'>
									<item.icon className='w-6 h-6' /> {item.label}
								</span>
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</div>
	);
}

export default CategoriesInput;