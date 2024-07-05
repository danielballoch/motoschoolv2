import React, { useRef } from "react"
import styled from "@emotion/styled"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Wrapper = styled.div`
background-color: black;
font-family: "Signika Negative", sans-serif;
color: white;
text-align: center;
height: 80vh;
.ball {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid dodgerblue;
  border-radius: 50%;
}
`

export default function HoverTest(){
    gsap.registerPlugin(useGSAP);

    const container = useRef();
   

    useGSAP(
        () => {
            gsap.set(".ball", {xPercent: -50, yPercent: -50});
            var ball = document.querySelector(".ball");
            var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            var mouse = { x: pos.x, y: pos.y };
            var speed = 0.1;
            var fpms = 60 / 1000;
            var xSet = gsap.quickSetter(ball, "x", "px");
            var ySet = gsap.quickSetter(ball, "y", "px")
            window.addEventListener("mousemove", e => {    
            mouse.x = e.x;
            mouse.y = e.y;  
            });
            gsap.ticker.add((time, deltaTime) => {
            var delta = deltaTime * fpms;
            var dt = 1.0 - Math.pow(1.0 - speed, delta); 
            
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
            });
        
            console.log("hello1", ball)

           
        },
        { scope: container }
    ); 
    return (
    <Wrapper ref={container}>
        <h1>hello hover section</h1>
        <div className="ball"></div>
    </Wrapper>
    )
}