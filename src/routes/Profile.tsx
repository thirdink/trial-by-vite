import React from 'react';
import BottomNavigationBar from '@/components/BottomNavigationBar';

const Profile: React.FC = () => {
	return (
		<>
			<div className='w-full h-screen'>
				<div>Profile</div>
				<BottomNavigationBar />
			</div>
		</>
	);
};

export default Profile;
