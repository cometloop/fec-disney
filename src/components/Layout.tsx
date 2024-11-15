import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className='max-w-[1200px] mx-auto'>{children}</div>;
};
