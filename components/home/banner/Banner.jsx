import style from "./banner.module.scss";
import SectionWidth from "../../template/sectionWidth/SectionWidth";
import Button from "../../template/button/Button";

export default function Banner() {
  const Top = () => {
    return (
      <div className={style.top}>
        <SectionWidth>
          <div className={style.header}>
            <h1>Vous faire accompagner par l'expert de l'habitat en France</h1>
            <p>
              HDF une entreprise des Haut-de-France qui est spécialisée dans le
              conseil en rénovation énergétique pour les professionnels
              et les particuliers.
            </p>
            <Button title="Nos Services"/>
          </div>
        </SectionWidth>
        <img src="/assets/illustrations/banner.svg" alt="HDF - Banniere" />
      </div>
    );
  };

  return (
    <section className={style.banner}>
      <Top />
    </section>
  );
}
