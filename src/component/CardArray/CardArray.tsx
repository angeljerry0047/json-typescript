import React from 'react';
import Card from '../Card/Card';

import { Album } from '../../actions/album'

const CardArray: React.FC<{ albums: Album[] }> = ({ albums }) => (
  <div className='card-array'>
    {albums.map((album) => (
      <Card key={album.id} {...album} />
    ))}
  </div>
);
export default CardArray;