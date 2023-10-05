/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Ashutosh Thakur",
  title: "UI/UX Desinger",
  email: "Ashutosh.Thakur@studentambassadors.com",
  gitHub: "Ashutoshthakur27",
  instagram: "https://instagram.com/_thakur_ashutosh_?igshid=YmMyMTA2M2Y=",
  linkedIn: "https://www.linkedin.com/in/ashutosh-thakur27",
  medium: "",
  twitter: "https://x.com/Ashuthakur27?t=ZJ6A2r0daAC8JHBdEoN4ow&s=09",
  youTube: "https://youtube.com/@ashutoshthakur5617?si=OcTazLuW3x3jdE7y",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
