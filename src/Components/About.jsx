/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mosaic.svg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Saliendo de mi zona de confort por fin decidí empezar a aprender lo que me gusta... la informática y la programación.";
const description2 =
  "Primero terminé el CFGM de Sistemas Microinformáticos y Redes, seguidamente el CFGS de Desarrollo de Aplicaciones Web.";
const description3 = 
  "Tambien he comenzado a explorar el Análisis de Datos y todo lo que lo rodea.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Java", "Spring", "JavaScript", "PHP", "JQuery", "SQL", "HTML", "CSS"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Actualmente me encuentro realizando las practicas del Ciclo Formativo en donde estoy profundizando en Java, Spring y SQL.";

const emp = "NTT Data";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <p className="large">{description2}</p>
        <p className="large">{description3}</p>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>Actualmente me encuentro realizando las practicas del Ciclo Formativo en <b>{emp}</b> donde estoy profundizando en Java, Spring y SQL.</p>
        <hr />
        <p>Skills Desarrollo Web:</p>
        <ul
          style={{
            textAlign: "center",
            listStyle: "none",
            columns: 3,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
