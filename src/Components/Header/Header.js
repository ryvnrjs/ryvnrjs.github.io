import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className="div-container">
            <Router>
                <Navbar />

                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/AboutMe" element={<AboutMe/>} />
                </Routes>

            </Router>
        </div>
    );
}

export default Header;