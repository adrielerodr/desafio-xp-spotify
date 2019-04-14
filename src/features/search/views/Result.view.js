import React from 'react';
import PropTypes from 'prop-types';

const ResultView = ({ id, name, artist, image, redirectAlbum }) => {
  return (
    <a onClick={() => redirectAlbum(id)} className="card">
      <img
        src={image.url}
        alt={name}
        height={image.height - 100}
        width={image.width - 100}
      />
      <p>{name}</p>
      <p className="text-grey">{(artist || {}).name}</p>
    </a>
  );
};

ResultView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.object,
  image: PropTypes.object.isRequired,
  redirectAlbum: PropTypes.func
};

export default ResultView;
