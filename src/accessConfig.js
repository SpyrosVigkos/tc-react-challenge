const accessConfig = {
  baseUrl: process.env.REACT_APP_SPOTIFY_BASE_URL,
  authUrl: process.env.REACT_APP_SPOTIFY_AUTH_URL,
  redirectURl: process.env.REACT_APP_REDIRECT_URI,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  accessType: process.env.REACT_APP_ACCESS_TYPE,
  browseUrl: `${process.env.REACT_APP_SPOTIFY_BASE_URL}/browse`,
};
export default accessConfig;
