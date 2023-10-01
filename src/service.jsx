import { Link } from "react-router-dom/cjs/react-router-dom";


const Service = () => {
    return ( 
        <div className="service">
                <h1>MY <span>Services</span></h1>
            <div className="service_row1">
                    <div className="card">
                        <h3>Web Development</h3>
                        <p>"Crafting dynamic web solutions, I transform ideas into captivating online experiences through cutting-edge development."</p>
                        <button className="read_more"><Link to = "#">Read More</Link></button>
                    </div>
                    <div className="card">
                        <h3>Web Design</h3>
                        <p>"Crafting captivating web designs, I blend aesthetics and usability to create visually stunning and user-friendly websites."</p>
                        <button className="read_more"><Link to = "#">Read More</Link></button>
                    </div>   
                    <div className="card">
                        <h3>Digital Marketing</h3>
                        <p>"Elevating brands with data-driven digital marketing strategies that drive growth and engagement in the digital world."</p>
                        <button className="read_more"><Link to = "#">Read More</Link></button>
                    </div> 
                    <div className="card">
                        <h3>Graphic Design</h3>
                        <p>"Designing visual narratives that captivate, communicate, and inspire with creativity and precision in every detail."</p>
                        <button className="read_more"><Link to = "#">Read More</Link></button>
                    </div> 
            </div>
            <div className="service_row2">
                    <div className="card_2">
                        <h3>Seo Marketing </h3>
                        <p>"Boosting online visibility and traffic through strategic SEO marketing to elevate your digital presence and success."</p>
                        <button className="read_more"><Link to = "#">Read More</Link></button>
                    </div> 
                    <div className="card_2">
                        <h3>Freelancing</h3>
                        <p>"Navigating the freelance world, I offer expertise and flexibility to meet diverse creative and technical needs."</p>
                        <button className="read_more"><Link to = "#">Read More</Link></button>
                    </div> 
            </div>
            <div className="return">
               <button id="return"><Link to = "/">&uarr;</Link></button>
            </div>
        </div>
    );
}
 
export default Service;