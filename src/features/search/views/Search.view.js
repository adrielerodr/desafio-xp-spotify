import React from 'react';
import PropTypes from 'prop-types';

const SearchView = ({ fields, lists, handlers }) => {
  return (
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
  );
};

SearchView.propTypes = {
  lists: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired
};

export default SearchView;
