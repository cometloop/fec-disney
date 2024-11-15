import { Logo } from './Logo';

export const Footer: React.FC = () => {
	return (
		<div className='flex flex-col items-center pt-10 pb-20'>
			<Logo />
			<p className='text-xs'>
				For educational use only. All characters and content are the property of
				Disney. This test is for private use and development testing only and
				should not be distributed for public consumption.{' '}
			</p>
		</div>
	);
};
