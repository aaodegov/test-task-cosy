import React from 'react';
import style from '../../mainPage/components/mainPage.module.css';

const ErrorPage = () => {
	return (
		<div className={style.not__found}>
			<img src="https://i.giphy.com/media/5pMGZHSqfvGT5mnTwx/giphy.webp" alt='error'></img>
		</div>
	);
};

export default ErrorPage;
