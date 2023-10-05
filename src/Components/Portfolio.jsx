/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pic three.jpeg";

const imageAltText = "this is a background image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My git Website",
    description:
      "This is my git learning website where I write about my first  experience and learning in the tech industry.",
    url: "https://ashutoshthakur27.github.io/MLSC-Learning-git/",
  },
  {
    title: "Youtube Channel",
    description:
      "In this vedio I have explained how I can contribute more in Community as a lead.",
    url: "https://youtube.com/@ashutoshthakur5617?si=OcTazLuW3x3jdE7y",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "file:///C:/Users/at811/AppData/Local/Microsoft/Windows/INetCache/IE/5YRX349E/White%20and%20Beige%20Minimalist%20Designer%20Professional%20Cv%20Resume%20(1)[1].pdff",
  },
  {
    title: "my Linedin Account",
    description:
      "here I post my all the achivement which I have earn till date.",
    url: "https://www.linkedin.com/in/ashutosh-thakur27",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
