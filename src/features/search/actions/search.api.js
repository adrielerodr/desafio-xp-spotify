import axios from 'axios';

class SearchApi {
  static getRecommendations(token) {
    return new Promise((resolve, reject) => {
      const params = {
        country: 'BR',
        locale: 'pt_BR'
      };
      axios
        .get(`${process.env.SPOTIFY_API}/browse/categories`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params
        })
        .then(res => {
          if (res.status === 204) {
            resolve({});
          }

          resolve({ ...res.data });
        })
        .catch(err => {
          if (err.status === 401) {
            localStorage.removeItem('token');
            window.location.href =
              'https://accounts.spotify.com/authorize?client_id=2320767426ea4829af70d1abb1e6bb7f&response_type=token&redirect_uri=http://localhost:3000';
          }
          if (err.response && err.response.data)
            reject({ ...err.response.data });

          reject({ ...err });
        });
    });
  }

  static getAlbums(search, token) {
    return new Promise((resolve, reject) => {
      const params = {
        q: search,
        type: 'album'
      };
      axios
        .get(`${process.env.SPOTIFY_API}/search`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params
        })
        .then(res => {
          if (res.status === 204) {
            resolve({});
          }

          resolve({ ...res.data });
        })
        .catch(err => {
          if (err.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href =
              'https://accounts.spotify.com/authorize?client_id=2320767426ea4829af70d1abb1e6bb7f&response_type=token&redirect_uri=http://localhost:3000';
          }
          if (err.response && err.response.data)
            reject({ ...err.response.data });

          reject({ ...err });
        });
    });
  }
}

export default SearchApi;
