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

function CategoriesInput({ defaultValue }: { defaultValue?: string }) {
	return (
		<div>
			<Label htmlFor={name}>
				Категории
			</Label>
			<Select
				defaultValue={defaultValue || categories[0].label}
				name={name}
				required
			>
				<SelectTrigger id={name}>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{categories.map((item) => {
						return (
							<SelectItem key={item.label} value={item.label}>
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