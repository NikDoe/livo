'use client';

import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function CarsPage() {
	const searchParams = useSearchParams();
	const accountCreated = searchParams.get('accountCreated');
	const { toast } = useToast();

	useEffect(() => {
		if (accountCreated) {
			toast({
				title: 'Поздравляем!',
				description: 'Профиль успешно создан.',
			});
		}
	}, [accountCreated]);

	return <h1 className='text-3xl'>CarsPage</h1>;
}

export default CarsPage;