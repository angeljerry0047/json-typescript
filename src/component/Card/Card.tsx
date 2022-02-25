import React, { Component } from 'react';
import { Album } from '../../actions/album';

export default class Card extends Component<Album> {
  render() {
    const { cover, artist, source, album } = this.props;
    return (
      <div className="bg-light-green br3 pa3 ma2 grow bw2 shadow-5 dib album">
        <img src={`/data/imgs/${cover || 'undefined_album_cover.png'}`} alt="album" />
        {source !== 'LOCAL' ? <img className="not-local" src="/data/imgs/qobuz.png" alt="player"></img> : null}
        <div>
          <h2 className="album-name">{album}</h2>
          <p className="artist-name">{artist}</p>
        </div>
      </div>
    );
  }
}
