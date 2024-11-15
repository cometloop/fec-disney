import { CiUser } from 'react-icons/ci';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

export const Navbar = () => {
	return (
		<div className='flex items-center gap-10'>
			<Logo />
			<div className='flex flex-1'>
				<div className='mt-2 flex-1'>
					<input
						id='search'
						name='search'
						type='search'
						placeholder='Find a character...'
						className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 bg-[#F1F2F3]'
					/>
				</div>
			</div>
			<div>
				<Link to={routes.user.profile}>
					<button
						type='button'
						className='rounded-full bg-[#054553] text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-4'
					>
						<CiUser aria-hidden='true' className='size-5' />
					</button>
				</Link>
			</div>
		</div>
	);
};
