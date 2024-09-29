import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

type FavoriteToggleButtonProps = {
	id: string;
}

function FavoriteToggleButton({ id }: FavoriteToggleButtonProps) {
	return (
		<Button size='icon' variant='ghost' className='p-2 cursor-pointer rounded-full border-2'>
			<FaHeart className='w-4 h-4' />
		</Button>
	);
}

export default FavoriteToggleButton;