import { Prisma } from '@prisma/client';
import { CategoriesInput, CountriesInput, FormInput, PriceInput } from '../form';

const titleInputName = Prisma.StayScalarFieldEnum.stayTitle;
const taglineInputName = Prisma.StayScalarFieldEnum.stayTagline;

function DetailsBlock() {
	return (
		<>
			<h3 className='text-base font-bold mt-20 mb-10'>Детали о жилье</h3>
			<div className='grid md:grid-cols-2 gap-10 my-10'>
				<FormInput
					name={titleInputName}
					type='text'
					label='Название (макс. 20 символов)'
					defaultValue='Глэмпинг в Гомеле'
				/>
				<FormInput
					name={taglineInputName}
					type='text'
					label='Краткое описание'
					defaultValue='Уютный домик в стиле Тосканы'
				/>
				<PriceInput />
				<CategoriesInput />
				<CountriesInput placeholder='Выберите страну' />
			</div>
		</>
	);
};

export default DetailsBlock;
