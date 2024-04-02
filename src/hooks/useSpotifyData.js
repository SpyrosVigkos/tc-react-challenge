import { useState, useEffect, useCallback } from "react";
import { SpotifyService } from "../api/spotifyService";

function mapPlaylistData(playlists) {
  return playlists.map((playlist) => ({
    name: playlist.name,
    images: playlist.images,
  }));
}
function mapCategoryData(playlists) {
  return playlists.map((playlist) => ({
    name: playlist.name,
    icons: playlist.icons,
  }));
}

function useSpotifyData() {
  const [latestReleases, setLatestReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [genreCategories, setGenreCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define fetchData using useCallback
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const latest = await SpotifyService.getLatestReleases();
      const playlists = await SpotifyService.getFeaturedPlaylists();
      const genres = await SpotifyService.getGenreCategories();

      setLatestReleases(latest);
      setFeaturedPlaylists(playlists);
      setGenreCategories(genres);
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

  const mappedLatestReleases = mapPlaylistData(latestReleases);
  const mappedfeaturedPlaylists = mapPlaylistData(featuredPlaylists);
  const mappedCategories = mapCategoryData(genreCategories);

  return {
    latestReleases: mappedLatestReleases,
    featuredPlaylists: mappedfeaturedPlaylists,
    genreCategories: mappedCategories,
    loading,
    error,
  };
}

export default useSpotifyData;
