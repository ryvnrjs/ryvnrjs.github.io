import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="div-links-container">
            <Link to="/" className='icon'><div className="div-myIcon"></div></Link>
            <div className="div-links-buttons">
                <Link to="/">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Skill">Skills</Link>
                <Link to="/Works">Works</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;