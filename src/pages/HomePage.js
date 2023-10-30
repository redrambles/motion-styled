import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { heroOne, heroTwo, heroThree, heroFour } from "../data/HeroData";
import { Heading } from "../globalStyles";
import Content from "../components/Content/Content";
import { Features } from "../components/Features";
import { Clients } from "../components/Clients";
import { Footer } from "../components/Footer";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove the '#' from the hash to get the actual ID.
    const elementId = location.hash.replace("#", "");

    // If there is an elementId, attempt to find the corresponding element.
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Heading id='projects'>Our Projects</Heading>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Content {...heroFour} />
      <Footer />
    </>
  );
};

export default HomePage;
