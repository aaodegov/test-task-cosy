import { configureStore } from '@reduxjs/toolkit';
import currentJokesSlice from '../features/currentJokesSlice';
import favouriteJokesSlice from '../features/favouriteJokesSlice';

export const store = configureStore({
	reducer: {
		currentJokes: currentJokesSlice,
		favouriteJokes: favouriteJokesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
