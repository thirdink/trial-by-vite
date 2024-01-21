import { Outlet } from 'react-router-dom';
import BottomNavigationBar from '../components/BottomNavigationBar';

function Root() {
	return (
		<>
			<main className='purple-light text-foreground bg-background'>
				<div className='w-full h-screen min-h-screen bg-background font-sans antialiased my-auto'>
					<div id='detail'>
						<Outlet />
					</div>
					<BottomNavigationBar />
				</div>
			</main>
		</>
	);
}

export default Root;
