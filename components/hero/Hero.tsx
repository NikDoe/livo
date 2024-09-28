'use client';

import { MainRoutes } from '@/utils/types';
import { usePathname } from 'next/navigation';
import Banner from './Banner';
import { getHeroDetails } from '@/utils/heroBanners';
import { toastNotifications, useCreateNotifications } from '@/utils/notifications';

function Hero() {
	useCreateNotifications(toastNotifications);
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
