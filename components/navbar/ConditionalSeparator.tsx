'use client';

import { usePathname } from 'next/navigation';
import { Separator } from '../ui/separator';

const mainRoutes = new Set(['/cars', '/stays', '/flights', '/experiences']);

function ConditionalSeparator() {
	const pathname = usePathname();

	if (!mainRoutes.has(pathname)) {
		return <Separator />;
	}

	return null;
}

export default ConditionalSeparator;