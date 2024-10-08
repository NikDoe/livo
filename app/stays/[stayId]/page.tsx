import { PageContainer, ShareButton, ImageContainer, BookingCalendar, UserInfo } from '@/components/common';
import { FavoriteToggleButton, Rating } from '@/components/mainPages';
import { StayDetails } from '@/components/mainPages/staysPage';
import { Separator } from '@/components/ui/separator';
import { fetchStayDetails } from '@/utils/actions';
import { findCountryByCode } from '@/utils/countries';
import { formatCurrency } from '@/utils/format';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
import { title } from 'process';
import { IoFlagOutline } from 'react-icons/io5';

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
		profile
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
						<Rating inPage id={id} />
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
			<ImageContainer mainImage={image} name={title} />
			<section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
				<div className='lg:col-span-8'>
					<UserInfo profileData={profileData} />
					<Separator className='h-[0.5px] my-6' />
					<StayDetails details={details} />
				</div>
				<div
					className='lg:col-span-4 flex flex-col p-10 rounded-xl border'
				>
					<p className='title-level_1 mb-2'>
						{formatCurrency(price)}
						<span className='text-muted-foreground'> / ночь</span>
					</p>
					<Rating inPage id={id} />
					<BookingCalendar />
				</div>
			</section>
		</PageContainer>
	);
}

export default SingleStayPage;
