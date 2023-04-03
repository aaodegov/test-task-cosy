import React, { useEffect, useState } from 'react';
import style from './jokeItem.module.css';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	IExtendedJoke,
	fillFavouriteJokesList,
} from '../../features/favouriteJokesSlice';
import isEqual from 'lodash.isequal';

const JokeItem = (props: { joke: IExtendedJoke }) => {
	const dispatch = useAppDispatch();

	// состояние лайка на отдельной шутке
	const [isFavorite, setIsFavorite] = useState(props.joke.status);

	// функция проставления лайка на понравившуюся шутку
	const like = (joke: IExtendedJoke) => {
		// получения имеющихся шуток из локалстора
		const favouriteJokesFromLocalStorage =
			localStorage.getItem('favouriteJokes');
		// конвертация стринги в массив
		const favouriteJokesArray: Array<IExtendedJoke> = JSON.parse(
			favouriteJokesFromLocalStorage!
		);
		// добавление в массив понравившейся шутки
		favouriteJokesArray.push({ ...joke, status: true });
		// сохрание измененного массива шуток в локалстор
		localStorage.setItem(
			'favouriteJokes',
			JSON.stringify(favouriteJokesArray)
		);
		setIsFavorite(!isFavorite);
	};

	// функция удаления лайка с ранее понравившейся шутки
	const unlike = (joke: IExtendedJoke) => {
		// получения имеющихся шуток из локалстора
		const favouriteJokesFromLocalStorage =
			localStorage.getItem('favouriteJokes');
		// конвертация стринги в массив
		const favouriteJokesArray: Array<IExtendedJoke> = JSON.parse(
			favouriteJokesFromLocalStorage!
		);
		// создание нового массива шуток без той, что перестала нравится
		const favouriteJokesArrayWithoutUnlikeJoke = favouriteJokesArray.filter(
			(item) => !isEqual(item, joke)
		);
		// сохрание измененного массива шуток в локалстор
		localStorage.setItem(
			'favouriteJokes',
			JSON.stringify(favouriteJokesArrayWithoutUnlikeJoke)
		);
		// перезапись массива шуток в стэйт
		dispatch(fillFavouriteJokesList(favouriteJokesArrayWithoutUnlikeJoke));
		setIsFavorite(!isFavorite);
	};

	return (
		<div
			className={style.joke__item}
			data-testid="joke-item"
		>
			{props.joke.joke}
			{isFavorite ? (
				<FavoriteRoundedIcon
					sx={{
						fontSize: 22,
						color: 'red',
						transition: '0.3s',
					}}
					className={style.star__icon}
					onClick={() => unlike(props.joke)}
				/>
			) : (
				<FavoriteBorderRoundedIcon
					sx={{
						fontSize: 22,
						color: 'grey',
						opacity: isFavorite ? 1 : 0.3,
						transition: '0.3s',
						'&:hover': {
							color: 'red',
							opacity: 1,
						},
					}}
					className={style.star__icon}
					onClick={() => like(props.joke)}
				/>
			)}
		</div>
	);
};

export default JokeItem;
