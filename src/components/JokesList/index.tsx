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
		const jokesFromLocalStorage = localStorage.getItem('currentJokes');
		jokesFromLocalStorage !== null
			? dispatch(fillJokesList(JSON.parse(jokesFromLocalStorage)))
			: dispatch(
					fillJokesList({
						isEmpty: true,
						jokesList: null,
					})
			  );
	}, []);

	// чтобы не работать с данными из локалстора, дергаем данные для работы уже из стора
	const jokes = useAppSelector((state) => state.currentJokes.jokesList);

	return (
		<div className={style.jokes__container}>
			{jokes?.map((item) => (
				<JokeItem
					jokeText={item.joke}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default JokesList;
