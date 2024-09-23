'use client';

import { usePathname } from 'next/navigation';
import { Separator } from '../ui/separator';
import { MAIN_ROUTES } from '@/utils/constants';
import { MainRoutes } from '@/utils/types';

function ConditionalSeparator() {
	const pathname = usePathname() as MainRoutes;

	if (!MAIN_ROUTES.has(pathname)) {
		return <Separator />;
	}

	return null;
}

export default ConditionalSeparator;