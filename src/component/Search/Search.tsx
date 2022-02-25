import React from 'react';
import { useDispatch } from 'react-redux';

import { setSearchField } from '../../actions/search';

const Search: React.FC<{ value: string }> = ({ value }) => {
  const dispatcher = useDispatch();
  const setSearch = React.useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => dispatcher(setSearchField(evt.target.value)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );
  return (
    <input
      onChange={setSearch}
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Search Albums"
    />
  );
};

export default Search;
