import React, { useRef } from "react"
import styled from "@emotion/styled"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Wrapper = styled.div`
.container {
  display:inline-block;
  background:#ff0000;
  width:100%;
  padding-top:40px;
  padding-bottom:40px;
}

.container img.swipeimage {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  object-fit: cover;
  z-index: 9;
  opacity: 0;
  visibily: hidden;
  pointer-events: none;
}
`

export default function HoverTest(){
    gsap.registerPlugin(useGSAP);

    const container = useRef();
   

    useGSAP(
        () => {
            gsap.set('.container img.swipeimage', { yPercent: -50, xPercent: -50 });

            let activeImage;
            gsap.utils.toArray(".container").forEach((el) => {
            let image = el.querySelector('img.swipeimage'),
                setX, setY,
                align = e => {
                    setX(e.clientX);
                    setY(e.clientY);
                },
                startFollow = () => document.addEventListener("mousemove", align),
                stopFollow = () => document.removeEventListener("mousemove", align),
                fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
            
            el.addEventListener('mouseenter', (e) => {
                fade.play();
                startFollow();
                if (activeImage) { // if there's an actively-animating one, we should match its position here
                gsap.set(image, {x: gsap.getProperty(activeImage, "x"), y: gsap.getProperty(activeImage, "y")});
                }
                activeImage = image;
                setX = gsap.quickTo(image, "x", {duration: 0.6, ease: "power3"});
                setY = gsap.quickTo(image, "y", {duration: 0.6, ease: "power3"});
                align(e);
            });
            
            el.addEventListener('mouseleave', () => fade.reverse());
            
            });
           
        },
        { scope: container }
    ); 
    return (
    <Wrapper ref={container}>
        <div class="container">
            <img class="swipeimage" src="https://picsum.photos/id/239/200/200"/>
            <div class="text">
                <h1>text</h1>
            </div>
        </div>
        <div class="container">
            <img class="swipeimage" src="https://picsum.photos/id/237/200/200"/>
            <div class="text">
                <h1>text</h1>
            </div>
        </div>
    </Wrapper>
    )
}