import React from 'react';
import PropTypes from 'prop-types';

const getMinutes = miliseconds => {
  const minutes = Math.floor(miliseconds / 60000);
  const seconds = ((miliseconds % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const AlbumView = ({ id, name, artist, image, tracks, handlers }) => {
  return (
    <React.Fragment>
      <div>
        <button type="button" onClick={() => handlers.redirect('/')}>
          Voltar
        </button>
      </div>
      <div>
        <img
          src={image.url}
          alt={name}
          height={image.height}
          width={image.width}
        />
        <p className="name-album">{name}</p>
        <p className="name-artist">{(artist || {}).name}</p>
      </div>
      <div>
        {tracks &&
          tracks.map(t => (
            <div key={t.id}>
              <p className="track-number">{t.track_number}</p>
              <p className="track-name">{t.name}</p>
              <p className="track-duration">{getMinutes(t.duration_ms)}</p>
            </div>
          ))}
      </div>
    </React.Fragment>
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
