import style from "./args.module.scss";
import Section from "../../../template/section/Section";
import SectionWidth from "../../../template/sectionWidth/SectionWidth";

export default function Agrs({ title, imgSrc, desc, index }) {
  const Img = () => {
    return <img src={`/assets/illustrations${imgSrc}`} />;
  };

  const Content = () => {
    return (
      <article className={style.content}>
          <span>Pourquoi HDF ?</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </article>
    );
  };
  function numIsPair(n) {
    return n & 1 ? false : true;
  }

  return (
    <Section>
      <SectionWidth>
        <div className={style.wrapper}>
          {numIsPair(index) ? <Img /> : <Content />}
          {numIsPair(index) ? <Content /> : <Img />}
        </div>
      </SectionWidth>
    </Section>
  );
}
