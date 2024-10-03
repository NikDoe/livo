import PageContainer from '@/components/common/PageContainer';
import { FavoriteToggleButton } from '@/components/mainPages';
import { fetchStayDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';

type SingleStayPageProps = {
	params: {
		stayId: string
	}
}

async function SingleStayPage({ params }: SingleStayPageProps) {
	const stay = await fetchStayDetails(params.stayId);

	if (!stay) redirect('/stays');

	return (
		<PageContainer name={stay.stayTitle}>
			<FavoriteToggleButton id={params.stayId} favoriteType='stay' />
			<p> Жильё № {params.stayId}</p>
		</PageContainer>
	);
}

export default SingleStayPage;
