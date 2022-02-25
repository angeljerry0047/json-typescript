import { combineReducers } from 'redux';
import { AlbumReducer, albumsReducer } from './album.reducer';
import { searchReducer, SearchReducer } from './search.reducer';

export interface StoreState {
  albums: AlbumReducer;
  search: SearchReducer;
}

export const reducers = combineReducers<StoreState>({
  albums: albumsReducer,
  search: searchReducer,
});
