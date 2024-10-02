import React from 'react';
import Image from "../components/images/background-logo.png";
const Home = () => {
  return (
   <div class="home-container">
    <div class="home-image">
        <img src={Image} alt="" srcset="" />
    </div>
    <div class="home-welcome">
       <h2> Welcome to our website we are here for you<br /> THANK YOU !</h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem temporibus labore, iure vel cupiditate necessitatibus ea perferendis architecto nostrum aspernatur odit ut vero placeat doloribus impedit magni fugit natus dolor.</p>
       <div className="home-button">
       <button>Join P7YT</button>
       <button>Watch Videos Stay  Out</button>
     </div>
    </div>
    <hr />
   </div>
  );
}
export default Home;
