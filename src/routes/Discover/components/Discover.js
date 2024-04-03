import React from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import useSpotifyData from "../../../hooks/useSpotifyData";

const Discover = () => {
  const {
    spotifyData: { latestReleases, featuredPlaylists, genreCategories },
    loading,
    error,
  } = useSpotifyData();
  console.log("Discover: ", latestReleases, featuredPlaylists, genreCategories);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={latestReleases}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={featuredPlaylists}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={genreCategories}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
