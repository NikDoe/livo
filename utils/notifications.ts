type Notification = {
	key: string;
	title: string;
	description: string;
}

export const toastNotifications: Notification[] = [
	{ key: 'accountCreated', title: 'Поздравляем!', description: 'Профиль успешно создан.' },
	{ key: 'propertyCreated', title: 'Поздравляем!', description: 'Объявление успешно размещено.' },
];
