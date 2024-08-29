import React, { useContext } from "react"
import styled from "@emotion/styled"
import HeroVideo from "../../images/TestVideo1080.webm"
import HeroVideoMobile from "../../images/HeroVideoMobile.mp4"
import RippleButton from "../ripple-btn"
import background from "../../images/hero.jpeg"
import { ShareContext, ShareContextProvider } from "../context"

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
    height: 100vh;
    }
}
.mobile {
display: none;
}
@media(max-width: 1300px){
flex-direction: column;
.mobile {
display: block;
}
.pc {
display: none;
}
.hero-left {
margin-bottom: 0;
margin: auto;
width: 800px;
justify-content: center;
align-items: center;
text-align: center;
h1 {
width: 800px;
// font-size: 80px;
}
}
.hero-right {
height: unset;
margin:0;
padding: 0;
margin-bottom: 50px;
width: 100%;
video {
height: unset;
width: 100%;
}
}
}
@media(max-width: 800px){
min-height: unset;
height: fit-content!important;
.hero-right {
max-height: calc(100vw * 0.6)
video {
height: unset;
}
}
.hero-left {
h1 {
width: unset;
font-size: 60px;
}
.hero-copy {
font-size: 18px!important;
}
max-width: 100%;
width: 100%;
}
.button-div {
flex-direction: column;
wrap: wrap;
width: unset!important;
justify-content: center;
align-items: center;
a:first-of-type {
margin-right: unset!important;
margin-bottom: 20px!important;
}
}
}
`


const Hero = () => {
  const SContext = useContext(ShareContext);
  console.log("hero", SContext.Value[1])

  return (
    <Wrapper>
        <div className="hero-left">
        <h1>MOTO TRIALS TRAINING</h1>
        {/* <p>We provide moto-trials coaching, with all gear provided, for the whole family. If you want to take your skills to the next level or have a fun family outing book today!</p> */}
        <p className="hero-copy">We provide moto-trials coaching, with bikes & gear provided, for all ages. If you want to take your skills to the next level or have a fun group/family outing book today!</p>
        <div className="button-div">
            {/* <a href="#">MEET COACH PHIL</a>
            <a href="#">VIEW BOOKING OPTIONS</a> */}
            <a onClick={() => SContext.Value[1].current.scrollTo(".coach-video-wrap")}><RippleButton text={"MEET COACH PHIL"} /></a>
            <a onClick={() => SContext.Value[1].current.scrollTo(".booking-options")}><RippleButton text={"VIEW BOOKING OPTIONS"}/></a>
        </div>
        </div>
        <div className="hero-right pc">
        <video loop autoPlay muted>
            <source src={HeroVideo} type="video/webm"/>
        </video>
        </div>
        <div className="hero-right mobile">
        <video disablePictureInPicture controls controlsList="nodownload" id="HeroVideo" title="Motoschool highlights" height="auto" width="100%" loop muted autoPlay={true} playsInline preload="auto">
            <source src={HeroVideoMobile} type="video/mp4" disablePictureInPicture />
        </video>
        </div>
      
    </Wrapper>
  )
}

export default Hero