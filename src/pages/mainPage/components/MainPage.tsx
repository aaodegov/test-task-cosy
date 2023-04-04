import style from './mainPage.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { fillJokesList } from '../features/currentJokesSlice';
import axios from 'axios';
import { IExtendedJoke } from '../features/favouriteJokesSlice';
import FunctionalButton from './Buttons/FunctionalButton';

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
	// Добавление списка шуток в локалстор и стэйт
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

	const goToFavouritePage = () => {
		navigate('/favourites');
	};

	return (
		<div className={style.wrapper}>
			<div className={style.content__area}>
				<div className={style.buttons__block}>
					<FunctionalButton
						onClickFunction={getJokesArray}
						textOnButton={'Дайте мне джоуки!'}
					/>
					<FunctionalButton
						onClickFunction={goToFavouritePage}
						textOnButton={'Очень понравившиеся мне джоуки!'}
					/>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default MainPage;
