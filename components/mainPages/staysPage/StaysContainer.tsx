import { fetchStays } from '@/utils/actions';
import EmptyList from '../common/EmptyList';
import StaysList from './StaysList';

type StaysContainerProps = {
	category?: string;
	search?: string;
}

async function StaysContainer(props: StaysContainerProps) {
	const { category, search } = props;
	const stays = await fetchStays({ category, search });

	if (stays.length === 0) {
		return (
			<EmptyList />
		);
	}

	return (
		<StaysList stays={stays} />
	);
}

export default StaysContainer;
