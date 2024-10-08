import React, { useRef } from "react"
import styled from "@emotion/styled"
import CoachVideo from "../../images/phil-motoschool.mp4"
import { StaticImage } from "gatsby-plugin-image"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Wrapper = styled.div`
// background-color: black;
.mob-video-wrap {
display: none;
}
.coach-video-wrap {
// width: 600px;
padding-top: 100px;
margin-bottom: -58vh;
height: 100vh;
display: flex;
justify-content: center;
.video {
width: 25vw;
height: 25vh;
// width: 426px;
// height: 240px;
// height: unset!important;
max-height: unset!important;
// width: 30vw;
// width: 10%;
}
}
p {
font-size: 14px;
font-style: italic;
padding: 10px;
}

.coach-banner {
position: relative;
width: fit-content;
padding: 10px 20px;
background-color: black;
z-index: 100;
border-radius: 30px;
margin: 40px auto;
display: flex;
align-items: center;
flex-direction: row;
h2 {
font-size: 50px;
padding: 10px;
text-wrap: nowrap;
margin: 0;
background-color: black;
color: white;
z-index: 100;
}
.coach-image {
width: 100px;
border-radius: 30px;
}
}
.track-container {
width: 800px;
overflow: clip;
border-radius: 20px;
}
.track {
height: 100%;
width: 2562px;
display: flex;
wrap: no-wrap;
text-wrap: nowrap;
animation-name: track-animation;
animation-duration: 40s;
animation-iteration-count: infinite;
animation-timing-function: linear;
background-color: #f1f3f4;
}
.track-item {
display: flex;
align-items: center;
padding: 20px 15px;
color: black;
font-size: 18px;
}
.dash {
margin-left: 20px;
height: 8px;
width: 8px;
background-color: black;
border-radius: 10px;
}
.mob-coach-credit {
// padding-left: 10px;
}
li {
color: white;
}
@keyframes track-animation {
  from {transform: translateX(0);}
  to {transform: translateX(-50%);}
}
  .animate-text {
  width: 110px; 
  }
.mob-wrap {
display: flex;

}
@media(max-width: 1245px){
.track-container {
// width: 400px;
width: 50vw;
}
}
// @media(max-width: 800px){

// .coach-video-wrap {
// display: none;
// }
// .mob-video-wrap {
// display: block;
// margin-top: 50px;
// h2 {
// width: 100%;
// text-align: center;
// padding-bottom: 10px;
// }
// }
// .mob-video {
// width: 100vw;
// height: 100%;
// }
// }
@media(max-width: 800px){
.mob-coach-credit {
max-width: 60vw;
}
.coach-video-wrap {
display: none;
}
.mob-video-wrap {
display: block;
margin-top: 50px;
h2 {
width: 100%;
text-align: center;
padding-bottom: 10px;
}
}
.mob-video {
width: 100vw;
height: 100%;
}
.title {
font-size: 30px!important;
margin-top: 100px!important;
width: 90vw!important;
}

.coach-banner {
width: 100vw;
margin: auto;
// margin: 20px auto;
margin-top: -4px;
border-radius: 0;
}
.coach-banner {
h2 {
margin-left: 10px!important;
margin-bottom: 0;
padding-bottom: 0;
// width: 100vw;
box-sizing: border-box;
}
}
.track-item {
font-size: 12px;
}
.track-container {
width: 60vw;
margin-left: 10px;
}
.mob-wrap {
flex-direction: column;
}
}
`

const PhilSocialProof = ["National and International trials competitor","Riding dirt bikes and trial bikes for 32 years","Private coaching for 16+ years", "First aid trained"]


const Coach = () => {
    const featurebox = useRef();
    const video = useRef();
    useGSAP(
        () => {
            console.log("hello")
            ScrollTrigger.create({
                trigger: ".mob-video",
                start: '-200 50%',
                end: '500 50%',
                onEnter: () => {video.current.play();},
                onEnterBack: () => {video.current.play();},
                onLeave: () => {video.current.pause();},
                onLeaveBack: () => {video.current.pause();},
            })
            gsap.to(".coach-video-wrap", {
              scrollTrigger: {
                trigger: ".coach-video-wrap",
                pin: true,
                start: "207 center",
                end: "+=600",
                scrub: true,
              },
            })
            gsap.to(".animate-text", {
              opacity: 0,
              display: "none",
              scrollTrigger: {
                trigger: ".coach-video-wrap",
                start: "207 center",
                end: "+=100",
                scrub: true,
              },
            })
            gsap.to(".video", {
              width: "100vw",
              height: "123vh",
              y: "-47vh",
              scrollTrigger: {
                trigger: ".video",
                start: "207 center",
                end: "+=400",
                scrub: true,
              },
            })
        },
        { scope: featurebox }
    );
  return (
    <Wrapper ref={featurebox} className="coach-section-tag">
           <div className="coach-video-wrap">
                <p className="animate-text">Who coaches<br/> the lessons?</p>
                <video className="video" loop autoPlay muted>
                    <source src={CoachVideo} type="video/mp4"/>
                </video>
                <p className="animate-text">(scroll)</p>
           </div>
           <div className="mob-video-wrap">
            <h2 className="title">Who takes motoschool lessons?</h2>
           <video className="mob-video"
            ref={video}
            controls
            disablePictureInPicture 
            controlsList="nodownload"
            id="HeroVideo"
            title="Motoschool highlights"
            height="100vh"
            width="100%"
            loop
            muted
            playsInline 
            preload="auto"
           >
                    <source src={CoachVideo} type="video/mp4" disablePictureInPicture />
                </video>
           </div>
           <div className="coach-banner">
            <StaticImage className="coach-image" src="../../images/phil-arlo.jpg"/>
            <div className="mob-wrap">
              <h2>Phil Shilton</h2>
              <div className="mob-coach-credit">
                <ul>
                  <li>{PhilSocialProof[0]}</li>
                  <li>{PhilSocialProof[1]}</li>
                  <li>{PhilSocialProof[2]}</li>
                  <li>{PhilSocialProof[3]}</li>
                </ul>
              </div>
              {/* <div className="track-container">
                  <div className="track">
                      {PhilSocialProof.map((credit, i) => (
                          <div className="track-item">{credit}<div className="dash"/></div>
                      ))}
                      {PhilSocialProof.map((credit, i) => (
                          <div className="track-item">{credit}<div className="dash"/></div>
                      ))}
                  </div>
              </div> */}
            </div>
           </div>
    </Wrapper>
  )
}

export default Coach