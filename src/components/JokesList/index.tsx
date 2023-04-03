import React, { useEffect } from 'react';
import JokeItem from '../JokeItem';
import style from './jokeList.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fillJokesList } from '../../features/currentJokesSlice';

const JokesList = () => {
	const dispatch = useAppDispatch();

	// при рендере компонента осуществялется проверка наличия в локалсторе данных о шутках
	// если локалстор не пустой, то диспатчатся в стор эти данные
	// если локалстор пустой, то диспатчится информация о том, что шутки не загружены и список шуток пуст
	useEffect(() => {
		if (localStorage.getItem('favouriteJokes') === null) {
			localStorage.setItem('favouriteJokes', JSON.stringify([]));
		}

		// // получение массива запрошенных(новых) шуток из локалстора
		const jokesFromLocalStorage = localStorage.getItem('currentJokes');
		jokesFromLocalStorage !== null
			? dispatch(fillJokesList(JSON.parse(jokesFromLocalStorage)))
			: dispatch(
					fillJokesList({
						isEmpty: true,
						jokesList: [],
					})
			  );
	}, []);

	// чтобы не работать с данными из локалстора, дергаем данные для работы уже из стора
	const jokes = useAppSelector((state) => state.currentJokes.jokesList);

	return (
		<div className={style.jokes__container}>
			{jokes?.map((item) => (
				<JokeItem
					joke={{ ...item, status: false }}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default JokesList;
