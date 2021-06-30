import React, { useRef, useEffect } from "react";
import { ReactComponent as Scene } from "../images/planet.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Animation = () => {

  const wrapper = useRef(null);

  useEffect(() => {
    const elements = wrapper.current.children;

    gsap.set([elements], {});
    console.log(elements);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".resume__animation",
        start: "top 30%",

        toggleActions: "play none none reverse"

      }

    }
    );



    tl.fromTo(elements, { x: "+=300", opacity: 0 }, {
      duration: 3,
      y: "+=400",
      opacity: 1,
      stagger: 0.2,
      opacity: 1
    }).to(elements, {
      duration: 1, opacity: 0
    });


  });

  return (


    <div ref={wrapper} className="resume__animation">


      <Scene id="trigger" className="resume__animation-img resume__animation-img-1" />

    </div>
  )

};

export default Animation;

