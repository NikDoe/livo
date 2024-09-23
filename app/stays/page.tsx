import { fetchProperties } from '@/utils/actions';

async function StaysPage() {
	const properties = await fetchProperties({});

	if (properties.length === 0) {
		return <h1 className='text-3xl'>Нет доступных объектов для жилья</h1>;
	}

	return <h1 className='text-3xl'>StaysPage</h1>;
}

export default StaysPage;