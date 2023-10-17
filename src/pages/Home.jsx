import { Link } from "react-router-dom";
import data from "../data/songs.json";
function Home() {
  console.log(data);

  return (
    <>
      <div className="main_wrapper">
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        <div className="song_wrapper">
          {data.songs.map((song) => (
            <div key={song.title} className="song_box">
              <Link to={`/song/${song.title.replaceAll(" ", "-")}`}>
                <p>{song.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
