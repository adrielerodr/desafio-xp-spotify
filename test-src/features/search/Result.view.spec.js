import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import handlers from './dependencies/functions';

import WrappedResult, {
  Result
} from '@/features/search/views/Result.view';

describe(`Result view test`, function() {
  it('Should render proper html', function() {
    const results = {
      "artists": [
        {
          "name": "Bruno Mars",
        }
      ],
      "id": "6J84szYCnMfzEcvIcfWMFL",
      "images": [
        {
            "height": 636,
            "url": "https://i.scdn.co/image/0a01bbfac984fe3a55192aceea6c0fe9bf495c09",
            "width": 640
        },
        {
            "height": 298,
            "url": "https://i.scdn.co/image/3d279adc8126da0e4b6f2247a6e1dbfbc559e1ac",
            "width": 300
        },
        {
            "height": 64,
            "url": "https://i.scdn.co/image/96ebe0fc8c5c9a0ee315575935f1700ef8e02a1d",
            "width": 64
        }
      ],
      "name": "Doo-Wops & Hooligans",
    };

    const tree = renderer
      .create(
        <WrappedResult
          key={results.id}
          id={results.id}
          name={results.name}
          artist={results.artists[0]}
          image={results.images[1]}
          redirectAlbum={handlers.getAlbum}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
