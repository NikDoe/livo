import { FavoriteToggleButton } from '@/components/mainPages';

type SingleStayPageProps = {
	params: {
		stayId: string
	}
}

function SingleStayPage({ params }: SingleStayPageProps) {
	return (
		<div>
			<FavoriteToggleButton id={params.stayId} />
			<p> Жильё № {params.stayId}</p>
		</div >
	);
}

export default SingleStayPage;
