import { Hero } from '@/components/hero';
import { StaysCategoriesList, StaysList } from '@/components/mainPages/staysPage';
import { Separator } from '@/components/ui/separator';

type StaysPageProps = {
	searchParams: {
		category?: string;
		search?: string;
	}
}

async function StaysPage({ searchParams }: StaysPageProps) {
	return (
		<section className='space-y-10'>
			<Hero />
			<div className='flex flex-col'>
				<h1 className='text-5xl font-semibold mb-8'>Места для вашего отдыха</h1>
				<Separator />
			</div>
			<StaysCategoriesList
				category={searchParams?.category}
				search={searchParams?.search}
			/>
			<StaysList
				category={searchParams?.category}
				search={searchParams?.search}
			/>
		</section>
	);
}

export default StaysPage;