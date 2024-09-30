import dynamic from 'next/dynamic';

const FavoriteToggleButton = dynamic(() => import('./FavoriteToggleButton'), {
	ssr: false,
});

export default FavoriteToggleButton;