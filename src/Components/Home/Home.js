import FacebookIcon from '../../Media/SVG/FacebookIcon';
import GithubIcon from '../../Media/SVG/GithubIcon';
import LinkedinIcon from '../../Media/SVG/LinkedinIcon';
import Separator from '../../Separator';
import '../Home/Home.css';
import ScrollToTopButton from '../../ScrollToTopButton';


const Home = () => {
    return (
        <div className="div-home-wrapper">
            <div className="div-home-container">
                <div className="div-intro">
                    <label>Hi,</label>
                    <label>I'm <span>Reyven</span></label>
                    <label>Full Stack Software Developer</label>
                    <p id="intro">I specialize in creating and maintaining websites using the latest technologies. My expertise includes MVC architecture, object-oriented programming, and experience in both front-end and back-end development.</p>
                    <div className="div-intro-actions">
                        <button>Contact Me</button>
                        <button>Download CV</button>
                    </div>
                    <div className="div-intro-social-media-icon">
                        <LinkedinIcon />
                        <FacebookIcon />
                        <GithubIcon />
                    </div>
                </div>
                <div className='mypicture'></div>
            </div>

            <div className='div-home-aboutme'>
                <Separator header="About Me" content="Hi! I'm Reyven Rojas. Software Developer from Mariveles, Bataan, Philippines. A graduate of Bachelor of Science in Information Technology at Polytechnic University of the Philippines, currently having 2 years and 7 months working experience as a Software Developer. In developing a web based system I am using Asp.Net Core, Web API, C#, Blazor, Javascript ES6, jQuery, HTML5, CSS3, Bootstrap5, and I'm using SQL Database. Interms of accomplishment I already developed a web based system such as Payroll System, HRIS, Traceability/Inventory System, Barangay Information Management System, Employee Process Certification System, Canteen Surver System, Claiming System and more." />
            </div>
            <ScrollToTopButton />
        </div>
    );
}

export default Home;