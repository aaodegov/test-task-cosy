import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const FavouriteJokesButton = () => {
	const navigate = useNavigate();

	return (
		<Button
			sx={{
				backgroundColor: '#b2ebf2',
				color: 'gray',
				marginLeft: '1rem',
				borderRadius: '8px',
				'&:hover': {
					backgroundColor: '#b2ebf2',
					color: 'black',
					opacity: 1,
				},
			}}
			onClick={() => navigate('/favourites')}
			variant="contained"
		>
			Очень понравившиеся мне джоуки!
		</Button>
	);
};

export default FavouriteJokesButton;
