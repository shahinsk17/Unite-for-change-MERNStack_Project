import React from "react";

function Members() {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Shahin",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Anjali",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Shruti",
    },

    {
      id: 5,
      image: "/m5.jpg",
      title: "Sanjana",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Meenal",
    },

    {
      id: 7,
      image: "/m7.jpg",
      title: "Meenal",
    },
  ];

  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">Members</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quae sapiente cupiditate qui fugiat ratione accusamus animi in ab
              officia! Lorem ipsum dolor
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Members;
