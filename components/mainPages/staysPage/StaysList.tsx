type StaysListProps = {
	category?: string;
	search?: string;
}

function StaysList(props: StaysListProps) {
	const { category, search } = props;
	return (
		<div>
			Список жилья
		</div>
	);
}

export default StaysList;
