import { ActionTypes, Action } from '../actions/search';

export interface SearchReducer {
  searchField: string;
}

const searchInitialState: SearchReducer = {
  searchField: '',
};

export const searchReducer = (state = searchInitialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.changeSearchField:
      return {
        searchField: action.payload,
      };
    default:
      return state;
  }
};
