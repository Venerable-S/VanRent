import React from "react";
import about_img from "../Images/scene2.jpg"

export default function About() {
  return(
    <div className="aboutus-container">
      <div className="aboutus-img-container">
        <img src={about_img} alt="img" />
      </div>
      <div className="aboutus-content-container">
        <h1>
          Don't squeeze in a sedan when you could relax in a van.
        </h1>
        <div>
          <p>
          Our mission is to enliven your road trip with the perfect travel van rental.
          </p>
          <p>
            Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          </p>
          <p>
          (Hitch costs extra)
          </p>
        </div>
        <p>        
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="add-container">
          <div>
            <h4>
              Your destination is waiting
            </h4>
            <h4>
              Your Van is ready
            </h4>
          </div>
          <button className="explore-btn">
            Explore our vans
          </button>
        </div>
      </div>
    </div>
    
  )
}