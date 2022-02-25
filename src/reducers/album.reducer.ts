import { Album, ActionTypes, Action } from '../actions/album';

export interface AlbumReducer {
	albums: Album[],
	loading: boolean,
}

const INITIAL_STATE: AlbumReducer = {
	albums: [],
	loading: false
}

export const albumsReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchAlbum:
			return {
				albums: [...action.payload],
				loading: false,
			};
		case ActionTypes.fetchingAlbums:
			return {
				...state,
				loading: true,
			}
		case ActionTypes.fetchQobuzAlbumAction:
			return {
				albums: [...action.payload],
				loading: false,
			};
		case ActionTypes.fetchLocalAlbumAction:
			return {
				albums: [...action.payload],
				loading: false,
			};
		default:
			return state;
	}
};
