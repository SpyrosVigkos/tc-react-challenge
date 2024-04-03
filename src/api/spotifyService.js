import axios from "axios";
import accessConfig from "../accessConfig";
import getSpotifyToken from "./getSpotifyToken";

const { browseUrl, accessType } = accessConfig;

class SpotifyService {
  constructor() {
    this.spotifyApi = axios.create({
      baseURL: browseUrl,
    });

    this.spotifyApi.interceptors.request.use(
      async (axiosConfig) => {
        const token = await getSpotifyToken();
        console.log(token);
        if (token) {
          axiosConfig.headers["Authorization"] = `${accessType} ${token}`;
        }
        return axiosConfig;
      },
      (error) => Promise.reject(error)
    );
  }

  getLatestReleases = async () => {
    const response = await this.spotifyApi.get(`/new-releases`);
    return response.data.albums.items;
  };

  getFeaturedPlaylists = async () => {
    const response = await this.spotifyApi.get(`/featured-playlists`);
    return response.data.playlists.items;
  };

  getGenreCategories = async () => {
    const response = await this.spotifyApi.get(`/categories`);
    return response.data.categories.items;
  };
}

const spotifyService = new SpotifyService();
export { spotifyService as SpotifyService };
