import { useState, useEffect, useCallback } from "react";
import { SpotifyService } from "../api/spotifyService";

const dataMappers = {
  latestReleases: (data) => data.map(({ name, images }) => ({ name, images })),
  featuredPlaylists: (data) =>
    data.map(({ name, images }) => ({ name, images })),
  genreCategories: (data) => data.map(({ name, icons }) => ({ name, icons })),
};

function useSpotifyData() {
  const [spotifyData, setSpotifyData] = useState({
    latestReleases: [],
    featuredPlaylists: [],
    genreCategories: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all data in parallel using Promise.all for efficiency
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await Promise.all([
        SpotifyService.getLatestReleases(),
        SpotifyService.getFeaturedPlaylists(),
        SpotifyService.getGenreCategories(),
      ]);
      console.log("data", data);

      // Map the data immediately after fetching
      const [latestReleases, featuredPlaylists, genreCategories] = data;
      setSpotifyData({
        latestReleases: dataMappers.latestReleases(latestReleases),
        featuredPlaylists: dataMappers.featuredPlaylists(featuredPlaylists),
        genreCategories: dataMappers.genreCategories(genreCategories),
      });
    } catch (err) {
      console.error("Error fetching Spotify data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array means fetchData is created once

  // Use useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]); // fetchData is a dependency of this effect
  console.log("useSpotifyData: ", spotifyData);

  return { spotifyData, loading, error };
}

export default useSpotifyData;
