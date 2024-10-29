import React from "react";
import Hero from "../miniComponents/Hero";
import Members from "../miniComponents/Members";
import Qualities from "../miniComponents/Qualities";
import WhyToDonate from "../miniComponents/WhytoDonate";

function Home() {
  return (
    <>
      <Hero />
      <WhyToDonate />
      {/* <Members /> */}
      <Qualities />
    </>
  );
}

export default Home;
