import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
      <div className="App">
       <h1>Home</h1>

       <Link to ="/about">About</Link>
       <Link to ="/yana">Yana</Link>
      </div>
    );
  }
  
  export default Home;