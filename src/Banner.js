import React from 'react';
import './Banner.css';

function Banner() {
    const contactUs=()=>{
        console.log("contacted");
    }
    return (
        <div className="banner__img">
            <img src="https://i2.wp.com/gazette.mun.ca/wp-content/uploads/2019/01/Research-Health-funding-announcement-Featured-image-1200x600.jpg?quality=100&ssl=1" className="image" alt="" />
            <h3>Want to See your Ads on Google </h3>
            <button ><a href="https://google.com/">Contact Us</a></button>
        </div>
    )
}

export default Banner
