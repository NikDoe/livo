import { RxReload } from 'react-icons/rx';

function AccountLoader() {
	return (
		<div className='flex items-center justify-center h-full w-full'>
			<RxReload className='h-8 w-8 animate-spin' />
		</div>
	);

}

export default AccountLoader;