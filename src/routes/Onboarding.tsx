import React from 'react';
import { Button } from '@nextui-org/button';
import { Link } from 'react-router-dom';

const Onboarding: React.FC = () => {
	return (
		<>
			<main className='purple-light text-foreground bg-background'>
				<div className='flex w-full h-screen'>
					<div className=' flex flex-col content-center mx-auto justify-center'>
						<div className='flex content-center  w-auto px-[0.94rem] justify-center'>
							<div
								className='flex flex-row gap-[0.5625rem] px-[0rem] py-[0.9375rem]'
								style={{
									WebkitMaskImage:
										'linear-gradient(180deg, black 53.59%, transparent 87.94%)',
									maskImage:
										'linear-gradient(180deg, black 53.59%, transparent 87.94%)',
								}}
							>
								<div className='flex flex-col gap-[0.5625rem]'>
									<img src='/Image.png' alt='image1' />
									<img src='/Image-2.png' alt='image2' />
									<img src='/Image-3.png' alt='image3' />
								</div>
								<div className='flex flex-col gap-[0.5625rem]'>
									<img src='/Image-4.png' alt='image1' />
									<img src='/Image-5.png' alt='image2' />
									<img src='/Image-6.png' alt='image3' />
								</div>
								<div className='flex flex-col gap-[0.5625rem]'>
									<img src='/Image-7.png' alt='image1' />
									<img src='/Image-8.png' alt='image2' />
									<img src='/Image-9.png' alt='image3' />
								</div>
							</div>
						</div>
						<div className='flex flex-col w-full text-center justify-center pb-8'>
							<p className=' text-dark text-center font-bold text-lg'>
								New Place, New Home
							</p>
							<p
								className=' text-grey text-center leading-6 tracking-wide px-4 w-[21.43rem]'
								style={{
									fontSize: '1rem',
									fontStyle: 'normal',
									fontWeight: '400',
								}}
							>
								Are you ready to uproot and start over in a new
								area? Placoo will help you on your journey!
							</p>
						</div>
						<div className='flex flex-col gap-[.5rem] w-full justify-center items-center'>
							<div>
								<Link to='/login'>
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
							<div>
								<Button
									style={{
										borderRadius: '3.375rem',
										background:
											'var(--Neutral-Gray-0, #FFF)',
										width: '21.4375rem',
										color: '#FFFFFF',
										border: '0.8px solid #E3E3E7',
										display: 'flex',
										padding: '0.8125rem 0rem',
										justifyContent: 'center',
									}}
								>
									<span className='text-dark'>Sign up</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Onboarding;
