import FacebookIcon from '../../Media/SVG/FacebookIcon';
import GithubIcon from '../../Media/SVG/GithubIcon';
import LinkedinIcon from '../../Media/SVG/LinkedinIcon';
import Separator from '../../Separator';
import '../Home/Home.css';
import ScrollToTopButton from '../../ScrollToTopButton';
import AOS from 'aos';

const Home = () => {
    AOS.init();
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

            <div className='div-home-aboutme' data-aos="zoom-in">
                <Separator header="About" content={<div data-aos="flip-up"  data-aos-duration="1500">Hi! I'm Reyven Rojas. Software Developer from Mariveles, Bataan, Philippines. A graduate of Bachelor of Science in Information Technology at Polytechnic University of the Philippines, currently having 2 years and 7 months working experience as a Software Developer. In developing a web based system I am using Asp.Net Core, Web API, C#, Blazor, Javascript ES6, jQuery, HTML5, CSS3, Bootstrap5, and I'm using SQL Database. Interms of accomplishment I already developed a web based system such as Payroll System, HRIS, Traceability/Inventory System, Barangay Information Management System, Employee Process Certification System, Canteen Surver System, Claiming System and more.</div>} />
            </div>

            <div className="div-home-skills" data-aos="zoom-in">
                <Separator header="Skills" 
                                        content={
                                                    <div className="div-separator-skills">
                                                        
                                                        <div data-aos="zoom-in-right" data-aos-duration="1300">
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

                                                        <div data-aos="zoom-in" data-aos-duration="1300">
                                                            <div className="div-separator-content-title">Windows Application</div>
                                                            <ul>
                                                                <li>C#</li>
                                                                <li>VB.Net</li>
                                                                <li>VB6 (Beginner)</li>
                                                                <li>VBA (Beginner)</li>
                                                            </ul>
                                                        </div>

                                                        <div data-aos="zoom-in-down" data-aos-duration="1300">
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

                                                        <div data-aos="zoom-in-left" data-aos-duration="1300">
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

            <div className="div-home-works" data-aos="zoom-in">
                <Separator header={<label>Work <br /> Experience</label>} 

                    content={
                        <div className="div-separator-exp">

                            {/* VeritasPay Philippines Inc. */}
                            <div className="div-separator-exp-title">
                                <div data-aos="zoom-in-right" data-aos-duration="1500">Mid-Software Developer (Full Stack) <br />
                                    VeritasPay Philippines Inc., Pasig City
                                </div>
                                <div data-aos="zoom-in-left" data-aos-duration="1500">Aug 18, 2023 - Present</div>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1500">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">Payment Facilitator Web</div>
                                <ul>
                                    <li>Serve as intermediaries between merchants and payment networks such as visa, mastercard, unionpay, JCB, BancNet, AmericanExpress, WeChat Pay, Alipay, QR PH, Gcash, Grab Pay, Ecpay. Provide the technology infrastructure and services necessary for merchants to securely process credit card, debit card, and other electronic payments from customers.</li>
                                    <li>Manage onboarding of merchants, enabling them to start accepting payments quickly and easily.</li>
                                    <li>Provide merchants with access to payment gateway technology, which facilitates the secure transmission of transaction data between the merchant's website or app and the payment processor.</li>
                                    <li>Handle the settlement of funds from customer payments, deducting processing fees and transferring the remaining funds to merchants' bank accounts.</li>
                                    <li>Generate report such as SOA, chargebacks, reversal, approved, decline, voided transactions.</li>
                                </ul>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1000">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">Background Service (Web)</div>
                                <ul>
                                    <li>Manage and Set jobs of the other system as background jobs. These jobs can be simple methods or functions that perform specific operations, such as data processing, sending emails, generating reports, or performing periodic maintenance task.</li>
                                </ul>
                            </div>




                            {/* Minebea Mitsumi */}
                            <div className="div-separator-exp-title div-separator-exp-spacing" style={{ borderTop: "2px dashed", marginTop:"80px" }}>
                                <div data-aos="zoom-in-right" data-aos-duration="1000">Junior-Software Developer (Full Stack) <br />
                                    MinebeaMitsumi Philippines Inc., Mariveles, Bataan
                                </div>
                                <div data-aos="zoom-in-left" data-aos-duration="1000">Nov 16, 2021 – Aug 18, 2023</div>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1000">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">Payroll System (Web)</div>
                                <ul>
                                    <li>Compile employee data, including employee working hours and filed leaves from HRIS.</li>
                                    <li>Calculates employee wages based on various factors such as hourly rates, salaries, overtime rates, incentive, night differential, vacation leave with pay, sick leave with pay, emergency leave, birthday leave, wedding leave, maternity leave, paternity leave, and deductions for late, undertime, half day or whole day absent, loans, taxes and government deductions.</li>
                                    <li>Generate reports such as employees Pay slip, annual pag-ibig contribution, tax withholdings, and more.</li>
                                </ul>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1000">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">HRIS System (Web)</div>
                                <ul>
                                    <li>Storing and organizing employee information, including personal details, job history, skills, performance evaluations.</li>
                                    <li>Providing a portal where employees can access their personal information, submit time-off requests, file personal leaves, view personal payslip.</li>
                                    <li>Record employee work hours, including regular hours, overtime, and absences, often integrated with clock-in/clock-out systems.</li>
                                    <li>Generate reports such as COE, Manpower, Newly hired, Attrition Rate, and more.</li>
                                </ul>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1000">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">Employee Process Certification System (Web)</div>
                                <ul>
                                    <li>Employees are under go to examination test to determine their proficiency in the identified processes. This assessment involves Multiple, Enumeration, True or False exams.</li>
                                    <li>Certifications may have expiration dates or require periodic renewal to ensure that employees maintain their skills and knowledge up-to-date.</li>
                                    <li>Manage documentation of employee certifications, including details of the processes certified, dates of certification, and any renewal requirements.</li>
                                    <li>This system is connected to HRIS to track employee training records, certifications, and compliance with organizational requirements.</li>
                                    <li>Generate reports such as employee certificates and more.</li>
                                </ul>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1000">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">Traceability/Inventory System (Web)</div>
                                <ul>
                                    <li>Each product or component is assigned a unique identifier, such as a serial number, barcode, QR code. This identifier is used to track the item throughout its lifecycle.</li>
                                    <li>Gives information about the product's origin, manufacturing process, batch or lot number, expiration date, and other relevant details are captured and recorded at various points in the supply chain. This data may include supplier information, production records, quality control results, and shipping details.</li>
                                    <li>Track the product movements, allowing the users to trace the product's journey from its source to its destination (From warehouse to Finish Goods).</li>
                                    <li>Print barcode, QR code stickers that contains product information.</li>
                                </ul>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1000">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">Canteen Survey System (Web & Windows Form)</div>
                                <ul>
                                    <li>The system allows administrators to create customized surveys with questionnaires to gather feedback on specific aspects of the canteen experience. These questions may include ratings or scales for food quality, variety, freshness, cleanliness, staff friendliness, wait times, and overall satisfaction.</li>
                                    <li>The system collects responses from users and compiles the data to identify trends, patterns, and areas for improvement in the canteen operations. This analysis may involve aggregating responses, generating reports, and visualizing data using charts or graphs to present key findings.</li>
                                </ul>
                            </div>

                        </div>
                    } />
            </div>

            <div className="div-home-works" data-aos="zoom-in">
                <Separator header={<label>On The Job <br /> Training</label>} 

                    content={
                        <div className="div-separator-exp">

                            <div className="div-separator-exp-title">
                                <div data-aos="zoom-in-right" data-aos-duration="1000">Junior-Software Developer (Full Stack) <br />
                                    EN – SoftTech I.T. Solution Services, Mariveles, Bataan
                                </div>
                                <div data-aos="zoom-in-left" data-aos-duration="1000">Jan 11, 2021 – Oct 19, 2021</div>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1000">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">Developed a 24 "Barangay Information Management System" (Windows Form)</div>
                                <ul>
                                    <li>Count barangay population.</li>
                                    <li>Built-in barangay census.</li>
                                    <li>Automated printing of all barangay certificates.</li>
                                    <li>Generate Barangay population through charts.</li>
                                    <li>Generate Barangay ID.</li>
                                </ul>
                            </div>

                            <div className="div-separator-exp-spacing" data-aos="zoom-in" data-aos-duration="1000">
                                <div style={{ textTransform:"none" }} className="div-separator-content-title">Point of Sale System with Inventory System (Windows Form)</div>
                                <ul>
                                    <li>Managed the daily and monthly sales income.</li>
                                    <li>Monitoring of In and Out of items.</li>
                                    <li>Generate Pay slip.</li>
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