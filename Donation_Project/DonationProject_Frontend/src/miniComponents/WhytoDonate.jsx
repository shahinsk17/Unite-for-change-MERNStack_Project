import React from "react";
import { Link } from "react-router-dom";

const WhyToDonate = () => {
  return (
    <div className="why-to-donate">
      {/* Text Section above video */}
      <div className="text-section">
        <h2 className="p-head">Poverty is more than you think</h2>
        <p>
          Millions of people around the world are suffering from hunger,
          homelessness, and lack of basic necessities.
        </p>
        <p>
          Your small donation can make a big difference. Even ₹1 can help save a
          life!
        </p>
      </div>
      {/* Section with background video  C:\Users\DELL\Desktop\Donation_Project\DonationProject_Frontend\src\Unite_to_End_Poverty.mp4*/}
      <div className="video-section">
        <video className="background-video" autoPlay loop controls>
          <source src="/EndPoverty.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Images Section */}
      <div className="image-gallery">
        <img src="/image1.jpg" alt="Image of poverty" />
        <img src="/image2.jpg" alt="Homeless child" />
        <img src="/image3.jpg" alt="People in need" />
      </div>
      {/* Call to action */}
      <br />
      <br />
      <Link to={"/donate"} className="btn">
        Donate Now
      </Link>{" "}
    </div>
  );
};

export default WhyToDonate;
