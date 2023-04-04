import { createSlice } from '@reduxjs/toolkit';
import { IJoke } from '../pages/mainPage/components/MainPage';

export interface IExtendedJoke extends IJoke {
	status: boolean;
}

export interface IFavouriteJokes {
	isEmpty: boolean;
	favouriteJokesList: Array<IExtendedJoke>;
}

const initialState: IFavouriteJokes = {
	isEmpty: true,
	favouriteJokesList: [],
};

export const favouriteJokesSlice = createSlice({
	name: 'favouriteJokes',
	initialState,
	reducers: {
		fillFavouriteJokesList: (state, action) => {
			state.isEmpty = false;
			state.favouriteJokesList = action.payload;
		},
	},
});

export const { fillFavouriteJokesList } = favouriteJokesSlice.actions;
export default favouriteJokesSlice.reducer;
