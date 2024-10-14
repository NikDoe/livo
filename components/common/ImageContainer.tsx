import Image from 'next/image';

type ImageContainerProps = {
	mainImage: string;
	name: string;
	className?: string;
}

function ImageContainer(props: ImageContainerProps) {
	const { className, mainImage, name } = props;

	return (
		<section className={`h-[300px] md:h-[500px] relative ${className}`}>
			<Image
				src={mainImage}
				fill
				sizes='100vw'
				alt={name}
				className='object-cover rounded-xl'
				priority
			/>
		</section>
	);
}

export default ImageContainer;
