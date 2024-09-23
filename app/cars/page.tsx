'use client';

import { Hero } from '@/components/hero';
import { useToast } from '@/hooks/use-toast';
import { toastNotifications } from '@/utils/notifications';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function CarsPage() {
	const searchParams = useSearchParams();
	const { toast } = useToast();

	useEffect(() => {
		toastNotifications.forEach(({ key, title, description }) => {
			if (searchParams.get(key)) {
				toast({ title, description });
			}
		});
	}, [searchParams, toast]);

	return (
		<div>
			<Hero />
			<h1 className='text-3xl'>CarsPage</h1>
		</div>
	);
}

export default CarsPage;