import React from 'react';
import PropTypes from 'prop-types';
import ResultView from './Result.view';

const SearchView = ({ fields, lists, handlers, album }) => {
  return (
    <div>
      <form>
        <label>Busque por artistas, álbuns ou músicas</label>
        <input
          type="text"
          name="search"
          placeholder="Comece a escrever..."
          value={fields.search}
          onChange={handlers.setField('search')}
        />
      </form>
      <div>
        {lists.results.length > 0
          ? lists.results.map(r => (
              <ResultView
                key={r.id}
                id={r.id}
                name={r.name}
                artist={r.artists[0]}
                image={r.images[1]}
                redirectAlbum={handlers.getAlbum}
              />
            ))
          : lists.recommendations.map(c => (
              <ResultView
                key={c.id}
                id={c.id}
                name={c.name}
                image={c.icons[0]}
              />
            ))}
      </div>
    </div>
  );
};

SearchView.propTypes = {
  album: PropTypes.object,
  lists: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired
};

export default SearchView;
