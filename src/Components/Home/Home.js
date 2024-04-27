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
                <Separator header="About" content={<div>Hi! I'm Reyven Rojas. Software Developer from Mariveles, Bataan, Philippines. A graduate of Bachelor of Science in Information Technology at Polytechnic University of the Philippines, currently having 2 years and 7 months working experience as a Software Developer. In developing a web based system I am using Asp.Net Core, Web API, C#, Blazor, Javascript ES6, jQuery, HTML5, CSS3, Bootstrap5, and I'm using SQL Database. Interms of accomplishment I already developed a web based system such as Payroll System, HRIS, Traceability/Inventory System, Barangay Information Management System, Employee Process Certification System, Canteen Surver System, Claiming System and more.</div>} />
            </div>

            <div className='div-home-skills'>
                <Separator header="Skills" content={
                                                    <div className="div-separator-skills">
                                                        
                                                        <div>
                                                            <div className="div-separator-content-title">Web Development</div>
                                                            <ul>
                                                                <li>ASP.Net Core</li>
                                                                <li>Web API</li>
                                                                <li>C#</li>
                                                                <li>Blazor</li>
                                                                <li>Javascript ES6</li>
                                                                <li>jQuery</li>
                                                                <li>React JS (Beginner)</li>
                                                                <li>HTML5</li>
                                                                <li>CSS3</li>
                                                                <li>Bootstrap5</li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <div className="div-separator-content-title">Windows Application</div>
                                                            <ul>
                                                                <li>C#</li>
                                                                <li>VB.Net</li>
                                                                <li>VB6 (Beginner)</li>
                                                                <li>VBA (Beginner)</li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <div className="div-separator-content-title">Relational Database</div>
                                                            <ul>
                                                                <li>Microsoft SQL Server</li>
                                                                <ul>
                                                                    <li>SQL Joins</li>
                                                                    <li>Sub Query (CTE)</li>
                                                                    <li>Store Procedure</li>
                                                                    <li>Views</li>
                                                                    <li>Functions</li>
                                                                    <li>Trigger</li>
                                                                    <li>Schema</li>
                                                                    <li>SQL Job</li>
                                                                </ul>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <div className="div-separator-content-title">Others</div>
                                                            <ul>
                                                                <li>Object Oriented Programming (OOP)</li>
                                                                <li>Solid Principles</li>
                                                                <li>Clean Architecture</li>
                                                                <li>Entity Framework (EF) Core</li>
                                                                <li>Dependency Injection</li>
                                                                <li>Command Query Responsibility (CQRS)</li>
                                                                <li>Knowledge with Lambda</li>
                                                                <li>Knowledge with LINQ</li>
                                                                <li>Crystal Report</li>
                                                                <li>Version Control (Git)</li>
                                                                <li>Agile | Scrum Methodologies</li>
                                                                <li>Jira</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                } />
            </div>
            <ScrollToTopButton />
        </div>
    );
}

export default Home;