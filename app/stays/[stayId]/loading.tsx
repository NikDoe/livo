import { RxReload } from 'react-icons/rx';

function SingleStayLoader() {
	return (
		<div className='flex items-center justify-center h-full w-full'>
			<RxReload className='h-8 w-8 animate-spin' />
		</div>
	);

}

export default SingleStayLoader;