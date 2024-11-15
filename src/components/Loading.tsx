import { OrbitProgress } from 'react-loading-indicators';
import { colors } from '../colors';

type LoadingProps = {
	color?: keyof typeof colors;
};

export const Loading: React.FC<LoadingProps> = ({ color = 'blue' }) => {
	return (
		<div className='text-center'>
			<OrbitProgress
				size='small'
				color={colors[color]}
				variant='track-disc'
				speedPlus={0}
				easing='linear'
				style={{ fontSize: '6px' }}
			/>
		</div>
	);
};
