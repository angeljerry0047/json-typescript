import { Dispatch } from 'redux';
import { ActionTypes } from './album.types';
import data from './data.json';

export interface Album {
  id: string;
  source: 'LOCAL' | 'QOBUZ';
  artist: string;
  album: string;
  cover: string | null;
}
export interface FetchAlbumAction {
  type: ActionTypes.fetchAlbum;
  payload: Album[];
}
export interface FetchQobuzAlbumAction {
  type: ActionTypes.fetchQobuzAlbumAction;
  payload: Album[];
}
export interface FetchLocalAlbumAction {
  type: ActionTypes.fetchLocalAlbumAction;
  payload: Album[];
}

export interface FetchingAlbums {
  type: ActionTypes.fetchingAlbums;
}

export const fetchingAlbums: () => FetchingAlbums = () => ({
  type: ActionTypes.fetchingAlbums,
});

// to simulate data fetching
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
};

export const fetchAlbums = () => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchingAlbums>(fetchingAlbums());
    const data = (await getData()) as Album[];
    dispatch<FetchAlbumAction>({
      type: ActionTypes.fetchAlbum,
      payload: data,
    });
  };
};
export const fetchAlbumsLocal = () => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchingAlbums>(fetchingAlbums());
    const data = (await getData()) as Album[];
    dispatch<FetchLocalAlbumAction>({
      type: ActionTypes.fetchLocalAlbumAction,
      payload: data.filter(a => a.source === "LOCAL"),
    });
  };
};
export const fetchAlbumsQobuz = () => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchingAlbums>(fetchingAlbums());
    const data = (await getData()) as Album[];
    dispatch<FetchQobuzAlbumAction>({
      type: ActionTypes.fetchQobuzAlbumAction,
      payload: data.filter(a => a.source === "QOBUZ"),
    });
  };
};
