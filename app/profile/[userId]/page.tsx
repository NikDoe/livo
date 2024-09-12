type UserProfileProps = {
	params: {
		userId: string
	}
}

function UserProfile({ params }: UserProfileProps) {
	console.log('test github achivments 2👽👽');
	
	return (
		<h1>
			Пользователь - {params.userId}
		</h1>
	);
}

export default UserProfile;
