'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { LuUser2 } from 'react-icons/lu';
import { SubmitButton } from './SubmitButton';

import { type actionFunction } from '@/utils/types';
import { Separator } from '../ui/separator';

type ImageInputContainerProps = {
	image: string;
	name: string;
	action: actionFunction;
	text: string;
	children?: React.ReactNode;
};

const userIcon = (
	<LuUser2 className='w-24 h-24 bg-primary rounded-md text-white mb-4' />
);

const imageInputWithButton = (
	<div className='flex items-center space-x-2 mt-2'>
		<ImageInput />
		<SubmitButton size='sm' text='загрузить' />
	</div>
);

function ImageInputContainer(props: ImageInputContainerProps) {
	const { image, name, action, text, children } = props;
	const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

	return (
		<div className='mb-10'>
			{image ? (
				<Image
					src={image}
					width={100}
					height={100}
					className='rounded-md object-cover mb-4 w-24 h-24'
					alt={name}
				/>
			) : (
				userIcon
			)
			}

			<Button
				variant='secondary'
				size='sm'
				onClick={() => setUpdateFormVisible((prev) => !prev)}
			>
				{text}
			</Button>

			{isUpdateFormVisible && (
				<div className='max-w-lg'>
					<FormContainer action={action}>
						{children}
						{imageInputWithButton}
					</FormContainer>
				</div>
			)}


		</div >
	);
}

export default ImageInputContainer;