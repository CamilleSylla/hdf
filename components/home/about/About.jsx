import Section from "../../template/section/Section";
import SectionWidth from "../../template/sectionWidth/SectionWidth";
import Agrs from "../whyus/Args/Args";
import style from "./about.module.scss";



export default function About() {
  
  const About = () => {
    return (
      <article className={style.about}>
        <div className={style.container}>
          <h1>A Propos de HDF</h1>
          <p>
            {"Après un diagnostic, nous réalisons des devis de travaux par nos artisans locaux partenaire et nous nous occupons de toute les demandes de subventions.\n\n Afin de vous donner un reste à charge très attractif Nous vous facilitons votre transition énergétique dans chacune de ses étapes et permettons aux particuliers et aux professionnels d’économiser du temps, de l’argent et de l’énergie."}
          </p>
        </div>
      </article>
    );
  };
  
  return (
    <Agrs span="" title="A Propos" desc="Après un diagnostic, nous réalisons des devis de travaux par nos artisans
    locaux partenaire et nous nous occupons de toute les demandes de
    subventions.
    Afin de vous donner un reste à charge très attractif
    Nous vous facilitons votre transition énergétique dans chacune de ses
    étapes et permettons aux particuliers et aux professionnels d’économiser du
    temps, de l’argent et de l’énergie." index={3} imgSrc="/Logo.svg"/>
  );
}
