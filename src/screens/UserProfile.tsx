import { ContentContainer } from '../components/ContentContainer';
import { UserProfile } from '../types';
import { useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { DateTime } from 'luxon';

export const UserProfileScreen = () => {
	const [cookies] = useCookies(['user-profile']);

	const userProfile: Partial<UserProfile> = cookies['user-profile']
		? cookies['user-profile']
		: {};

	const location = useMemo(() => {
		if (userProfile.city && userProfile.state) {
			return `${userProfile.city}, ${userProfile.state}`;
		}
		if (userProfile.city && !userProfile.state) {
			return userProfile.city;
		}
		if (!userProfile.city && userProfile.state) {
			return userProfile.state;
		}
		return '';
	}, [userProfile.city, userProfile.state]);

	const fullName = useMemo(() => {
		if (userProfile.first && userProfile.last) {
			return `${userProfile.first}, ${userProfile.last}`;
		}
		if (userProfile.first && !userProfile.last) {
			return userProfile.first;
		}
		if (!userProfile.first && userProfile.last) {
			return userProfile.last;
		}
		return 'Name not set';
	}, [userProfile.first, userProfile.last]);

	return (
		<ContentContainer>
			<div className='mb-8'>
				<h1 className='text-[40px]'>{fullName}</h1>
				{userProfile.lastUpdated && (
					<p className=''>
						Last Updated{' '}
						{DateTime.fromISO(userProfile.lastUpdated).toLocaleString(
							DateTime.DATE_FULL
						)}{' '}
					</p>
				)}
			</div>

			<div className='flex flex-col gap-4'>
				<LabelValue label='Age' value={userProfile.dob} />
				<LabelValue label='Location' value={location} />
				<LabelValue
					label='Favorite Disney Character'
					value={userProfile.favCharacter}
				/>
				<LabelValue label='Favorite Disney Ride' value={''} />
				<LabelValue
					label='Favorite Disney Movie'
					value={userProfile.favMovie}
				/>
				<LabelValue
					label='Favorite Disneyland'
					value={userProfile.favDisneyLand}
				/>
				<LabelValue
					label='Favorite Disney Character'
					value={userProfile.favCharacter}
				/>
			</div>

			<div className='mt-8'>
				<Link to={routes.user.editProfile}>
					<button
						type='submit'
						className='rounded-xl bg-[#054553] text-white shadow-sm px-[24px] py-4 '
					>
						Edit Profile
					</button>
				</Link>
			</div>
		</ContentContainer>
	);
};

type LabelValueProps = {
	label: string;
	value?: string;
};

const LabelValue: React.FC<LabelValueProps> = ({ label, value }) => {
	return (
		<div>
			<span className='text-[18px] font-semibold leading-[24px]'>
				{label}: {value || 'Not set'}
			</span>
		</div>
	);
};
