import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import WrappedSearch, {
  Search
} from '@/features/search/views/Search.view';

describe('Search view test', function() {
  let store;

  beforeEach(() => {
    moxios.install();
    store = configureStore()({
      results: [
        {

        },
      ]
    });
  });

  it('should render proper html', function() {
    let search = jest.fn();

    const results = [
      {
      },
    ];

    const tree = renderer
      .create(
        <Provider store={store}>
          <WrappedSearch />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(function() {
    moxios.uninstall();
  });
});
