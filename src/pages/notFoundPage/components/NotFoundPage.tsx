import React from 'react';
import style from '../../mainPage/components/mainPage.module.css';

const NotFoundPage = () => {
	return (
		<div className={style.not__found}>
			<h3>Тут всего две страницы и кнопки на них выше</h3>
			<img
				src="https://i.giphy.com/media/ILW1fbJHW0Ndm/giphy.webp"
				alt="404"
			/>
		</div>
	);
};

export default NotFoundPage;
