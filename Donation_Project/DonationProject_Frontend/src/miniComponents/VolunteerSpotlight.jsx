import React from "react";

const VolunteerSpotlight = ({ volunteer }) => {
  return (
    <div className="volunteer-spotlight">
      <img
        src={volunteer.image}
        alt={`${volunteer.name}'s profile`}
        className="volunteer-image"
      />
      <h2 className="volunteer-name">{volunteer.name}</h2>
      <p className="volunteer-story">{volunteer.story}</p>
    </div>
  );
};

const volunteerData = [
  {
    name: "John Doe",
    image: "/m1.jpg", // Replace with the actual image URL
    story:
      "As a dedicated volunteer, I’ve spent over 200 hours working with the homeless community. Every moment spent helping others has brought me joy and fulfillment. I believe that together, we can create a better world, one act of kindness at a time.",
  },
  {
    name: "Jane Smith",
    image: "/m2.jpg", // Replace with the actual image URL
    story:
      "Volunteering has transformed my life. I've learned so much from the people I've met and the stories I've heard. Each experience drives my passion to help those in need.",
  },
  {
    name: "Alice Johnson",
    image: "/m3.jpg", // Replace with the actual image URL
    story:
      "Every hour I spend volunteering is a reminder of the strength of community. Together, we are making strides toward a brighter future for everyone.",
  },
];

// Rendering the VolunteerSpotlight components
const VolunteerSpotlights = () => {
  return (
    <div className="app">
      <h1 className="v-head">Volunteer Spotlight</h1>
      {volunteerData.map((volunteer, index) => (
        <VolunteerSpotlight key={index} volunteer={volunteer} />
      ))}
    </div>
  );
};

export default VolunteerSpotlights;
