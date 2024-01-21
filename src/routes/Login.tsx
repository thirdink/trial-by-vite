import React from 'react';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { ProfileSVG, PasswordSVG } from '@/assets/svg';

const Login: React.FC = () => {
	return (
		<>
			<main className='purple-light text-foreground bg-background'>
				<div className='flex w-full h-screen'>
					<div className=' flex flex-col mx-auto px-[0.94rem] mt-[2.75rem]'>
						<div className='flex flex-row justify-start h-[3.5rem]'>
							<Link to='/onboarding'>
								<Button
									style={{
										backgroundColor: 'transparent',
										border: 'none',
										fontSize: '1.5rem',
										marginRight: '1rem',
									}}
								>
									<span className='text-dark'>{'<'}</span>
								</Button>
							</Link>
						</div>
						<div className='flex flex-col justify-center h-[5rem] p-6'>
							<div className='flex justify-start'>
								<h3 className='text-dark text-center font-bold text-2xl'>
									Welcome back
								</h3>
							</div>
							<div className='flex justify-center'>
								<p
									className='text-grey text-center leading-6 tracking-wide px-4 w-[21.43rem]'
									style={{
										fontSize: '.85rem',
										fontStyle: 'normal',
										fontWeight: '400',
										letterSpacing: '0.0175rem',
									}}
								>
									Log In to your Placoo account to explore
									your dream place to live across the whole
									world!
								</p>
							</div>
						</div>
						<div className='flex flex-col justify-center items-center mt-[2.5rem]'>
							<div className='flex flex-col'>
								<label className='text-dark '>Email</label>
								<div className='relative'>
									<ProfileSVG
										className='w-7 h-7 mt-1 fill-current inline-block absolute left-1 top-2'
										fill='currentColor'
									/>
									<input
										style={{
											borderRadius: '1.875rem',
											background: '#fff',
											width: ' 21.4375rem',
											display: 'relative',
											paddingTop: '0.8125rem',
											paddingBottom: '0.8125rem',
											paddingLeft: '2.5rem',
										}}
										className='text-dark focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										type='email'
										placeholder='Enter your email'
									/>
								</div>
							</div>
							<div className='flex flex-col mt-[1.12rem]'>
								<label className='text-dark'>Password</label>
								<div className='relative'>
									<PasswordSVG
										className='w-7 h-7 mt-1 fill-current inline-block absolute left-1 top-2'
										fill='currentColor'
									/>
									<input
										style={{
											borderRadius: '1.875rem',
											background: '#fff',
											width: ' 21.4375rem',
											display: 'relative',
											paddingTop: '0.8125rem',
											paddingBottom: '0.8125rem',
											paddingLeft: '2.5rem',
										}}
										className='text-dark focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										type='password'
										placeholder='Enter your password'
									/>
								</div>
							</div>
							<div className='flex justify-center mt-[1.75rem]'>
								<Link to='/'>
									<Button
										style={{
											borderRadius: '1.875rem',
											background:
												'linear-gradient(136deg, #917AFD 2.61%, #6246EA 96.58%)',
											width: ' 21.4375rem',
											color: '#FFFFFF',
											display: 'flex',
											padding: '0.8125rem 0rem',
											justifyContent: 'center',
										}}
									>
										Login
									</Button>
								</Link>
							</div>
							<div className='flex justify-center'>
								<Button
									style={{
										background: 'transparent',
										width: '21.4375rem',
										color: '#FFFFFF',
										border: 'none',
										display: 'flex',
										padding: '0.8125rem 0rem',
										justifyContent: 'center',
									}}
								>
									<span className='text-grey'>
										Forgot password ?
									</span>
								</Button>
							</div>
						</div>
						<div className='gap-[0.75rem] justify-center mt-[2.62rem]'>
							<div className='flex flex-row justify-center items-center'>
								<span className='border-1 border-violet-100 w-full'></span>
								<span className='text-primary '>OR</span>
								<span className='border-1 border-violet-100 w-full'></span>
							</div>
							<div className='flex justify-center mt-[2.62rem]'>
								<Button
									style={{
										borderRadius: '1.875rem',
										background: 'black',
										width: ' 21.4375rem',
										color: '#FFFFFF',
										display: 'flex',
										padding: '0.8125rem 0rem',
										justifyContent: 'center',
									}}
								>
									Sign in with Apple
								</Button>
							</div>
							<div className='flex justify-center text-grey mt-[0.75rem]'>
								<Button
									style={{
										borderRadius: '1.875rem',
										background: '#fff',
										width: ' 21.4375rem',
										display: 'flex',
										padding: '0.8125rem 0rem',
										justifyContent: 'center',
									}}
								>
									Sign in with Google
								</Button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Login;
