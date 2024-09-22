import { accommodationList } from '@/utils/accommodation';
import { CounterInput } from '../form';

function AccommodationBlock() {
	return (
		<>
			<h3 className='text-base font-bold mt-20 mb-10'>Информация о проживании</h3>
			<div className='grid md:grid-cols-2 gap-10 mt-10'>
				{accommodationList.map(({ name, labelText }) => (
					<CounterInput
						key={name}
						name={name}
						labelText={labelText}
					/>
				))}
			</div>
		</>
	);
}

export default AccommodationBlock;
