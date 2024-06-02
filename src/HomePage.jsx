
import Navbar from "../src/Navbar.jsx"
import Main from "../src/Main.jsx"
import './App.css';
import Counter from "../src/counter.jsx"
import Fastest from "./Fastest.jsx";
import Scale from "../src/Scale.jsx" 
import Decentralized from "../src/Decentralized.jsx";
import Getsol from "../src//Getsol.jsx";


function App() {
 

  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <Counter/>
        <Fastest />
        <Scale />
        <Decentralized /> 
       <Getsol />
   </div>
     

    
  );
}

export default App;
