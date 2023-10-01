import About from "./about";
import Contact from "./contact";
import Service from "./service";
import { Link } from "react-router-dom/cjs/react-router-dom";


const Home = () => {
    return (
    <div className="portfolio">
        <div className="home">
        <section id="home">

            <div className="content">
               <p id="paragraph_one">Hello,</p>
               <h2 id="paragraph_two">I'm Emmanuel</h2>
               <p id="paragraph_three">Web-Developer</p>
               <p id="paragraph_four">From Nigeria</p>
               <button className="hire_btn"><Link to = '/contact'>Hire Me</Link></button>
            </div>
        </section>

            <div className="explore">
                <h1>EXPLORE MORE</h1>
                <p className="arrow_down">&darr;</p>
            </div>
        </div>
            <About />
            <Service />
            <Contact />
     </div>
    );
}
 
export default Home;