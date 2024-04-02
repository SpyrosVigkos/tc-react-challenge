import axios from "axios";
import accessConfig from "../accessConfig";

const authorizationText = `${accessConfig.accessType} ${accessConfig.accessToken}`;
const { browseUrl } = accessConfig;

class SpotifyService {
  constructor() {
    this.authHeaders = {
      Authorization: authorizationText,
    };
  }

  getLatestReleases = async () => {
    const response = await axios.get(`${browseUrl}/new-releases`, {
      headers: this.authHeaders,
    });

    return response.data.albums.items;
  };

  getFeaturedPlaylists = async () => {
    const response = await axios.get(`${browseUrl}/featured-playlists`, {
      headers: this.authHeaders,
    });

    return response.data.playlists.items;
  };

  getGenreCategories = async () => {
    const response = await axios.get(`${browseUrl}/categories`, {
      headers: this.authHeaders,
    });

    return response.data.categories.items;
  };
}

const spotifyService = new SpotifyService();
export { spotifyService as SpotifyService };