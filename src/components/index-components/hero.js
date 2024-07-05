import React from "react"
import styled from "@emotion/styled"
import HeroVideo from "../../images/TestVideo1080.webm"
import RippleButton from "../ripple-btn"
import background from "../../images/hero.jpeg"

const Wrapper = styled.div`
min-height: 115vh;
height: auto;
width: 100%;
background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${background});
// background-color: black;
h1 {
padding-top: 100px;
line-height: 90%;
font-size: 95px;
width: 500px;
font-weight: 900!important;
color: white;
margin: 0;
// -webkit-background-clip: text;
// background-position: 50%;
//   background-repeat: no-repeat;
//   background-size: cover;
//   color: transparent;
//   position: relative;
//   font-family: Zuume,sans-serif;
//   background-color: white;
// background-image: url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHltNjZ6bmV1ZWpobXBtdTZiMWM2cWw4OGd0YnAxamkyMGhrb2Y1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gQrwpBthuEAKc/giphy.webp);
}
display: flex;
justify-content: center;
// align-items: center;
.hero-left {
    margin-top: 0px;
    margin-bottom: 15vh;
    overflow-x: visible;
    z-index:100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    box-sizing: border-box;
    width: 35vw;
    color: white;
    .hero-copy {
    font-size: 22px!important;
    padding: 10px 0;
    margin-top: 0;
    margin-bottom: 20px;
    color: hsla(40,22%,92%,.6);
    }
    .button-div {
    display: flex;
    width: 500px;
    wrap: no-wrap;
    }
    a {
    box-sizing: border-box;
    white-space: nowrap;
    border: solid 2px white;
    display: inline-block;
    // height: 30px;
    padding: 20px 20px;
    border-radius: 10px;
    color: white;
    text-decoration: none;
    :first-of-type {
    margin-right: 40px;
    }
    }
}
.hero-right {
    margin-top: 74px;
    height: 88vh;
    margin-left: -60px;
    width: 65vw;
video {
    // width: 100%;
    height: 100%;
}
}
`


const Hero = () => {
  return (
    <Wrapper>
        <div className="hero-left">
        <h1>MOTO TRIALS TRAINING</h1>
        {/* <p>We provide moto-trials coaching, with all gear provided, for the whole family. If you want to take your skills to the next level or have a fun family outing book today!</p> */}
        <p className="hero-copy">We provide moto-trials coaching, with bikes & gear provided, for all ages. If you want to take your skills to the next level or have a fun group/family outing book today!</p>
        <div className="button-div">
            {/* <a href="#">MEET COACH PHIL</a>
            <a href="#">VIEW BOOKING OPTIONS</a> */}
            <RippleButton text={"MEET COACH PHIL"}/>
            <RippleButton text={"VIEW BOOKING OPTIONS"}/>
        </div>
        </div>
        <div className="hero-right">
        <video loop autoPlay muted>
            <source src={HeroVideo} type="video/webm"/>
        </video>
        </div>
      
    </Wrapper>
  )
}

export default Hero
