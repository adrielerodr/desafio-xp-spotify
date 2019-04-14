import React from 'react';
import PropTypes from 'prop-types';

const getMinutes = miliseconds => {
  const minutes = Math.floor(miliseconds / 60000);
  const seconds = ((miliseconds % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const AlbumView = ({ id, name, artist, image, tracks, handlers }) => {
  return (
    <div className="box-container">
      <div className="section-buttons">
        <button type="button" onClick={() => handlers.redirect('/')}>
          {'< Voltar'}
        </button>
      </div>
      <div className="box">
        <div className="box-album">
          <img
            src={image.url}
            alt={name}
            height={image.height}
            width={image.width}
          />
          <p>{name}</p>
          <p className="text-grey">{(artist || {}).name}</p>
        </div>
        <div className="box-tracks">
          {tracks &&
            tracks.map(t => (
              <div className="track" key={t.id}>
                <p className="text-grey">{t.track_number}.</p>
                <p className="track-name">{t.name}</p>
                <p className="text-grey">{getMinutes(t.duration_ms)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

AlbumView.propTypes = {
  artist: PropTypes.object,
  tracks: PropTypes.array,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired
};

export default AlbumView;
