'use client';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { LuShare2 } from 'react-icons/lu';

type ShareButtonProps = {
	name: string;
}

import {
	TwitterShareButton,
	EmailShareButton,
	TwitterIcon,
	EmailIcon,
} from 'react-share';
import { usePathname } from 'next/navigation';

function ShareButton({ name }: ShareButtonProps) {
	const pathName = usePathname();

	const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
	const shareLink = `${url}${pathName}`;

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					size='icon'
					className='p-2 cursor-pointer rounded-full border-2'
				>
					<LuShare2 />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				side='bottom'
				align='end'
				sideOffset={10}
				className='flex items-center gap-x-4 justify-center w-full'
			>
				<TwitterShareButton url={shareLink} title={name}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<EmailShareButton url={shareLink} subject={name}>
					<EmailIcon size={32} round />
				</EmailShareButton>
			</PopoverContent>
		</Popover>
	);
}

export default ShareButton;
