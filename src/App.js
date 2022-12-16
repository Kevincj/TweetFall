import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  fetch("http://localhost:3001/").then(res => res.json()).then(data => console.log(data));

  return (
    <div>
      <Hello world="World" />
    </div>
  );
}

export default App;
