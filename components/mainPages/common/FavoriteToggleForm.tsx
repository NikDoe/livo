'use client';

import { FormContainer } from '@/components/form';
import { FavoriteType, toggleFavoriteAction } from '@/utils/actions';
import { usePathname } from 'next/navigation';
import FavoriteSubmitButton from './FavoriteSubmitButton';

type FavoriteToggleFormProps = {
	favoriteId: string | null;
	favoriteType: FavoriteType;
	id: string;
}

function FavoriteToggleForm(props: FavoriteToggleFormProps) {
	const { favoriteId, favoriteType, id } = props;
	const pathname = usePathname();
	const toggleAction = toggleFavoriteAction.bind(null, {
		favoriteId,
		favoriteType,
		pathname,
		id,
	});

	return (
		<FormContainer action={toggleAction}>
			<FavoriteSubmitButton isFavorite={Boolean(favoriteId)} />
		</FormContainer>
	);
}

export default FavoriteToggleForm;
