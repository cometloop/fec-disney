import { PropsWithChildren } from 'react';

export const ErrorMessage: React.FC<PropsWithChildren> = ({ children }) => {
	return <p className='py-2 text-sm font-medium text-red-800'>{children}</p>;
};
