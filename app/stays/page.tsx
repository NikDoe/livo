import { Hero } from '@/components/hero';
import { fetchProperties } from '@/utils/actions';

const emptyProperties = (
	<h1 className='text-3xl'>Нет доступных объектов для жилья</h1>
);

async function StaysPage() {
	const properties = await fetchProperties({});

	return (
		<>
			<Hero />
			<h1 className='text-3xl'>StaysPage</h1>
			{properties.length === 0 && emptyProperties}
		</>
	);
}

export default StaysPage;