import React, { useState } from 'react';
import style from './jokeItem.module.css';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

type JokeProps = {
	jokeText: string;
};

const JokeItem = (joke: JokeProps) => {
	const dispatch = useAppDispatch();

	// состояние лайка на отдельной шутке
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div className={style.joke__item}>
			{joke.jokeText}
			{isFavorite ? (
				<FavoriteRoundedIcon
					sx={{
						fontSize: 28,
						color: 'red',
					}}
					className={style.star__icon}
					onClick={() => setIsFavorite(!isFavorite)}
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
					// тут нужна функция удаления шутки из избранного
					onClick={() => setIsFavorite(!isFavorite)}
				/>
			)}
		</div>
	);
};

export default JokeItem;
