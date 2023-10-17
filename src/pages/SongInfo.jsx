import { useParams } from "react-router-dom";
import data from "../data/songs.json";

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const { songTitle } = useParams();

  const song = data.songs.find((s) => s.title === songTitle.replaceAll("-", " "));
  if (!song) return <p>Song is not found</p>;
  return (
    <>
      <div>
        <h2>Song Information</h2>
        <h3>song: {song.title}</h3>
        <p>{song.artist}</p>
        <p>
          Year: {song.year} Album: {song.album}
        </p>
      </div>
    </>
  );
}

export default SongInfo;
