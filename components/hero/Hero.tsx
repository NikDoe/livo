'use client';

import { MainRoutes } from '@/utils/types';
import { usePathname } from 'next/navigation';
import Banner from './Banner';
import { getHeroDetails } from '@/utils/heroBanners';

function Hero() {
	const pathName = usePathname() as MainRoutes;

	const { imgUrl, text, title } = getHeroDetails(pathName);

	return (
		<Banner
			imgUrl={imgUrl}
			text={text}
			title={title}
		/>
	);
}

export default Hero;
