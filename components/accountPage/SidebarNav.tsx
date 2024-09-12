'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: {
		href: string
		label: string
	}[]
}

function SidebarNav({ className, items, ...props }: SidebarNavProps) {
	const pathname = usePathname();

	return (
		<nav
			className={cn(
				'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
				className
			)}
			{...props}
		>
			{items.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						'text-muted-foreground',
						pathname === item.href
							? 'bg-muted text-foreground hover:bg-muted'
							: 'hover:bg-transparent hover:text-foreground',
						'justify-start'
					)}
				>
					{item.label}
				</Link>
			))}
		</nav>
	);
}

export default SidebarNav;