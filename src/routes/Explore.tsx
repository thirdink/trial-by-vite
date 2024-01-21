import React from 'react';
import { SearchSVG, SettingsSVG } from '@/assets/svg';
const Explore: React.FC = () => {
	const tripData = [
		{
			name: 'Bali, Indonesia',
			image: 'https://i.ibb.co/hcwLryT/bali-indonesia.jpg',
			rented_props_count: 100,
		},
		{
			name: 'Toyko, Japan',
			image: 'https://i.ibb.co/vZt1WZS/tokyo-city.jpg',
			rented_props_count: 234363,
		},
		{
			name: 'Sydney, Australia',
			image: 'https://i.ibb.co/mhKDThR/sydney-city.jpg',
			rented_props_count: 9124,
		},
		{
			name: 'New York, United States',
			image: 'https://i.ibb.co/phPV00W/new-york-city.jpg',
			rented_props_count: 2541098,
		},
	];

	const livingData = [
		{
			name: 'Outdoor living',
			image: 'https://picsum.photos/600/400.jpg',
		},
		{
			name: 'Japanese housing',
			image: 'https://picsum.photos/600/400.jpg',
		},
		{
			name: 'Scandinavian minimalism',
			image: 'https://picsum.photos/600/400.jpg',
		},
		{
			name: 'Industrial loft',
			image: 'https://picsum.photos/600/400.jpg',
		},
		{
			name: 'French country',
			image: 'https://picsum.photos/600/400.jpg',
		},
		{
			name: 'Coastal beach house',
			image: 'https://picsum.photos/600/400.jpg',
		},
		{
			name: 'Mediterranean villa',
			image: 'https://picsum.photos/600/400.jpg',
		},
	];
	const experiences = [
		{
			name: 'Learn the culture',
			image: 'https://picsum.photos/500/500.jpg',
		},
		{
			name: 'Online events',
			image: 'https://picsum.photos/500/500.jpg',
		},
	];

	return (
		<>
			<div className=' flex flex-col content-center mx-auto justify-center overflow-hidden'>
				<div className='flex content-center  w-auto px-[0.94rem] justify-center '>
					<div className='flex flex-col justify-center items-center mt-[2.5rem]'>
						<div className='flex flex-col'>
							<div className='relative'>
								<button>
									<SearchSVG
										className='w-7 h-7 mt-1 fill-current inline-block absolute left-3 top-2'
										fill='currentColor'
									/>
								</button>
								<input
									style={{
										borderRadius: '1.875rem',
										background: '#fff',
										width: ' 21.4375rem',
										display: 'relative',
										paddingTop: '0.8125rem',
										paddingBottom: '0.8125rem',
										paddingLeft: '2.5rem',
										border: '0.8px solid #E3E3E7',
									}}
									className='text-dark focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									type='text'
									placeholder='Search address, city, location'
								/>
								<button>
									<SettingsSVG
										className='w-7 h-7 mt-1 fill-current inline-block absolute right-3 top-2'
										fill='currentColor'
									/>
								</button>
							</div>
						</div>
						<div className='flex flex-col mt-[2.25rem]'>
							<div className='flex flex-row gap-[7.44rem]'>
								<p className='flex items-start text-dark font-bold'>
									Find your next trip
								</p>
								<button className='flex items-end text-primary'>
									see all
								</button>
							</div>
						</div>
						<div className='flex flex-col p-3 '>
							<div className='overflow-x-scroll flex  whitespace-nowrap   flex-row justify-center  items-center snap-x snap-proximity ml-1 hide-scroll-bar gap-5'>
								{tripData.map((trip) => (
									<div
										className=' bg-white snap-center flex flex-col scroll-ml-10 justify-center items-center'
										key={trip.name}
									>
										<img
											className='img-fill items-center'
											src={trip.image}
											alt={trip.name}
										/>
										<div className='flex flex-col px-2 py-3'>
											<p className='text-dark text-base font-bold'>
												{trip.name}
											</p>
											<p className='text-grey text-xs'>
												{trip.rented_props_count} rented
												properties
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='flex flex-col mt-[2.25rem]'>
							<div className='flex flex-row gap-[7.44rem]'>
								<p className='flex items-start text-dark font-bold'>
									Explore by living style
								</p>
							</div>
						</div>
						<div className='flex flex-col p-3 '>
							<div className='overflow-x-scroll flex  whitespace-nowrap   flex-row justify-center  items-center snap-x snap-proximity ml-1 hide-scroll-bar gap-5'>
								{livingData.map((trip) => (
									<div
										className=' bg-white snap-center flex flex-col scroll-ml-10 justify-center items-center'
										key={trip.name}
									>
										<img
											className='img-fill items-center'
											src={trip.image}
											alt={trip.name}
										/>
										<div className='flex flex-col px-2 py-3'>
											<p className='text-dark text-base font-bold'>
												{trip.name}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='flex flex-col mt-[2.25rem]'>
							<div className='flex flex-row gap-[7.44rem]'>
								<p className='flex items-start text-dark font-bold'>
									Want to discover other experiences
								</p>
							</div>
						</div>
						<div className='flex flex-col p-3 mb-20'>
							<div className='overflow-x-scroll flex  whitespace-nowrap   flex-row justify-center  items-center snap-x snap-proximity ml-1 hide-scroll-bar gap-5'>
								{experiences.map((trip) => (
									<div
										className=' bg-white snap-center flex flex-col scroll-ml-10 justify-center items-center'
										key={trip.name}
									>
										<img
											className='img-fill items-center'
											src={trip.image}
											alt={trip.name}
										/>
										<div className='flex flex-col px-2 py-3'>
											<p className='text-dark text-base font-bold'>
												{trip.name}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Explore;
