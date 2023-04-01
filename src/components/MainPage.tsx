import React from 'react';
import style from './mainPage.module.css';
import { Outlet } from 'react-router-dom';
import GetJokesButton from './Buttons/GetJokesButton';
import FavouriteJokesButton from './Buttons/FavouriteJokesButton';

const MainPage = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.content__area}>
				<div className={style.buttons__block}>
					<GetJokesButton />
					<FavouriteJokesButton />
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default MainPage;
