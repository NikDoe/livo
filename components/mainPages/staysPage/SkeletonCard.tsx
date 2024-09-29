import { Skeleton } from '@/components/ui/skeleton';

function SkeletonCard() {
	return (
		<div>
			<Skeleton className='h-[300px] rounded-t-xl' />
			<Skeleton className='h-7 mt-10 w-3/4' />
			<Skeleton className='h-10 my-5 w-1/2' />
			<Skeleton className='h-5 w-3/4' />
		</div>
	);
}

export default SkeletonCard;
