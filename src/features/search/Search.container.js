import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import * as actions from './actions/search.actions';

class Search extends Component {
  render() {
    return <div> Busque por artistas, álbuns ou músicas</div>;
  }
}

Search.propTypes = {
  actions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export { Search };
export default compose(connect(mapStateToProps, mapDispatchToProps)(Search));
