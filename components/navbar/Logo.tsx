import { LuGlobe2 } from 'react-icons/lu';
import Link from 'next/link';

function Logo() {
	return (
		<Link href='/' className='flex items-center space-x-2'>
			<LuGlobe2 className='w-6 h-6 text-green-500' />
			<span className='font-bold text-3xl text-green-500'>livo</span>
		</Link>
	);
}

export default Logo;
