import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Root from './routes/Root';
import Home from './routes/Home';
import Explore from './routes/Explore';
import Chat from './routes/Chat';
import Saved from './routes/Saved';
import ErrorPage from './error-page';
import Profile from './routes/Profile';
import Login from './routes/Login';
import './index.css';
import Onboarding from './routes/Onboarding';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/explore',
				element: <Explore />,
			},
			{
				path: '/chat',
				element: <Chat />,
			},
			{
				path: '/saved',
				element: <Saved />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/onboarding',
		element: <Onboarding />,
	},
]);
export const Main: React.FC = () => {
	return (
		<React.StrictMode>
			<NextUIProvider>
				<RouterProvider router={router} />
			</NextUIProvider>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
