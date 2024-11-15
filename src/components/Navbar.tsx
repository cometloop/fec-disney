import { CiUser } from 'react-icons/ci';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { useSearch } from '../globalState/searchStore';
import { useDebounce } from '../hooks/useDebounce';

export const Navbar = () => {
	const [val, setVal] = useState('');

	const { state, actions } = useSearch();

	const updateQuery = (query: string) => {
		actions.updateQuery(query);
	};

	const debouncedUpdateQuery = useDebounce(updateQuery, 500);

	const { data, isLoading } = useQuery({
		queryKey: ['search', state.query],
		enabled: Boolean(state.query),
		queryFn: () => api.search(state.query),
	});

	useEffect(() => {
		if (data) {
			actions.updateResults(data);
		}
	}, [actions, data]);

	useEffect(() => {
		actions.setIsLoading(isLoading);
	}, [actions, data, isLoading]);

	return (
		<div className='flex items-center gap-5 md:gap-10 p-5 md:p-0'>
			<Logo />
			<div className='flex flex-1'>
				<div className='flex-1'>
					<input
						id='search'
						name='search'
						type='search'
						placeholder='Find a character...'
						className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 bg-[#F1F2F3]'
						onChange={(e) => {
							const q = e.target.value;
							setVal(q);
							debouncedUpdateQuery(q);
						}}
						value={val}
					/>
				</div>
			</div>
			<div>
				<Link to={routes.user.profile}>
					<button
						type='button'
						className='rounded-full bg-[#054553] text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-1 md:p-4'
					>
						<CiUser aria-hidden='true' className=' size-5' />
					</button>
				</Link>
			</div>
		</div>
	);
};
