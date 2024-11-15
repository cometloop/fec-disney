import { useForm } from 'react-hook-form';
import { ContentContainer } from '../components/ContentContainer';
import { UserProfile as UserProfileType } from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { userProfileSchema } from '../validation/userProfile';
import { ErrorMessage } from '../components/ErrorMessage';
import { StateSelect } from '../components/StateSelect';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../routes';
import { DateTime } from 'luxon';

const inputStyles =
	'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2';

const labelStyles = 'block text-sm/6 font-medium text-gray-900';

export const EditUserProfile = () => {
	const [cookies, setCookie] = useCookies(['user-profile']);

	const storedUserProfile = cookies['user-profile']
		? cookies['user-profile']
		: {};

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<UserProfileType>({
		mode: 'onChange',
		reValidateMode: 'onChange',
		resolver: zodResolver(userProfileSchema),
		defaultValues: {
			...storedUserProfile,
		},
	});

	const navigate = useNavigate();

	const save = useCallback(
		(formData: UserProfileType) => {
			formData.lastUpdated = DateTime.now().toISO();

			setCookie('user-profile', JSON.stringify(formData), {
				path: '/',
			});
			navigate(routes.user.profile);
		},
		[navigate, setCookie]
	);

	return (
		<form onSubmit={handleSubmit(save)}>
			<ContentContainer>
				<div className='flex flex-col gap-4 max-w-[656px]'>
					<div className='flex flex-row items-start gap-4'>
						<div>
							<label htmlFor='first' className={labelStyles}>
								First Name <sup className='text-red-600'>*</sup>
							</label>
							<div className='mt-2'>
								<input
									id='first'
									{...register('first')}
									type='text'
									className={`${inputStyles} w-[320px]`}
								/>
								{errors.first && (
									<ErrorMessage>{errors.first.message}</ErrorMessage>
								)}
							</div>
						</div>
						<div>
							<label htmlFor='last' className={labelStyles}>
								Last Name <sup className='text-red-600'>*</sup>
							</label>
							<div className='mt-2'>
								<input
									id='last'
									{...register('last')}
									type='text'
									className={`${inputStyles} w-[320px]`}
								/>
								{errors.last && (
									<ErrorMessage>{errors.last.message}</ErrorMessage>
								)}
							</div>
						</div>
					</div>

					<div>
						<label htmlFor='dob' className={labelStyles}>
							Birth Date <sup className='text-red-600'>*</sup>
						</label>
						<div className='mt-2'>
							<input
								id='dob'
								{...register('dob')}
								type='text'
								className={`${inputStyles} w-[170px]`}
							/>
							{errors.dob && <ErrorMessage>{errors.dob.message}</ErrorMessage>}
						</div>
					</div>

					<div className='flex flex-row items-start gap-4'>
						<div>
							<label htmlFor='city' className={labelStyles}>
								City
							</label>
							<div className='mt-2'>
								<input
									id='city'
									{...register('city')}
									type='text'
									className={`${inputStyles} w-[320px]`}
								/>
								{errors.city && (
									<ErrorMessage>{errors.city.message}</ErrorMessage>
								)}
							</div>
						</div>
						<div>
							<label htmlFor='state' className={labelStyles}>
								State
							</label>
							<div className='mt-2'>
								<StateSelect
									defaultValue={storedUserProfile?.state}
									onChange={(val) => setValue('state', val)}
								/>
								{errors.state && (
									<ErrorMessage>{errors.state.message}</ErrorMessage>
								)}
							</div>
						</div>
					</div>

					<div>
						<label htmlFor='favCharacter' className={labelStyles}>
							Favorite Disney Character
						</label>
						<div className='mt-2'>
							<input
								id='favCharacter'
								{...register('favCharacter')}
								type='text'
								className={`${inputStyles} w-[320px]`}
							/>
							{errors.favCharacter && (
								<ErrorMessage>{errors.favCharacter.message}</ErrorMessage>
							)}
						</div>
					</div>

					<div>
						<label htmlFor='favMovie' className={labelStyles}>
							Favorite Disney Movie
						</label>
						<div className='mt-2'>
							<input
								id='favMovie'
								{...register('favMovie')}
								type='text'
								className={`${inputStyles} w-[320px]`}
							/>
							{errors.favMovie && (
								<ErrorMessage>{errors.favMovie.message}</ErrorMessage>
							)}
						</div>
					</div>

					<div>
						<label htmlFor='favDisneyLand' className={labelStyles}>
							Favorite Disneyland
						</label>
						<div className='mt-2'>
							<input
								id='favDisneyLand'
								{...register('favDisneyLand')}
								type='text'
								className={`${inputStyles} w-[320px]`}
							/>
							{errors.favDisneyLand && (
								<ErrorMessage>{errors.favDisneyLand.message}</ErrorMessage>
							)}
						</div>
					</div>

					<div className='flex flex-row gap-5'>
						<button
							type='submit'
							className='rounded-xl bg-[#054553] text-white shadow-sm px-[24px] py-4'
						>
							Update Profile
						</button>
						<Link to={routes.user.profile}>
							<button
								type='button'
								className='rounded-xl  border-[1px] border-[#054553] border-solid bg-[#F1F2F3] text-[#054553] px-[24px] py-4'
							>
								Cancel
							</button>
						</Link>
					</div>
				</div>
			</ContentContainer>
		</form>
	);
};
