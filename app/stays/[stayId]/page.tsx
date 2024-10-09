import { PageContainer, ShareButton } from '@/components/common';
import { FavoriteToggleButton } from '@/components/mainPages';
import { fetchStayDetails } from '@/utils/actions';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';

type SingleStayPageProps = {
	params: {
		stayId: string
	}
}

export async function generateMetadata({ params }: SingleStayPageProps): Promise<Metadata> {
	const stay = await fetchStayDetails(params.stayId);

	const stayTitle = stay?.stayTitle;
	const stayDescription = 'Узнайте больше о данном жилье, включая описание, стоимость аренды, удобства и местоположение.';
	const stayKeywords = ['жилье', 'аренда', 'жилье', 'недвижимость', 'квартира'];

	return {
		title: stayTitle,
		description: stayDescription,
		keywords: stayKeywords,
	};
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
