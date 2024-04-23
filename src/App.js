import './App.css';
import Header from './Components/Header/Header';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  
  return (
    // <div>
    //   <div className="area" >
    //     <ul className="circles">
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //     </ul>
    //   </div >
    //   <Header />
    // </div>
    <Header />
  );
}

export default App;
