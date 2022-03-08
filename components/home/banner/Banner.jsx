import style from "./banner.module.scss";
import SectionWidth from "../../template/sectionWidth/SectionWidth";
import Button from "../../template/button/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

export default function Banner() {

  const startRef = useRef()
  const topRef = useRef()
  const headerRef = useRef()
  const illustration = useRef()
  const Top = () => {
    return (
      <div ref={topRef} className={style.top}>
        <SectionWidth>
          <div ref={headerRef} className={style.header}>
            <h1>Vous faire accompagner par l'expert de l'habitat en France</h1>
            <p>
              HDF une entreprise des Haut-de-France qui est spécialisée dans le
              conseil en rénovation énergétique pour les professionnels
              et les particuliers.
            </p>
            <Button title="Contact"/>
          </div>
        </SectionWidth>
        <img ref={illustration} src="/assets/illustrations/banner.svg" alt="HDF - Banniere" />
      </div>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
    const scrollDivs = gsap.utils.toArray(topRef.current);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: startRef.current,
        start: "top bottom",
        end: "bottom top",
      }
    });
    tl.from(topRef.current, {
      background: '#F2F2F2',
      duration: 1
    })
    tl.from(illustration.current, {
      y : "100%",
      autoAlpha: 0,
      opacity: 0,
      duration: 1
    })
    tl.from(headerRef.current, {
      x : "-50%",
      autoAlpha: 0,
      opacity: 0,
      duration: .5
    },"-=.5")

    
  }, [])

  return (
    <section ref={startRef} className={style.banner}>
      <Top />
    </section>
  );
}
