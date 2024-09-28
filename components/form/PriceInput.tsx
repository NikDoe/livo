import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Prisma } from '@prisma/client';
import { DEFAULT_STAY_PRICE } from '@/utils/constants';

const name = Prisma.StayScalarFieldEnum.price;

type FormInputNumberProps = {
	defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
	return (
		<div>
			<Label htmlFor='price' className='uppercase'>
				Цена (BYN)
			</Label>
			<Input
				id={name}
				type='number'
				name={name}
				min={0}
				defaultValue={defaultValue || DEFAULT_STAY_PRICE}
				required
			/>
		</div>
	);
}

export default PriceInput;