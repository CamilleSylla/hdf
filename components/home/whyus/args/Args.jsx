import style from "./args.module.scss";
import Section from "../../../template/section/Section";
import SectionWidth from "../../../template/sectionWidth/SectionWidth";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export default function Agrs({ title,span, imgSrc, desc, index }) {

  const animateText = useRef()

  const Img = () => {
    return <img src={`/assets/illustrations${imgSrc}`} />;
  };

  const Content = () => {
    return (
      <article  className={style.content}>
          <span>{span}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </article>
    );
  };
  function numIsPair(n) {
    return n & 1 ? false : true;
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const scrollDivs = gsap.utils.toArray(animateText.current);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animateText.current,
        start: "top+=20% bottom",
        end: "bottom-=20% top",
        scrub: .5
      }
    });
    scrollDivs.forEach((div, i) => {
      tl.from(div, {
        autoAlpha: 0,
        y: 50
      });
      // just get the <p> elements inside this <div>
      // tl.to(gsap.utils.toArray("h1", div).concat(p), {
      //   autoAlpha: 0,
      //   y: 50,
      //   stagger: 0.2,
      //   ease: "power1.in"
      // });
      let p = gsap.utils.toArray("p", div);
      tl.from(p, {
        autoAlpha: 0,
        y: 50,
        stagger: 0.2
      });
    });

  }, [])

  return (
    <Section>
      <SectionWidth>
        <div ref={animateText} className={style.wrapper}>
          {numIsPair(index) ? <Img /> : <Content />}
          {numIsPair(index) ? <Content /> : <Img />}
        </div>
      </SectionWidth>
    </Section>
  );
}
