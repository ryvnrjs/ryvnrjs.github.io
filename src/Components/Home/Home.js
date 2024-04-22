import '../Home/Home.css';

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
                </div>
                <div className='mypicture'></div>
            </div>

            <div className='div-home-aboutme'>
                Hi, my name is Reyven P. Rojas 27 years old, I lived in Mariveles, Bataan Philippines 2105, I've studied Bachelor of Science in Information Technology at Polytechnic University of the Philippines. I have 2 years and 7 months working experienced as a Software Developer. And to develop a web based system I am using Asp.Net Core, Web API, C#, Blazor, Javascript ES6, jQuery, HTML5, CSS3, Bootrap5, and I'm using SQL Database.
            </div>
        </div>
    );
}

export default Home;