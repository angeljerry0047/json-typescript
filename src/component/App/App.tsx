import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { fetchAlbums } from '../../actions/album';
import { StoreState } from '../../reducers';

import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Scroll from '../Scroll/Scroll';
import CardArray from '../CardArray/CardArray';

interface AppProps { }

const connector = connect(null, { fetchAlbums });

type ComponentProps = ConnectedProps<typeof connector> & AppProps;

const App: React.FC<ComponentProps> = ({ fetchAlbums }) => {
  const search = useSelector((st: StoreState) => st.search.searchField);
  const albumState = useSelector((st: StoreState) => st.albums);

  const filteredAlbums = albumState.albums.filter(
    (album) => album.album.toLowerCase().match(search) || album.artist.toLowerCase().match(search),
  );
  const [init, setInit] = useState<Boolean>(true);
  const fetchData = () => {
    fetchAlbums();
    setInit(false);
  }
  return init ? <div className="tc container"><button className="init-button" onClick={() => fetchData()}>GET ALBUMS</button></div> : (
    <div className="tc container">
      <Header />
      <Search value={search} />
      <Scroll>
        {albumState.loading ? (
          <div className="tc f1">Loading...</div>
        ) : (
          <CardArray albums={filteredAlbums} />
        )}
      </Scroll>
    </div>
  );
};

export default connector(App);
