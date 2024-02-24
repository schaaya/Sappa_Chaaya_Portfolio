import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>Backend Developer</h3> */}
              <p>
              As a seasoned backend developer with a passion for system architecture, language internals, and distributed systems, I bring years of hands-on experience to the table. Currently pursuing my Master's in Computer Science from the University of Michigan, specializing in software engineering, databases, and information retrieval, I've had the opportunity to delve deeper into these areas while honing my skills. From tackling critical backend challenges at Reliance Jio to sharing insights as an educator at the University of Michigan, each role has deepened my love for building robust, scalable systems.
              <br/><br/>
              But what sets me apart is my insatiable curiosity for engineering details. I'm constantly diving into the nitty-gritty, putting my learning into practice by building side projects and implementing research papers. I'm also an avid reader, often immersing myself in engineering books to stay abreast of the latest developments in the field.
              <br/><br/>
              Outside of the technical realm, I indulge my passion for art through digital illustrations in my free time. Balancing the intricacies of backend development with the creativity of digital art allows me to bring a unique perspective to every project I undertake.

              What drives me in both backend and frontend development is the opportunity to make a meaningful impact on user experiences. I'm committed to delivering high-quality solutions that push the boundaries of what's possible in software development, whether on the backend or frontend.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
);
};