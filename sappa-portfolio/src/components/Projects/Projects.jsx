import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default slidesToShow value

  useEffect(() => {
    // Update slidesToShow based on screen width
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 830) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow(); // Call initially

    // Event listener for window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Adjusted slidesToShow based on screen width
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1500,
    // centerMode: slidesToShow === 1, // Enable center mode if slidesToShow is 1
    // centerPadding: slidesToShow === 1 ? "25%" : undefined, // Adjust center padding as needed
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <Slider {...settings}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </Slider>
      </div>
    </section>
  );
};
