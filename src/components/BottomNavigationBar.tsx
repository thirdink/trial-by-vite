import { Link, useLocation } from 'react-router-dom';
import {
	HomeSVG,
	ExploreSVG,
	ChatSVG,
	SavedSVG,
	ProfileSVG,
} from '../assets/svg';

const links = [
	{ to: '/', label: 'Home', svg: HomeSVG },
	{ to: '/explore', label: 'Explore', svg: ExploreSVG },
	{ to: '/chat', label: 'Chat', svg: ChatSVG },
	{ to: '/saved', label: 'Saved', svg: SavedSVG },
	{ to: '/profile', label: 'Profile', svg: ProfileSVG },
];

function BottomNavigationBar() {
	const location = useLocation();
	return (
		<>
			<section
				id='bottom-navigation'
				className='block fixed inset-x-0 bottom-0 z-10 bg-white shadow mx-auto'
			>
				<div id='tabs' className='flex justify-between text-grey'>
					{links.map(({ to, label, svg: SVG }) => (
						<Link
							key={to}
							to={to}
							className={`w-full justify-center inline-block text-center pt-2 pb-1 ${
								location.pathname === to
									? 'text-primary'
									: 'hover:text-primary focus:text-primary'
							}`}
						>
							<SVG
								className={`w-5 h-5 fill-current inline-block mb-1${
									location.pathname === to
										? 'text-primary'
										: 'text-grey'
								}`}
								fill={
									location.pathname === to
										? 'currentColor'
										: 'none'
								}
							/>
							<span className='tab tab-home block text-xs'>
								{label}
							</span>
						</Link>
					))}
				</div>
			</section>
		</>
	);
}

export default BottomNavigationBar;
