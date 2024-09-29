import { StayCardProps } from '@/utils/types';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import { Separator } from '@/components/ui/separator';
import StayCardAmenities from './StayCardAmenities';
import Rating from '../common/Rating';

type Props = {
	stay: StayCardProps;
}

function StayCard({ stay }: Props) {
	const { stayTitle, image, price } = stay;
	const { id: stayId, amenities: cardAmenities } = stay;

	return (
		<article className='group relative border rounded-xl'>
			<Link href={`/stays/${stayId}`}>
				<div className='relative h-[300px] overflow-hidden rounded-t-xl'>
					<Image
						src={image}
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
						alt={stayTitle}
						className='rounded-t-xl object-cover transform group-hover:scale-110 transition-transform duration-500'
					/>
				</div>
				<div className='p-6'>
					<h1 className='text-lg font-semibold mb-4'>
						{stayTitle.substring(0, 25) + '...'}
					</h1>
					<StayCardAmenities cardAmenities={cardAmenities} />
					<Separator className='h-[0.5px] my-4' />
					<div className='flex justify-between'>
						<span className='text-sm font-bold'>{formatCurrency(price)}/ночь</span>
						<Rating inPage={false} id={stayId} />
					</div>
				</div>
			</Link>
		</article>
	);
}

export default StayCard;
