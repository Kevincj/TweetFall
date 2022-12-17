
import React from 'react';
// import { ReactPhotoCollage } from "react-photo-collage";
import './App.css';
import { useEffect } from 'react';
import configData from "./config.json";



function App() {
  useEffect(()=>{fetch(configData.SERVER_URL).then(res => res.json()).then(res=>res.data).then(data => console.log(data.flatMap(d=> d.media.map(child => Object.assign({username: d.username}, child)))));}, []);

  return (
    <div>
      {/* <ReactPhotoCollage {...setting}/> */}
    </div>
  );
}

export default App;