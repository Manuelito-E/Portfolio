
const Contact = () => {
    return (
        <div>
        <div className="contact">
            <h1>Contact <span>Me</span></h1>
            <div className="contact_style">
            <div className="address">
            <div className="items">
                <span></span>
                <h5>Address</h5>
                <p>Orumba North</p>
                <p>Ananmbra State</p>
            </div>
            <div className="items">
                <span></span>
                <h5>Phone</h5>
                <p>+234-706-506-7190</p>
                <p>+234-705-713-3286</p>
            </div>
            <div className="items">
                <span></span>
                <h5>Email</h5>
                <p>okekee191@gmail.com</p>
                <p>okekeemmanuel532@gmail.com</p>
                
                <div className="last_btn">
                    <button type="submit"><a href = "#home">Back to Top</a></button>
                    </div>            
            </div>
        </div>
            <div className="form">
                <form action="#">
                    <br />
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" placeholder="Enter Your Name.."/><br /><br />

                    <label htmlFor="Email">Email:</label><br />
                    <input type="email" name="" id="" placeholder="Enter Your Email..."/><br /><br />

                    <label htmlFor="textarea">Message:</label><br />
                    <textarea name="textarea" cols="30" rows="10" placeholder="Enter Your Message..."></textarea><br />
                    
                    <div className="last_btn">
                    <button type="submit">Send Now</button>
                    </div>
                </form>
            </div>
        </div>
        
        </div>
        </div>
    );
}
 
export default Contact;