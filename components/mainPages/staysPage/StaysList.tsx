import { fetchProperties } from '@/utils/actions';
import EmptyList from '../common/EmptyList';

type StaysListProps = {
	category?: string;
	search?: string;
}

async function StaysList(props: StaysListProps) {
	const { category, search } = props;
	const properties = await fetchProperties({});

	if (properties.length === 0) {
		return (
			<EmptyList />
		);
	}

	return (
		<div>
			Список жилья
		</div>
	);
}

export default StaysList;
