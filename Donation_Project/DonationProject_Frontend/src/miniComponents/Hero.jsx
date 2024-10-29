import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
          Join us in making a real difference! As a volunteer, your time and
          efforts can bring hope and support to those who need it most. Whether
          it's providing a helping hand, sharing your skills, or simply offering
          your compassion, every contribution matters. Together, we can create
          lasting change in the lives of people struggling with hunger,
          homelessness, and other challenges. Volunteering is not just about
          giving – it's about connecting, growing, and being part of a community
          that cares. Become a volunteer today and help us build a brighter
          future for everyone.
        </p>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="" />
      </div>
    </section>
  );
}

export default Hero;
