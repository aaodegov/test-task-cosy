import React from 'react';
import './App.css';
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import FavouriteJokesList from './components/FavouritesList';
import JokesList from './components/JokesList';
import ErrorPage from './components/ErrorPage';
import NotFoundPage from './components/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		children: [
			{
				path: '/favourites',
				element: <FavouriteJokesList />,
			},
			{
				path: '/jokes',
				element: <JokesList />,
			},
			{
				path: '/404',
				element: <NotFoundPage />,
			},
			{
				path: '*',
				element: (
					<Navigate
						to="/404"
						replace
					/>
				),
			},
		],
		errorElement: <ErrorPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
