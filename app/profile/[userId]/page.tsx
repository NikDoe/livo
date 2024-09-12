type UserProfileProps = {
	params: {
		userId: string
	}
}

function UserProfile({ params }: UserProfileProps) {
	return (
		<h1>
			Пользовател - {params.userId}
		</h1>
	);
}

export default UserProfile;
