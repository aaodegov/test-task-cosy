import style from './mainPage.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import GetJokesButton from './Buttons/GetJokesButton';
import FavouriteJokesButton from './Buttons/FavouriteJokesButton';
import { useAppDispatch } from '../app/hooks';
import { fillJokesList } from '../features/currentJokesSlice';
import axios from 'axios';
import { IExtendedJoke } from '../features/favouriteJokesSlice';

export interface IJoke {
	category: string;
	flags: {
		explicit: boolean;
		nsfw: boolean;
		political: boolean;
		racist: boolean;
		religious: boolean;
		sexist: boolean;
	};
	id: number;
	joke: string;
	lang: string;
	safe: boolean;
	type: string;
}

const MainPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	// получение списка шуток и добавление поля статус для завязки на него лайка
	const getJokesArray = () => {
		const apiUrl =
			'https://v2.jokeapi.dev/joke/Programming?type=single&amount=10';
		axios.get(apiUrl).then((resp) => {
			const jokesList: Array<IExtendedJoke> = resp.data.jokes;
			const jokeListWithStatus = jokesList.map((item) => ({
				...item,
				status: false,
			}));
			dispatch(fillJokesList(jokeListWithStatus));
			localStorage.setItem(
				'currentJokes',
				JSON.stringify(jokeListWithStatus)
			);
		});
		navigate('/jokes');
	};

	return (
		<div className={style.wrapper}>
			<div className={style.content__area}>
				<div className={style.buttons__block}>
					<GetJokesButton getJokesArray={getJokesArray} />
					<FavouriteJokesButton />
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default MainPage;
