import style from './mainPage.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../utils/hooks/hooks';
import { fillJokesList } from '../../../store/reducers/currentJokesSlice';
import axios from 'axios';
import { IExtendedJoke } from '../../../store/reducers/favouriteJokesSlice';
import FunctionalButton from '../../../components/Buttons/FunctionalButton';

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
						actionFunction={getJokesArray}
						textOnButton={'Дайте мне джоуки!'}
					/>
					<FunctionalButton
						actionFunction={goToFavouritePage}
						textOnButton={'Очень понравившиеся мне джоуки!'}
					/>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default MainPage;
