import React from 'react';
import style from './jokeItem.module.css';

type JokeProps = {
	jokeText: string;
};

const JokeItem = (props: JokeProps) => {
	return <div className={style.joke__item}>{props.jokeText}</div>;
};

export default JokeItem;
