import types from '@/features/album/actions/album.types';
import reducer from '@/features/album/actions/album.reducer';

describe('Album reducer test', function() {
  it('Should return selected album infos', function() {
    const state = {};
    let newState = reducer(state, {
      type:`${types.GET_ALBUM_BY_ID}_FULFILLED`,
      payload: {
        "artists": [
          {
            "id": "0du5cEVh5yTK9QJze8zA0C",
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
        "tracks": {
          "items": [
            {
              "duration_ms": 223253,
              "id": "4lLtanYk6tkMvooU0tWzG8",
              "name": "Grenade",
              "preview_url": "https://p.scdn.co/mp3-preview/d6fc23418ef4a090922decfe6a47c7bc87c1d762?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 1,
            },
            {
              "duration_ms": 220733,
              "id": "47Slg6LuqLaX0VodpSCvPt",
              "name": "Just the Way You Are",
              "preview_url": "https://p.scdn.co/mp3-preview/07c6c33d6426d61ffd2e93d4c06ca599f7761b46?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 2,
            },
            {
              "duration_ms": 243013,
              "id": "4LjkHlY5qDz0hhFJJH5M7a",
              "name": "Our First Time",
              "preview_url": "https://p.scdn.co/mp3-preview/1b8f90e8f4d6270c9c93335f6bb184505f28e495?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 3,
            },
            {
              "duration_ms": 147746,
              "id": "7hCNBVRhHzcsRAv0TQnOzq",
              "name": "Runaway Baby",
              "preview_url": "https://p.scdn.co/mp3-preview/9e9a874c775f47ae1dc0a45d848f990f66f98854?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 4,
            },
            {
              "duration_ms": 190213,
              "id": "386RUes7n1uM1yfzgeUuwp",
              "name": "The Lazy Song",
              "preview_url": "https://p.scdn.co/mp3-preview/6dda0f582db7db112f377d36df313cf04e706f27?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 5,
            },
            {
              "duration_ms": 230120,
              "id": "6SKwQghsR8AISlxhcwyA9R",
              "name": "Marry You",
              "preview_url": "https://p.scdn.co/mp3-preview/b50deda939ea24755b044a89c7997bb43f252f5a?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 6,
            },
            {
              "duration_ms": 217866,
              "id": "1wVuPmvt6AWvTL5W2GJnzZ",
              "name": "Talking to the Moon",
              "preview_url": "https://p.scdn.co/mp3-preview/97de5b6d487f491cddfb427c1612f45f5b3c9388?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 7,
            },
            {
              "duration_ms": 229373,
              "id": "1ewMCmw7qCb5a9ttqiyemu",
              "name": "Liquor Store Blues (feat. Damian Marley)",
              "preview_url": "https://p.scdn.co/mp3-preview/8edb84ac34535675426e63f935c50ce2bb900943?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 8,
            },
            {
              "duration_ms": 197373,
              "id": "3B5UbSndRz907IZhhmUfLi",
              "name": "Count on Me - EP Version",
              "preview_url": "https://p.scdn.co/mp3-preview/84464b2b96398cae75e0924bdf693a44727338b8?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 9,
            },
            {
              "duration_ms": 227760,
              "href": "https://api.spotify.com/v1/tracks/78Z199FfQHt4VpnJzlYaIe",
              "id": "78Z199FfQHt4VpnJzlYaIe",
              "name": "The Other Side (feat. CeeLo Green and B.o.B) - EP Version",
              "preview_url": "https://p.scdn.co/mp3-preview/8af2a8821566eb40ef2f82d0bf0b8d35d88e2892?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 10,
            },
            {
              "duration_ms": 181653,
              "id": "3P4v70V3Zt804r2c9dZivK",
              "name": "Somewhere in Brooklyn - EP Version",
              "preview_url": "https://p.scdn.co/mp3-preview/dfeb32efefc24ad89c7bc5946700b5760988bea4?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 11,
            },
            {
              "duration_ms": 217773,
              "id": "6YKT5HoPwjTwhHiCNQsBMK",
              "name": "Talking to the Moon - Acoustic Piano Version",
              "preview_url": "https://p.scdn.co/mp3-preview/577c88d9d2d99a008de237bfd995f0e2e28f8be7?cid=2320767426ea4829af70d1abb1e6bb7f",
              "track_number": 12,
            }
          ],
        }
      }
    });

    let expectedState = {
      id: '6J84szYCnMfzEcvIcfWMFL',
      name: 'Doo-Wops & Hooligans',
      images: [
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
      tracks: {
        items: [
          {
            "duration_ms": 223253,
            "id": "4lLtanYk6tkMvooU0tWzG8",
            "name": "Grenade",
            "preview_url": "https://p.scdn.co/mp3-preview/d6fc23418ef4a090922decfe6a47c7bc87c1d762?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 1,
          },
          {
            "duration_ms": 220733,
            "id": "47Slg6LuqLaX0VodpSCvPt",
            "name": "Just the Way You Are",
            "preview_url": "https://p.scdn.co/mp3-preview/07c6c33d6426d61ffd2e93d4c06ca599f7761b46?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 2,
          },
          {
            "duration_ms": 243013,
            "id": "4LjkHlY5qDz0hhFJJH5M7a",
            "name": "Our First Time",
            "preview_url": "https://p.scdn.co/mp3-preview/1b8f90e8f4d6270c9c93335f6bb184505f28e495?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 3,
          },
          {
            "duration_ms": 147746,
            "id": "7hCNBVRhHzcsRAv0TQnOzq",
            "name": "Runaway Baby",
            "preview_url": "https://p.scdn.co/mp3-preview/9e9a874c775f47ae1dc0a45d848f990f66f98854?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 4,
          },
          {
            "duration_ms": 190213,
            "id": "386RUes7n1uM1yfzgeUuwp",
            "name": "The Lazy Song",
            "preview_url": "https://p.scdn.co/mp3-preview/6dda0f582db7db112f377d36df313cf04e706f27?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 5,
          },
          {
            "duration_ms": 230120,
            "id": "6SKwQghsR8AISlxhcwyA9R",
            "name": "Marry You",
            "preview_url": "https://p.scdn.co/mp3-preview/b50deda939ea24755b044a89c7997bb43f252f5a?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 6,
          },
          {
            "duration_ms": 217866,
            "id": "1wVuPmvt6AWvTL5W2GJnzZ",
            "name": "Talking to the Moon",
            "preview_url": "https://p.scdn.co/mp3-preview/97de5b6d487f491cddfb427c1612f45f5b3c9388?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 7,
          },
          {
            "duration_ms": 229373,
            "id": "1ewMCmw7qCb5a9ttqiyemu",
            "name": "Liquor Store Blues (feat. Damian Marley)",
            "preview_url": "https://p.scdn.co/mp3-preview/8edb84ac34535675426e63f935c50ce2bb900943?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 8,
          },
          {
            "duration_ms": 197373,
            "id": "3B5UbSndRz907IZhhmUfLi",
            "name": "Count on Me - EP Version",
            "preview_url": "https://p.scdn.co/mp3-preview/84464b2b96398cae75e0924bdf693a44727338b8?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 9,
          },
          {
            "duration_ms": 227760,
            "href": "https://api.spotify.com/v1/tracks/78Z199FfQHt4VpnJzlYaIe",
            "id": "78Z199FfQHt4VpnJzlYaIe",
            "name": "The Other Side (feat. CeeLo Green and B.o.B) - EP Version",
            "preview_url": "https://p.scdn.co/mp3-preview/8af2a8821566eb40ef2f82d0bf0b8d35d88e2892?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 10,
          },
          {
            "duration_ms": 181653,
            "id": "3P4v70V3Zt804r2c9dZivK",
            "name": "Somewhere in Brooklyn - EP Version",
            "preview_url": "https://p.scdn.co/mp3-preview/dfeb32efefc24ad89c7bc5946700b5760988bea4?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 11,
          },
          {
            "duration_ms": 217773,
            "id": "6YKT5HoPwjTwhHiCNQsBMK",
            "name": "Talking to the Moon - Acoustic Piano Version",
            "preview_url": "https://p.scdn.co/mp3-preview/577c88d9d2d99a008de237bfd995f0e2e28f8be7?cid=2320767426ea4829af70d1abb1e6bb7f",
            "track_number": 12,
          }
        ],
      },
      artists: [{
        "id": "0du5cEVh5yTK9QJze8zA0C",
        "name": "Bruno Mars",
      }]
    };

    expect(newState).toEqual(expectedState);
  });
});
