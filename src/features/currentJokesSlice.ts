import { createSlice } from '@reduxjs/toolkit';
import { IJoke } from '../components/MainPage';

export interface ICurrentJokes {
	isEmpty: boolean;
	jokesList: Array<IJoke> | null;
}

const initialState: ICurrentJokes = {
	isEmpty: true,
	jokesList: null,
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
