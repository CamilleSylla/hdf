import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect, useRef } from "react";
import SectionWidth from "../../template/sectionWidth/SectionWidth";
import style from "./service.module.scss";

export default function Services() {
  const startAnimate = useRef();
  const iconsAnimate = useRef();

  const Icons = ({ imgSrc, title }) => {
    return (
      <article ref={iconsAnimate} className={style.card}>
        <div className={style.icon}>
          <img src={imgSrc} />
        </div>
        <h1>{title}</h1>
      </article>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: startAnimate.current,
        start: "top+=20% bottom",
        end: "bottom-=20% top",
        markers : true,
      },
    });
    tl.from("article", {
      x: "-50%",
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <div ref={startAnimate} className={style.wrapper}>
      <SectionWidth>
        <h1
          style={{
            textAlign: "center",
            padding: "0 0 5vh 0",
            color: "var(--primary-color)",
          }}
        >
          {"Nos domaines d'intervention"}
        </h1>
        <div className={style.container}>
          <Icons imgSrc="/assets/icons/wall.svg" title="isolation" />
          <Icons imgSrc="/assets/icons/chauf.svg" title="Chauffage" />
          <Icons imgSrc="/assets/icons/panneau.svg" title="solaire" />
          <Icons imgSrc="/assets/icons/wind.svg" title="ventilation" />
        </div>
      </SectionWidth>
    </div>
  );
}
