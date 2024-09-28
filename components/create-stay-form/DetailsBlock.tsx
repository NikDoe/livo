import { CategoriesInput, CountriesInput, FormInput, PriceInput } from '../form';

function DetailsBlock() {
	return (
		<>
			<h3 className='text-base font-bold mt-20 mb-10'>Детали о жилье</h3>
			<div className='grid md:grid-cols-2 gap-10 my-10'>
				<FormInput
					name='stayTitle'
					type='text'
					label='Название (макс. 20 символов)'
					defaultValue='Глэмпинг в Гомеле: Уютный домик в стиле Тосканы'
				/>
				<PriceInput />
				<CategoriesInput />
				<CountriesInput placeholder='Выберите страну' />
			</div>
		</>
	);
}

export default DetailsBlock;
