import { PropsWithChildren } from 'react';

type ContentContainerProps = PropsWithChildren & {
	color?: 'gray' | 'blue';
};

const colors = {
	gray: '#F1F2F3',
	blue: '#054553',
};

export const ContentContainer: React.FC<ContentContainerProps> = ({
	color = 'gray',
	children,
}) => {
	return <div className={`bg-[${colors[color]}] p-[80px]`}>{children}</div>;
};
