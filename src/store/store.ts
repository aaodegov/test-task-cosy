import { configureStore } from '@reduxjs/toolkit';
import currentJokesSlice from './reducers/currentJokesSlice';
import favouriteJokesSlice from './reducers/favouriteJokesSlice';

export const store = configureStore({
	reducer: {
		currentJokes: currentJokesSlice,
		favouriteJokes: favouriteJokesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
