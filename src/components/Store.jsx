import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/4.jpeg';
import img2 from '../assets/5..jpeg';
import img3 from '../assets/6..jpeg';
import img4 from '../assets/7.';
const Services = () => {
  return (
    <div className='Store'>
    
    <Carousel infiniteLoop autoPlay showStatus = {false} showArrows = {false} interval={1000} showThumbs = {false}>

        <div>
            <img src ={img1} alt = "item1"></img>
            <Link to = "/hand-towels">
            <p className='legend'>Hand Towels</p>
            </Link>
        </div>
        <div>
            <img src ={img2} alt = "item2"></img>
            <Link to = "/towels-set">
            <p className='legend'>Towels Set</p>
            </Link>
        </div>
        <div>
            <img src ={img3} alt = "item3"></img>
            <Link to = "/hankies">
            <p className='legend'>Hankies</p>
            </Link>
        </div>
        <div>
            <img src ={img4} alt = "item4"></img>
            <Link to = "/premium-towels">
            <p className='legend'>Premium Towels</p>
            </Link>
        </div>
    </Carousel>
    </div>
  )
}

export default Services