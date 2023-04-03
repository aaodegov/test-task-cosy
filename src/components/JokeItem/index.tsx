import React, { useEffect, useState } from 'react';
import style from './jokeItem.module.css';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	IExtendedJoke,
	fillFavouriteJokesList,
} from '../../features/favouriteJokesSlice';
import 'lodash.isequal';
import isEqual from 'lodash.isequal';

const JokeItem = (props: { joke: IExtendedJoke }) => {
	const dispatch = useAppDispatch();

	// состояние лайка на отдельной шутке
	const [isFavorite, setIsFavorite] = useState(props.joke.status);

	const like = (joke: IExtendedJoke) => {
		const favouriteJokesFromLocalStorage =
			localStorage.getItem('favouriteJokes');

		const favouriteJokesArray: Array<IExtendedJoke> = JSON.parse(
			favouriteJokesFromLocalStorage!
		);

		favouriteJokesArray.push({ ...joke, status: true });
		localStorage.setItem(
			'favouriteJokes',
			JSON.stringify(favouriteJokesArray)
		);
		setIsFavorite(!isFavorite);
	};

	const unlike = (joke: IExtendedJoke) => {
		const favouriteJokesFromLocalStorage =
			localStorage.getItem('favouriteJokes');

		const favouriteJokesArray: Array<IExtendedJoke> = JSON.parse(
			favouriteJokesFromLocalStorage!
		);

		const favouriteJokesArrayWithoutUnlikeJoke = favouriteJokesArray.filter(
			(item) => !isEqual(item, joke)
		);

		localStorage.setItem(
			'favouriteJokes',
			JSON.stringify(favouriteJokesArrayWithoutUnlikeJoke)
		);
		dispatch(fillFavouriteJokesList(favouriteJokesArrayWithoutUnlikeJoke));
		setIsFavorite(!isFavorite);
	};

	return (
		<div className={style.joke__item}>
			{props.joke.joke}
			{isFavorite ? (
				<FavoriteRoundedIcon
					sx={{
						fontSize: 28,
						color: 'red',
					}}
					className={style.star__icon}
					onClick={() => unlike(props.joke)}
				/>
			) : (
				<FavoriteBorderRoundedIcon
					sx={{
						fontSize: 28,
						color: 'grey',
						opacity: isFavorite ? 1 : 0.3,
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
