import { ActionTypes } from './search.types';

export interface SetSearchField {
  type: ActionTypes.changeSearchField;
  payload: string;
}

export const setSearchField: (tesxt: string) => SetSearchField = (text: string) => ({
  type: ActionTypes.changeSearchField,
  payload: text,
});
