import Button from '@mui/material/Button';

type getJokesProps = {
	getJokesArray: () => void;
};

const GetJokesButton = (props: getJokesProps) => {
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
			onClick={() => props.getJokesArray()}
			variant="contained"
		>
			Дайте мне джоуки!
		</Button>
	);
};

export default GetJokesButton;
