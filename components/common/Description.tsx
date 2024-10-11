'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Description = ({ description }: { description: string }) => {
	const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
	const words = description.split(' ');
	const isLongDescription = words.length > 50;

	const toggleDescription = () => {
		setIsFullDescriptionShown(!isFullDescriptionShown);
	};

	const displayedDescription =
		isLongDescription && !isFullDescriptionShown
			? words.slice(0, 50).join(' ') + '...'
			: description;

	return (
		<article className='mt-10'>
			<p className='text-muted-foreground leading-loose'>
				{displayedDescription}
			</p>
			{isLongDescription && (
				<Button variant='link' className='pl-0' onClick={toggleDescription}>
					{isFullDescriptionShown ? 'Скрыть' : 'Подробнее'}
				</Button>
			)}
		</article>
	);
};

export default Description;