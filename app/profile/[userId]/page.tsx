type UserProfileProps = {
	params: {
		userId: string
	}
}

function UserProfile({ params }: UserProfileProps) {
	console.log('test github');
	
	return (
		<h1>
			Пользователь - {params.userId}
		</h1>
	);
}

export default UserProfile;
