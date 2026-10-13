import React from 'react'
import "../styles/home.scss";
// import vg from "../assets/1.png"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className = "Home">
        <main>
            <h1>Online Towel Store</h1>
            <p>Your daily Go-To store</p>
        </main>
    </div>

    <div className="Home2">
        {/* <img src = {vg} alt = "Graphics" /> */}
        <div>
            <h2><p>Genuine & Trustworthy</p></h2>
        </div>
    </div>

    <div className="Home3" id="about">
      <div>
      <h1>ABOUT</h1>
      <p>This is an online store for the Handloom stuffs.
      From the one and only trusted Ahuja Towels and Co.</p>
    </div>
    </div>

    <div className="Home4" id="brands">
      <div>
        <h1>BRANDS</h1>

        <article>

          <div style={{animationDelay : "0.3s"}}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
          </div>
          
          <div style={{animationDelay : "0.5s"}}>
          <AiFillGoogleCircle />
          <p>Google</p>
          </div>

          <div style={{animationDelay : "0.8s"}}>
          <AiFillYoutube />
          <p>Youtube</p>
          </div>
          
          <div style={{animationDelay : "1s"}}>
          <AiFillInstagram />
          <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home;