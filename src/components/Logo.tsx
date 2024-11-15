import { Link } from 'react-router-dom';
import { routes } from '../routes';

export const Logo: React.FC = () => {
	return (
		<Link to={routes.home}>
			<img
				className='w-10 md:w-40'
				src='https://i.pinimg.com/564x/55/3f/6b/553f6b41975bf39b3022f43c9abc1ef3.jpg'
				alt='Disney'
			/>
		</Link>
	);
};
