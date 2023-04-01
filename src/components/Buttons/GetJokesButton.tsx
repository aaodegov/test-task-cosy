import Button from '@mui/material/Button';
import axios from 'axios';
import { useAppDispatch } from '../../app/hooks';
import { fillJokesList } from '../../features/currentJokesSlice';
import { useNavigate } from 'react-router-dom';

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

const GetJokesButton = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const getJokesArray = () => {
		const apiUrl =
			'https://v2.jokeapi.dev/joke/Programming?type=single&amount=10';
		axios.get(apiUrl).then((resp) => {
			const jokesList: Array<IJoke> = resp.data.jokes;
			dispatch(fillJokesList(jokesList));
			localStorage.setItem('currentJokes', JSON.stringify(jokesList));
		});
		navigate('/jokes');
	};

	return (
		<Button
			sx={{
				backgroundColor: '#b2ebf2',
				color: 'gray',
				borderRadius: '8px',
				'&:hover': {
					backgroundColor: '#b2ebf2',
					color: 'black',
					opacity: 1,
				},
			}}
			onClick={() => getJokesArray()}
			variant="contained"
		>
			Дайте мне джоуки!
		</Button>
	);
};

export default GetJokesButton;
