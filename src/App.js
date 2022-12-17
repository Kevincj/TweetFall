import logo from './logo.svg';
import React from 'react';
import { ReactPhotoCollage } from "react-photo-collage";
import './App.css';
import { useEffect } from 'react';

function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

const setting = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: 'https://pbs.twimg.com/media/FkGrxP6XgAAxTbm?format=jpg&name=large' },
    { source: 'https://pbs.twimg.com/media/FkGrxP6XgAAxTbm?format=jpg&name=large' },
    { source: 'https://pbs.twimg.com/media/FkGrxP6XgAAxTbm?format=jpg&name=large' },
    { source: 'https://pbs.twimg.com/media/FkGrxP6XgAAxTbm?format=jpg&name=large' },
    { source: 'https://pbs.twimg.com/media/FkGrxP6XgAAxTbm?format=jpg&name=large' },
    { source: 'https://pbs.twimg.com/media/FkGrxP6XgAAxTbm?format=jpg&name=large' },
  ],
  showNumOfRemainingPhotos: true
};

function App() {
  useEffect(()=>{fetch("http://localhost:3001/").then(res => res.json()).then(data => console.log(data));}, []);

  return (
    <div>
      <ReactPhotoCollage {...setting}/>
    </div>
  );
}

export default App;