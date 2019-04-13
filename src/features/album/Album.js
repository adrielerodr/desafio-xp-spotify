import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import * as actions from './actions/album.actions';
import AlbumView from './views/Album.view';

class Album extends Component {
  componentWillMount() {
    const { actions, match } = this.props;
    const token = JSON.parse(localStorage.getItem('token'));
    actions.getAlbumById(match.params.id, token.access_token);
  }

  handleSetField = field => event => {
    this.props.actions.setField({ field, value: event.target.value });
  };

  get handlers() {
    return {
      setField: this.handleSetField
    };
  }

  render() {
    const { album: { id, name, artists, images, tracks } } = this.props;
    return (
      <AlbumView
        id={id}
        name={name}
        image={images[1] || []}
        artist={artists[0] || []}
        tracks={tracks.items}
      />
    );
  }
}

Album.propTypes = {
  match: PropTypes.object,
  album: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  album: state.album
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default compose(connect(mapStateToProps, mapDispatchToProps)(Album));
