import { fetchProperties } from '@/utils/actions';
import EmptyList from '../common/EmptyList';
import StaysList from './StaysList';

type StaysContainerProps = {
	category?: string;
	search?: string;
}

async function StaysContainer(props: StaysContainerProps) {
	const { category, search } = props;
	const properties = await fetchProperties({ category, search });

	if (properties.length === 0) {
		return (
			<EmptyList />
		);
	}

	return (
		<StaysList />
	);
}

export default StaysContainer;
