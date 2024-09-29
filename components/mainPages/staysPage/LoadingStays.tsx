import SkeletonCard from './SkeletonCard';

function LoadingStays() {
	return (
		<section className='mt-4 gap-4 grid sm:grid-cols-2 lg:grid-cols-3'>
			<SkeletonCard />
			<SkeletonCard />
			<SkeletonCard />
			<SkeletonCard />
		</section>
	);
}

export default LoadingStays;
