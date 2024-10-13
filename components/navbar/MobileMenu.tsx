'use client';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { mainPageslinks } from '@/utils/links';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { usePathname } from 'next/navigation';
import useIsMobile from '@/hooks/use-is-mobile';

function MobileMenu() {
	const pathname = usePathname();
	const isMobile = useIsMobile();

	return (
		<Sheet>
			<SheetTrigger asChild className='ml-6 md:hidden'>
				<HiOutlineMenuAlt4 className='w-8 h-8' />
			</SheetTrigger>
			<SheetContent className='flex flex-col justify-between'>
				<SheetHeader>
					<SheetTitle>Меню</SheetTitle>
					<SheetDescription>
					</SheetDescription>
				</SheetHeader>
				<div className='mt-20'>
					{mainPageslinks.map((link) => {
						return (
							<SheetClose asChild key={link.href}>
								<Link
									href={link.href}
									className={cn(
										buttonVariants({ variant: 'ghost' }),
										'text-muted-foreground w-full',
										pathname === link.href
											? 'bg-muted text-foreground hover:bg-muted'
											: 'hover:bg-transparent hover:text-foreground',
										'justify-start'
									)}
								>
									{link.label}
								</Link>
							</SheetClose>
						);
					})}
				</div>
				<SheetFooter className='mt-auto'>
					<div className='flex flex-col gap-6 sm:flex-row'>
						<SheetClose asChild>
							<Button
								asChild
								variant={isMobile ? 'outline' : 'ghost'}
								className='order-2 md:order-1'
							>
								<Link href='/support'>Поддержка</Link>
							</Button>
						</SheetClose>
						<SheetClose asChild>
							<Button
								asChild
								variant={isMobile ? 'default' : 'outline'}
								className='order-1 md:order-2'
							>
								<Link href='/stays/create-stay'>Разместить жильё</Link>
							</Button>
						</SheetClose>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet >
	);
}

export default MobileMenu;
