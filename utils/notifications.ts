'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

type Notification = {
	key: string;
	title: string;
	description: string;
};

export const toastNotifications: Notification[] = [
	{ key: 'accountCreated', title: 'Поздравляем!', description: 'Профиль успешно создан.' },
	{ key: 'stayCreated', title: 'Поздравляем!', description: 'Объявление успешно размещено.' },
];

export function useCreateNotifications(notifications: Notification[]) {
	const searchParams = useSearchParams();
	const { toast } = useToast();

	useEffect(() => {
		notifications.forEach(({ key, title, description }) => {
			if (searchParams.get(key)) {
				toast({ title, description });
			}
		});
	}, [searchParams, toast, notifications]);
}
