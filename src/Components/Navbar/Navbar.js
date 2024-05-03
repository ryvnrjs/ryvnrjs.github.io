import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
    const OnActiveButton = (event) => {
        event.target.classList.add('active-nav-btn');
      
        const siblings = Array.from(event.target.parentNode.children);
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove('active-nav-btn');
          }
        });

      };

    return (
        <div className="div-links-container">
            <Link onClick={() => window.location.href="/"} to="/" className='icon'><div className="div-myIcon"></div></Link>
            <div className="div-links-buttons">
                <Link className="active-nav-btn" onClick={OnActiveButton} to="/">Home</Link>
                <Link onClick={OnActiveButton} to="/AboutMe">About</Link>
                <Link onClick={OnActiveButton} to="/Skill">Skills</Link>
                <Link onClick={OnActiveButton} to="/Works">Works</Link>
                <Link onClick={OnActiveButton} to="/Projects">Projects</Link>
                <Link onClick={OnActiveButton} to="/Contact">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;