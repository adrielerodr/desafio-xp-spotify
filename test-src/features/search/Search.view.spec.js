import React from 'react';
import renderer from 'react-test-renderer';
import handlers from './dependencies/functions';

import WrappedSearch, {
  Search
} from '@/features/search/views/Search.view';

describe('Search view test', function() {
  it('Should render proper html', function() {
    const results = {
      fields: {
        search: 'Mars'
      },
      lists: {
        results: [
          {
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
          },
          {
            "artists": [
              {
                "name": "Bruno Mars",
              }
            ],
            "id": "4PgleR09JVnm3zY1fW3XBA",
            "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/bf41f93f8c895eff007b88bd2e23e12dfe078792",
                  "width": 640
              },
              {
                  "height": 300,
                  "url": "https://i.scdn.co/image/63ddbd647a5a4e672da6b6eb29cfc38c985bffca",
                  "width": 300
              },
              {
                  "height": 64,
                  "url": "https://i.scdn.co/image/f77f484d87a4b84e611af30011c381f9ccef0d0b",
                  "width": 64
              }
            ],
            "name": "24K Magic",
          },
          {
            "artists": [
              {
                "name": "Bruno Mars",
              }
            ],
            "id": "58ufpQsJ1DS5kq4hhzQDiI",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/da39a8f80539ea048011ee3aa59f4066659290ea",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/e404a30a9e9a449e1f30156940fb0af63e45a42e",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/6f958e8a9335e1458fc81f22a72f87a11737179e",
                    "width": 64
                }
              ],
            "name": "Unorthodox Jukebox",
          }
        ]
      }
    };

    const tree = renderer
      .create(
        <WrappedSearch
          lists={results.lists}
          fields={results.fields}
          handlers={handlers}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
