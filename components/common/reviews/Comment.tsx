'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type CommentProps = {
	comment: string
}

function Comment({ comment }: CommentProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpanded = () => {
		setIsExpanded((prev) => !prev);
	};

	if (!comment.length) return null;

	const longComment = comment.length > 130;
	const displayComment =
		longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;

	const expandedButton = (
		<Button
			variant='link'
			className='pl-0 text-muted-foreground'
			onClick={toggleExpanded}
		>
			{isExpanded ? 'Свернуть' : 'Раскрыть'}
		</Button>
	);

	return (
		<div>
			<p className='text-sm'>{displayComment}</p>
			{longComment && expandedButton}
		</div>
	);
}

export default Comment;