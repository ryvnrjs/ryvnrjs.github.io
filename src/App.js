import './App.css';
import Header from './Components/Header/Header';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <Header />
  );
}

export default App;
