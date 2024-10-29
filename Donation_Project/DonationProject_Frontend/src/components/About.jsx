import React from "react";
import VolunteerSpotlight from "../miniComponents/VolunteerSpotlight";

function About() {
  return (
    <div className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
            Our journey began with a mission to address poverty and homelessness
            through the power of community volunteering. Dedicated volunteers
            work tirelessly to provide essential resources and support to those
            in need, showcasing the profound impact of compassion. Each act of
            kindness transforms lives, proving that even small contributions
            matter. Together, we foster transparency, community development, and
            measurable impact, inspiring others to join our cause. We invite you
            to be part of this movement—whether through volunteering or
            donations—helping us create lasting change and empower individuals
            to thrive.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImage" />
        </div>
      </div>

      <VolunteerSpotlight />
    </div>
  );
}

export default About;
