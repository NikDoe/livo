type BannerProps = {
	imgUrl: string;
	title: string;
	text: string;
}

function Banner(props: BannerProps) {
	const { imgUrl, text, title } = props;
	return (
		<section
			className='text-black flex flex-col p-2 justify-end md:p-20 rounded-2xl -mt-16 mb-10 relative min-h-80 md:min-h-screen items-center sm:justify-center'
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<h1
				className='hidden sm:flex text-3xl md:text-7xl font-black -mt-20 mb-10 text-center'
			>
				{title}
			</h1>
			<p
				className='text-center text-lg font-normal bg-slate-200 py-2 px-6 rounded-lg'
			>
				{text}
			</p>
		</section>
	);
}

export default Banner;
