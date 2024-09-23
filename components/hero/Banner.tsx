type BannerProps = {
	imgUrl: string;
	title: string;
	text: string;
}

function Banner(props: BannerProps) {
	const { imgUrl, text, title } = props;
	return (
		<section
			className='p-20 rounded-2xl -mt-20 relative min-h-screen flex items-center justify-center lg:justify-start'
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='w-1/2 text-foreground'>
				<h1
					className='text-7xl font-black mb-10'
				>
					{title}
				</h1>
				<p
					className='text-lg font-normal'
				>
					{text}
				</p>
			</div>
		</section>
	);
}

export default Banner;
