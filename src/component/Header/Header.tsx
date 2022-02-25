import React from 'react';
import { fetchAlbumsLocal, fetchAlbumsQobuz, fetchAlbums } from '../../actions/album';
import { connect, ConnectedProps } from 'react-redux';

const Connector = connect(null, { fetchAlbumsLocal, fetchAlbumsQobuz, fetchAlbums });

const Header: React.FC<{} & ConnectedProps<typeof Connector>> = (props) => {
  return (
    <div>
      <h1 className="">Innous</h1>
      <button className="btn" onClick={props.fetchAlbums}>
        Fetch All
      </button>
      <button className="btn" onClick={props.fetchAlbumsLocal}>
        Fetch Local
      </button>
      <button className="btn" onClick={props.fetchAlbumsQobuz}>
        Fetch Qobuz
      </button>
    </div>
  );
};

export default Connector(Header);
