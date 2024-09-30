import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import FavoriteSignInButton from './FavoriteSignInButton';

type FavoriteToggleButtonProps = {
	id: string;
}

function FavoriteToggleButton({ id }: FavoriteToggleButtonProps) {
	const { userId } = auth();

	if (!userId) return <FavoriteSignInButton />;

	return (
		<Button size='icon' variant='ghost' className='p-2 cursor-pointer rounded-full border-2'>
			<FaHeart className='w-4 h-4' />
		</Button>
	);
}

export default FavoriteToggleButton;