import React from 'react';
import Image from "../components/images/background-logo.png";
const Home = () => {
  return (
   <div class="home-container">
    <div class="home-image">
        <img src={Image} alt="" srcset="" />
        <div class="contact-us-inbox">
           <h2>Contact Us Inbox</h2>
            <p>Email:📩<a href='https://mail.google.com/mail/u/0/#inbox'> pprovideryouthtalents@gmail.com</a></p>
            <p>Phone: 📞 +250791855396</p>
            <p>Address: Rukoko, Rubavu, Rwanda</p>
            <div class="video-youtube">
              <iframe src="https://www.youtube.com/embed/VdeaV0dV3J4?si=bBC_eycklQ1DrRCq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <div class="home-welcome">
       <h2> Welcome to our website we are here for you<br /> THANK YOU !</h2>
       <p>Hi everyone! We are P7 Provider Youth Talents  - A group of young and multi talented youth from Rwanda.</p>

<h2>OUR MISSION:</h2>
<p className="our">
  "To harness the collective talents of individuals to create transformative solutions and opportunities that uplift and empower communities, fosteringa culture of collaboration, empathy, and encourage confidence, optimism, and happiness.."
</p>
 <h2>OUR VISION:</h2>
 <p className="our">
"Our vision is to cultivate a global ecosystem where the power of talent is leveraged to address societal challenges, break down barriers, and create a more equitable and future where every individual has the opportunity to thrive, supported by a network of compassionate and skilled individuals dedicated to making a prosperous world for all. We envision a different"

We also support children's education and social well being, utilizing their talents..
</p>
       <div className="home-button">
       <button>Join P7YT</button>
       <button>Watch Videos Stay  Out</button>
     </div>
     <div class="contact-us">
     <h2>Contact Us</h2>
     <div class="form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Phone Number" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Submit</button>
 
            </div>
            </div>
    </div>
   </div>
  );
}
export default Home;
