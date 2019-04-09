import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import * as actions from './actions/search.actions';
import SearchView from './views/Search.view';

class Search extends Component {
  componentDidMount() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (hashParams.access_token) {
      this.props.actions.setToken(hashParams);
      this.props.actions.getRecommendations(hashParams.access_token);
    } else {
      window.location.href =
        'https://accounts.spotify.com/authorize?client_id=2320767426ea4829af70d1abb1e6bb7f&response_type=token&redirect_uri=http://localhost:3000';
    }
  }

  componentDidUpdate(prevProps) {
    const { search: { fields: prevFields } } = prevProps;
    const {
      actions,
      search: { fields: thisFields, token: thisToken }
    } = this.props;

    if (thisFields.search && prevFields.search !== thisFields.search) {
      actions.getAlbums(thisFields.search, thisToken);
    }
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
    const { search: { fields, lists } } = this.props;
    return (
      <SearchView fields={fields} lists={lists} handlers={this.handlers} />
    );
  }
}

Search.propTypes = {
  search: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default compose(connect(mapStateToProps, mapDispatchToProps)(Search));
