'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routeTexts } from '@/utils/routeTexts';

function EmptyList({
	heading,
	message,
	btnText,
}: {
	heading?: string;
	message?: string;
	btnText?: string;
}) {
	const currentPath = usePathname();
	const { heading: defaultHeading, message: defaultMessage, btnText: defaultBtnText, link: defaultLink } =
		routeTexts[currentPath] || {
			heading: 'Нет элементов в списке.',
			message: 'Продолжайте исследовать наши предложения.',
			btnText: 'Назад домой',
			link: '/',
		};

	return (
		<div className='container flex flex-col items-start justify-start'>
			<h2 className='title-level_1'>
				{heading || defaultHeading}
			</h2>
			<p className='page_subtitle mt-2'>
				{message || defaultMessage}
			</p>
			<Button asChild className='mt-8' size='lg'>
				<Link href={defaultLink} scroll={false}>
					{btnText || defaultBtnText}
				</Link>
			</Button>
		</div>
	);
}

export default EmptyList;
