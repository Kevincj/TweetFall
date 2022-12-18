import React from "react";
// import { ReactPhotoCollage } from "react-photo-collage";
import "./App.css";
import { useEffect, useState } from "react";
import configData from "./config.json";
import TweetCard from "./components/Card";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(configData.SERVER_URL)
      .then((res) => res.json())
      .then((res) => res.data)
      .then((data) =>
        data.flatMap((d) =>
          d.media.map((child) => Object.assign({ username: d.username }, child))
        )
      )
      .then((data) => setTweets(data));
    //   .then((data) => console.log(data));
  }, []);
  return (
    <div className="tweets-container">
      {tweets.map((tweet, index) => (
        <TweetCard key={index} {...tweet} />
      ))}
    </div>
  );
}

export default App;
