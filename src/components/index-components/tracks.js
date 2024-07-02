import React, { useState } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"


const Wrapper = styled.div`

display: flex;
align-items: center;
.tracks-left {
width: 30%;
margin-left: 50px;
margin-right: 50px;
.hide {
display: none;
}
h2 {
font-size: 45px;
// margin-top: 80px;
}
}
.gatsby-image-wrapper {
    flex-shrink: 0!important;
    width: 100%;
}
.active1 {
    transform: translateX(-100%);
}
.active2 {
    transform: translateX(-200%);
}
.active3 {
    transform: translateX(-300%);
}
.image-wrapper {
    display: flex;
    position: relative;
    // overflow: scroll;
    background-color: grey;
    width: 70%;
    height: 100%;
    overflow: clip;
    .image-track {
        display: flex;
        transition: .3s;
    }
    img {
        width: 100%;
        height: 100%;
        background-size: cover!important;
    }
}
.image-track {
display: flex;
.track-image {
// height: 110vh;
}
}
.subtext {
margin-top: 100px;
font-size: 14px;
font-style: italic;
}

.arrow-div {
position: absolute;
left: calc(30% + 70px - 30px);
top: 45%;
z-index: 100;
display: flex;
flex-direction: column-reverse;
padding-bottom: 10px;
}
.arrow {
width: 60px;
height: 60px;
background-color: #D9D9D9;
display: flex;
justify-content: center;
align-items: center;
transition: .5s;
:first-of-type {
margin-top: 20px;
}

}
.active {
background-color: black;
:hover {
cursor: pointer;
transform: scale(1.1);

}
}
.triangle {
  width: 0;
	height: 0;
	border-top: 15px solid transparent;
	border-left: 30px solid white;
	border-bottom: 15px solid transparent;
}
.left {
transform: rotate(180deg);
}
}
`

const ContentBox = styled.div`
:hover {
cursor: pointer;
}
.toggle {
    max-height: 0px !important;
    overflow: hidden;
    opacity: 0;
}
.description {
    display: grid;
    grid-template-rows: 0fr;
    justify-content: flex-start;
    max-height: 800px;
    transition: .7s;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #F1F3F4;
    p {
    padding: 10px;
    }
}
div {
    transition: 1s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
.title {
    width: 88%;
    margin: 0;
    font-size: 18px;
}
@media(max-width: 1000px){
    flex-direction: column;
    div {
        width: auto;
    }
}
@media(max-width: 940px){
    width: 100%;
}
`

const TracksData = [
    {title: "1. The Oval", description: "This is our beginner track which lets riders warm up or learn the basics safely."},
    {title: "2. Jellybean", description: "Another beginner friendly track which lets riders get a better feel for leaning turns and more speed."},
    {title: "3. Mini MX", description: "This is our main course with hills, berms, and a couple of jumps!"},
    {title: "4. Moto Trials Sections", description: "We have multiple lines and obstacles setup for beginner to advanced. This includes steep hills, jumps, rocks, logs, pipes, adjustable splat wall, A-frames and more."},
]

const TrackInfo = ({title, description,i, toggle, setToggle}) => {
    return (
        <ContentBox  onClick={() => {setToggle(i)}}>
            <div key={"title " + i}>
                <h3 className="animate2"><p className="title">{title}</p><div className={toggle ? "button" : "button open"}/></h3>
                <div className={toggle === i ? "description"  : "description toggle"}>
                    <p>{description}</p>
                </div>
            </div>
        </ContentBox>
    )
} 


const Tracks = () => {
    const [image, setImage] = useState(0);
  return (
    <Wrapper>
            <div className="tracks-left">
                <h2>OUR TRACKS & FACILITY</h2>
                <div className="tracks">
                    {TracksData.map((track, i) => (
                         <TrackInfo title={track.title} description={track.description} i={i} toggle={image} setToggle={setImage}/>
                    ))}
                </div>
                <p className="subtext">We’re located just 15 minutes outside of Tauranga right by the Omanawa Hall. Facility address will be sent upon booking! </p>
            </div>
            <div className="image-wrapper">
                <div className={image === 0? "image-track" : image === 1? "image-track active1" : image === 2? "image-track active2" : "image-track active3"}>
                    <StaticImage className="track-image" src="../../images/tracks/oval.jpg"/>
                    <StaticImage className="track-image" src="../../images/tracks/jellybean.jpg"/>
                    <StaticImage className="track-image" src="../../images/tracks/muilt.png"/>
                    <StaticImage className="track-image" src="../../images/tracks/trials-sections.png"/>
                </div>
                
            </div>
            <div className="arrow-div">
                <div className={image > 0 ? "arrow active" : "arrow"} onClick={() => {if (image > 0){setImage(image-1)}}}><div className="triangle left"/></div>
                <div className={image < 3 ? "arrow active" : "arrow"} onClick={() => {if(image < 3){setImage(image+1)}}}><div className="triangle"/></div>
            </div>
    </Wrapper>
  )
}

export default Tracks