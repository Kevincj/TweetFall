import React from "react";
// import { ReactPhotoCollage } from "react-photo-collage";
import "./App.css";
import { useEffect, useState } from "react";
import configData from "./config.json";
import TweetCard from "./components/Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((tweets) => tweets.filter((tweet) => tweet.hasOwnProperty("media")))
      .then((tweets) =>
        tweets.flatMap((tweet) =>
          tweet.media.map((child) =>
            Object.assign(
              {
                author: tweet.author,
                createAt: tweet.createAt,
              },
              child
            )
          )
        )
      )
      .then((data) => setTweets(data));
  }, []);
  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 700: 2, 1050: 3, 1400: 4 }}
      >
        <Masonry>
          {tweets.map((tweet, index) => (
            <TweetCard key={index} {...tweet} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}

export default App;
