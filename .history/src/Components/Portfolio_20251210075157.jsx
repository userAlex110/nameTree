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
import image from "../images/oilseed-rape.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things The Louver Taught Me About Digital Marketing",
    description:
      "Collaboration to create a beginner friendly guide to solving common DevOps problems. Scope the project, identify the MVP, and build a prototype.",
    url: "https://dev.to/azure/10-things-the-louver-taught-me-about-digital-marketing-5620",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Contoso Real Estate",
    description:
      "The Contoso Real Estate reference app shows how to build enterprise-grade microservices-based cloud-native apps.",
    url: "https://github.com/Azure-Samples/contoso-real-estate",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* 图片容器：调整最大宽度，并确保图片自适应 */}
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px", // 可选：加一点圆角更现代
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // 可选：加一点阴影增加层次感
            }}
            alt={imageAltText}
          />
        </div>
        {/* 内容容器：增加左边距，确保不紧贴图片 */}
        <div className="container" style={{ maxWidth: "50%", alignSelf: "center", marginLeft: "4rem" }}>
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
