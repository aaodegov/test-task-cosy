import { createSlice } from '@reduxjs/toolkit';
import { IExtendedJoke } from './favouriteJokesSlice';

export interface ICurrentJokes {
	isEmpty: boolean;
	jokesList: Array<IExtendedJoke>;
}

const initialState: ICurrentJokes = {
	isEmpty: true,
	jokesList: [],
};

export const currentJokesSlice = createSlice({
	name: 'currentJokes',
	initialState,
	reducers: {
		fillJokesList: (state, action) => {
			state.isEmpty = false;
			state.jokesList = action.payload;
		},
	},
});

export const { fillJokesList } = currentJokesSlice.actions;
export default currentJokesSlice.reducer;
