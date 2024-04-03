import axios from "axios";
import accessConfig from "../accessConfig";

const { clientId, clientSecret, authUrl } = accessConfig;
let cachedSpotifyToken = null;
let spotifyTokenFetchPromise = null;

const getSpotifyToken = async () => {
  if (cachedSpotifyToken) return cachedSpotifyToken;
  if (spotifyTokenFetchPromise) return spotifyTokenFetchPromise;

  spotifyTokenFetchPromise = (async () => {
    try {
      const formData = new URLSearchParams();
      formData.append("grant_type", "client_credentials");
      console.log(authUrl);
      const authResponse = await axios.post(authUrl, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
      });

      const { access_token: newToken } = authResponse.data;
      cachedSpotifyToken = newToken;
      spotifyTokenFetchPromise = null; // Reset promise after caching token
      return newToken;
    } catch (authError) {
      console.error("Error fetching Spotify token:", authError);
      spotifyTokenFetchPromise = null; // Reset promise to allow retries
      throw authError;
    }
  })();

  return spotifyTokenFetchPromise;
};

export default getSpotifyToken;
