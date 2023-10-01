import { Link } from "react-router-dom/cjs/react-router-dom";


const About = () => {
    return (
        <div className="about_skill">
             <h1 id="about">ABOUT <span id="me">ME</span></h1>

             <h3 id="info">Personal info</h3>
            <div className="about">
               
                <div>
                    <p className="name_tag">Full Name: <span className="tag">Okeke Emmanuel</span></p>
                    <p className="name_tag">Age: <span className="tag">22 years</span></p> 
                    <p className="name_tag">Email: <span className="tag">okekee191@gmail.com</span></p> 
                 <p className="name_tag">Phone: <span className="tag">+234 706 506 7190</span></p>  
                </div>
                <div>
                    <p className="name_tag">Experience: <span className="tag">1 year</span></p> 
                    <p className="name_tag">Address: <span className="tag">Anambra State, Nigeria</span></p> 
                    <p className="name_tag">Language: <span className="tag">Igbo, English</span></p> 
                    <p className="name_tag">Freelance: <span className="tag">Available</span></p> 
                </div>
            </div>
            <div className="skill">

                  <h3 id="skill">My Skills</h3>
                <div className="skill_style">
                <div className="progress">
                    <div>
                        <h5>HTML</h5>
                    <progress value="95" max= '100'></progress>
                    </div>
                    <div>
                        <h5>CSS</h5>
                    <progress value="90" max= '100'></progress>
                    </div>
                    <div>
                        <h5>JavaScript</h5>
                    <progress value="70" max= '100'></progress>
                    </div>
                
                </div>
                   <div className="progress">
                         <div>
                             <h5>Git</h5>
                         <progress value="96" max= '100'></progress>
                         </div>
                         <div>
                             <h5>Tailwind CSS</h5>
                         <progress value="90" max= '100'></progress>
                         </div>
                         <div>
                             <h5>React.js</h5>
                         <progress value="80" max= '100'></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="return">
            <button id="return"><Link to = "/">&uarr;</Link></button>
            </div>
        </div>
    );
}
 
export default About;