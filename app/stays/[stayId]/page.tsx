import { PageContainer, ShareButton } from '@/components/common';
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

	const { id, stayTagline, stayTitle } = stay;

	return (
		<PageContainer name={stayTitle}>
			<div className='flex justify-between items-start w-full'>
				<h1 className='title-level_1 w-full lg:w-1/2'>{stayTagline}</h1>
				<div className='flex gap-x-4'>
					<ShareButton name={stayTitle} />
					<FavoriteToggleButton id={params.stayId} favoriteType='stay' />
				</div>
			</div>
		</PageContainer>
	);
}

export default SingleStayPage;
