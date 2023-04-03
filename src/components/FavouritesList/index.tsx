import React, { useEffect } from 'react';
import JokeItem from '../JokeItem';
import style from '../JokesList/jokeList.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fillFavouriteJokesList } from '../../features/favouriteJokesSlice';

const FavouriteJokeList = () => {
	const dispatch = useAppDispatch();

	// при рендере компонента осуществялется проверка наличия в локалсторе данных о шутках
	// если локалстор не пустой, то диспатчатся в стор эти данные
	// если локалстор пустой, то диспатчится информация о том, что шутки не загружены и список шуток пуст
	useEffect(() => {
		const favouriteJokesFromLocalStorage =
			localStorage.getItem('favouriteJokes');
		favouriteJokesFromLocalStorage !== null
			? dispatch(
					fillFavouriteJokesList(
						JSON.parse(favouriteJokesFromLocalStorage)
					)
			  )
			: dispatch(
					fillFavouriteJokesList({
						isEmpty: true,
						favouriteJokesList: [],
					})
			  );
	}, []);

	// чтобы не работать с данными из локалстора, дергаем данные для работы уже из стора
	const jokes = useAppSelector(
		(state) => state.favouriteJokes.favouriteJokesList
	);

	return (
		<div className={style.jokes__container}>
			{jokes?.map((item) => (
				<JokeItem
					joke={{ ...item, status: true }}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default FavouriteJokeList;
