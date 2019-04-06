import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import WrappedAlbum, {
  Album
} from '@/features/search/views/Album.view';

describe('Album view test', function() {
  let store;

  beforeEach(() => {
    moxios.install();
    store = configureStore()({
      musics: [
        {

        },
      ]
    });
  });

  it('should render proper html', function() {
    let musics = jest.fn();
    const musics = [
      {

      },
    ];

    const tree = renderer
      .create(
        <Provider store={store}>
          <WrappedAlbum />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(function() {
    moxios.uninstall();
  });
});
