import { FetchAlbumAction, FetchingAlbums, FetchLocalAlbumAction, FetchQobuzAlbumAction } from './album.action';

export enum ActionTypes {
  fetchAlbum = 'fetchAlbum',
  fetchingAlbums = 'fetchingAlbums',
  fetchQobuzAlbumAction = 'fetchQobuzAlbumAction',
  fetchLocalAlbumAction = 'fetchLocalAlbumAction'
}

export type Action = FetchAlbumAction | FetchingAlbums | FetchLocalAlbumAction | FetchQobuzAlbumAction;
