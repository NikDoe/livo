import { auth } from '@clerk/nextjs/server';
import FavoriteSignInButton from './FavoriteSignInButton';
import FavoriteToggleForm from './FavoriteToggleForm';
import { FavoriteType, fetchFavoriteId } from '@/utils/actions';

type FavoriteToggleButtonProps = {
	favoriteType: FavoriteType;
	id: string;
}

async function FavoriteToggleButton({ favoriteType, id }: FavoriteToggleButtonProps) {
	const { userId } = auth();

	if (!userId) return <FavoriteSignInButton />;

	const favoriteId = await fetchFavoriteId({ favoriteType, id });

	return (
		<FavoriteToggleForm
			favoriteId={favoriteId}
			favoriteType={favoriteType}
			id={id}
		/>
	);
}

export default FavoriteToggleButton;