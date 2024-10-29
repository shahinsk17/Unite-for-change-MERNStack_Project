import React from "react";

function Qualities() {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        " Community development focuses on improving the quality of life for individuals and families within the community. Our approach involves empowering residents through skills training, education, and resources that promote self-sufficiency. By collaborating with community members and local organizations, we create sustainable solutions that address the root causes of poverty and enhance overall well-being. This commitment to community development strengthens relationships and fosters a sense of belonging among residents.",
    },
    {
      id: 2,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        " Impact measurement involves assessing the effectiveness of our programs and initiatives. We utilize various metrics and feedback mechanisms to evaluate how our efforts translate into real change in the community. By measuring our impact, we can identify areas for improvement, celebrate successes, and demonstrate accountability to our stakeholders. This data-driven approach not only helps us refine our strategies but also inspires confidence in our supporters, showcasing the tangible results of their contributions.",
    },
    {
      id: 3,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        " Transparency is the cornerstone of trust in any organization. We prioritize open communication about our processes, decisions, and the allocation of resources. By being transparent about our goals and activities, we foster accountability and build trust within the community. This openness encourages more individuals to engage with our cause, ensuring that our volunteers and donors feel informed and valued.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>What We Stand For</h2>
        <div className="container">
          {qualities.map((e) => (
            <div className="card" key={e.id}>
              <div className="img-wrapper">
                <img src={e.image} alt={e.title} className="q-img" />
              </div>
              <div className="content">
                <p className="title">{e.title}</p>
                <p className="description">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Qualities;
