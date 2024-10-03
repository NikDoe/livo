'use client';

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getLabelByHref } from '@/utils/links';
import { usePathname } from 'next/navigation';

type BreadcrumbProps = {
	name?: string;
}

function BreadCrumbs({ name }: BreadcrumbProps) {
	const pathName = usePathname();
	const { pageLabel, pageHref } = getLabelByHref(pathName);


	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>Главная</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				{
					name ? (
						<BreadcrumbItem>
							<BreadcrumbLink href={pageHref}>{pageLabel}</BreadcrumbLink>
						</BreadcrumbItem>
					) : (
						<BreadcrumbItem>
							<BreadcrumbPage>{pageLabel}</BreadcrumbPage>
						</BreadcrumbItem>
					)
				}

				{
					name && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{name}</BreadcrumbPage>
							</BreadcrumbItem>
						</>
					)
				}

			</BreadcrumbList>
		</Breadcrumb>
	);
}

export default BreadCrumbs;