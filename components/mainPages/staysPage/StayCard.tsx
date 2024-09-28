import { StayCardProps } from '@/utils/types';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import { Separator } from '@/components/ui/separator';

type Props = {
	stay: StayCardProps;
}

function StayCard({ stay }: Props) {
	const { stayTitle, image, price } = stay;
	const { id: stayId, country, } = stay;
	return (
		<article className='group relative border rounded-xl hover:border-muted-foreground transition-colors duration-500'>
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
					<h3 className='text-sm font-semibold mt-1'>
						{stayTitle.substring(0, 30)}
					</h3>
					<Separator className='h-[0.5px] my-4' />
					<span className='font-thin text-muted-foreground'>{formatCurrency(price)}/ночь</span>
					{/* stay rating */}
				</div>
			</Link>
			<div className='absolute top-5 right-5 z-5'>
				{/* favorite toggle button */}
			</div>
		</article>
	);
}

export default StayCard;
