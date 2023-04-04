import Button from '@mui/material/Button';

const FunctionalButton = (props: {
	actionFunction: () => void;
	textOnButton: string;
}) => {
	return (
		<Button
			sx={{
				backgroundColor: '#b2ebf2',
				color: 'gray',
				margin: '8px',
				borderRadius: '8px',
				transition: '0.3s',
				'&:hover': {
					backgroundColor: '#b2ebf2',
					color: 'black',
					opacity: 1,
				},
			}}
			onClick={() => props.actionFunction()}
			variant="contained"
		>
			{props.textOnButton}
		</Button>
	);
};

export default FunctionalButton;
