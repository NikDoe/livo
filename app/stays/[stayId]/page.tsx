import {
	PageContainer,
	ShareButton,
	ImageContainer,
	BookingCalendar,
	UserInfo,
	Description,
	SubmitReview,
	Reviews
} from '@/components/common';
import ReviewSection from '@/components/common/reviews/ReviewSection';
import { FavoriteToggleButton, Rating } from '@/components/mainPages';
import { Amenities, StayDetails } from '@/components/mainPages/staysPage';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { createStayReviewAction, fetchStayDetails, fetchStayRating, fetchStayReviews } from '@/utils/actions';
import { findCountryByCode } from '@/utils/countries';
import { formatCurrency } from '@/utils/format';
import { type Metadata } from 'next';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { IoFlagOutline } from 'react-icons/io5';

const DynamicMap = dynamic(
	() => import('@/components/common/LocationMap'),
	{
		ssr: false,
		loading: () => <Skeleton className='h-[400px] w-full' />,
	}
);

type SingleStayPageProps = {
	params: {
		stayId: string
	}
}

export async function generateMetadata({ params }: SingleStayPageProps): Promise<Metadata> {
	const stay = await fetchStayDetails(params.stayId);

	const stayTitle = stay?.stayTitle;
	const stayDescription = 'Узнайте больше о данном жилье, включая описание, стоимость аренды, удобства и местоположение.';
	const stayKeywords = ['жилье', 'аренда'];

	return {
		title: stayTitle,
		description: stayDescription,
		keywords: stayKeywords,
	};
}

async function SingleStayPage({ params }: SingleStayPageProps) {
	const stay = await fetchStayDetails(params.stayId);

	if (!stay) redirect('/stays');

	const {
		id,
		stayTagline,
		stayTitle,
		countryCode,
		image,
		price,
		beds,
		bedrooms,
		baths,
		guests,
		profile,
		description,
		amenities,
	} = stay;
	const details = { beds, bedrooms, baths, guests };
	const profileData = {
		profileImage: profile.profileImage,
		username: profile.displayName
	};

	const country = findCountryByCode(countryCode);

	return (
		<PageContainer name={stayTitle}>
			<header className='flex justify-between items-start w-full'>
				<div className='flex flex-col w-full lg:w-1/2'>
					<h1 className='title-level_1 mb-4'>{stayTagline}</h1>
					<div className='flex gap-x-4 items-center'>
						<Rating inPage id={id} fetchRating={fetchStayRating} />
						<div className='flex gap-x-1 items-center text-muted-foreground'>
							<IoFlagOutline />
							<p>{country?.name}</p>
						</div>
					</div>
				</div>
				<div className='flex gap-x-4'>
					<ShareButton name={stayTitle} />
					<FavoriteToggleButton id={params.stayId} favoriteType='stay' />
				</div>
			</header>
			<ImageContainer mainImage={image} name={stayTitle} />
			<section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12 items-start'>
				<div className='lg:col-span-8'>
					<UserInfo profileData={profileData} />
					<Separator className='h-[0.5px] my-6' />
					<StayDetails details={details} />
					<Description description={description} />
					<Amenities amenities={amenities} />
					<DynamicMap countryCode={countryCode} />
				</div>
				<div className='lg:col-span-4 flex flex-col p-10 rounded-xl border'>
					<p className='title-level_1 mb-2'>
						<span
							className='text-muted-foreground'
						>
							{formatCurrency(price)} / ночь
						</span>
					</p>
					<Rating inPage id={id} fetchRating={fetchStayRating} />
					<BookingCalendar />
				</div>
			</section>
			<Separator className='h-[0.5px] my-20' />
			<section className='flex gap-x-20 items-start'>
				<div className='w-1/3 p-6 rounded-3xl border items-start'>карточка пользователя этого жилья</div>
				<div className='w-2/3'>
					<ReviewSection
						createReviewAction={createStayReviewAction}
						fetchReviews={fetchStayReviews}
						id={id}
						title={stayTitle}
					/>
				</div>
			</section>
		</PageContainer>
	);
}

export default SingleStayPage;
