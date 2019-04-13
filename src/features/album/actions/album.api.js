import axios from 'axios';

class AlbumApi {
  static getAlbumById(id, token) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.SPOTIFY_API}/albums/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
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
}

export default AlbumApi;
