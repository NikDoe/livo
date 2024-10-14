import { Hero } from '@/components/hero';
import { SearchInput } from '@/components/mainPages';
import { StaysCategoriesList, StaysContainer } from '@/components/mainPages/staysPage';
import LoadingStays from '@/components/mainPages/staysPage/LoadingStays';
import { Separator } from '@/components/ui/separator';
import { Suspense } from 'react';

type StaysPageProps = {
	searchParams: {
		category?: string;
		search?: string;
	}
}

async function StaysPage({ searchParams }: StaysPageProps) {

	return (
		<section className='container space-y-10'>
			<Hero />
			<SearchInput placeholder='Найти жильё...' />
			<div className='flex flex-col'>
				<h1 className='title-level_1 mb-8'>Места для вашего отдыха</h1>
				<Separator />
			</div>
			<StaysCategoriesList
				category={searchParams?.category}
				search={searchParams?.search}
			/>
			<Suspense fallback={<LoadingStays />}>
				<StaysContainer
					category={searchParams?.category}
					search={searchParams?.search}
				/>
			</Suspense>
		</section>
	);
}

export default StaysPage;