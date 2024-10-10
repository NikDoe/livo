import Image from 'next/image';

type ImageContainerProps = {
	mainImage: string;
	name: string;
}

function ImageContainer(props: ImageContainerProps) {
	const { mainImage, name } = props;

	return (
		<section className='h-[300px] md:h-[500px] relative mt-16'>
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
