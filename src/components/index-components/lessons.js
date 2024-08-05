import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Wrapper = styled.div`
padding-top: 170px;
padding-bottom: 80px;
background-color: white;
// width: 100%;
width: 90vw;
margin: auto;
h2 {
  text-align: center;
  font-size: 45px;
  margin: 0;
}
  .intro-text {
  text-align: center;
  padding-top: 10px;
  width: 1100px;
  font-size: 18px;
  margin: auto;
  }
}
.top-div {
display: flex;
flex-direction:
// align-items: end;
justify-content: space-between;
.arrow-div {
display: flex;
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
margin-right: 30px;
}
:hover {
cursor: pointer;
transform: scale(1.1);
}
}
.active {
background-color: black;
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


.lessons {
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 40px;
}
.card {
width: 40%;
// height: 508px;
height: auto;
border: 1px solid rgba(0,0,0,0.2);
margin: 10px;
}
.image {
width: 100%;
height: 350px;
}
.text {
padding: 20px;
}
@media(max-width:920px){
h2 {
font-size: 35px!important;
width: 70%;
margin: auto!important;
}
.card {
width: 70%;
}
}
@media(max-width:700px){
h2 {
font-size: 24px!important;
width: 98%;
}
.card { width: 100%;}
}
`


const Lessons = () => {
  const swiper = useSwiper();
  return (
    <Wrapper>
      <h2>TRIALS LESSONS FOR EVERY AGE & SKILL LEVEL</h2>
      {/* <p className="intro-text">We can take you or your kids from absolute beginners to skilled riders able to ride over logs, rocks, pipes, hill climbs, basic jumps, pulling wheelies and anything else you want to learn. For your first visit you will be on an electric bike.</p> */}
        <div className="top-div">
          
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            // loop={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="card">
              <StaticImage className="image" src="../../images/lessons/first-timers-edited.png"/>
              <div className="text">
                <h3>LEVEL 1: FIRST TIMERS</h3>
                <p>If you’ve never been on a bike the first time can be scary and exciting! We teach riders at their pace and keep safety and fun at the forefront. By the end of the session you’ll be comfortable and confident with the basics of riding - and hopefully have a grin ear to ear.</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <StaticImage className="image" src="../../images/lessons/beginners.jpg"/>
                <div className="text">
                  <h3>LEVEL 2: BEGINNERS</h3>
                  <p>Once you know the basics it’s time to learn the needed skills to ride our beginner tracks with some more style and confidence. This could include improving turning mechanics, riding posture, higher speeds, throttle/braking control etc.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <StaticImage className="image" src="../../images/lessons/intermediate.png"/>
                <div className="text">
                  <h3>LEVEL 3: INTERMEDIATE</h3>
                  <p>If you’ve had a few lessons with us already or have previous experience our Intermediate lessons will get you on to the fun stuff! Basic jumps, hill climbs and starting to get over bigger trials obstacles.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <StaticImage className="image" src="../../images/lessons/trails-jump.jpg"/>
                <div className="text">
                  <h3>LEVEL 4: ADVANCED</h3>
                  <p>For advanced riders we focus on more difficult techniques needed in trials and keep building on the basics. We welcome competition minded people and those who just want a fun blat around the facility also!</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper> */}
          {/* <div className="arrow-div">
            <div className="arrow"><div className="triangle left"/></div>
            <div className="arrow active"><div className="triangle"/></div>
          </div> */}
        </div>
        <div className="lessons">
          <div className="card">
            <StaticImage className="image" src="../../images/lessons/first-timers-edited.png"/>
            <div className="text">
              <h3>LEVEL 1: FIRST TIMERS</h3>
              <p>If you’ve never been on a bike the first time can be pretty scary and exciting! At Motoschool we'll get you up and running safely and at your own pace.</p>
            </div>
          </div>
          <div className="card">
            <StaticImage className="image" src="../../images/lessons/beginners.jpg"/>
            <div className="text">
              <h3>LEVEL 2: BEGINNERS</h3>
              <p>Once you know the basics it’s time to learn the needed skills to ride our beginner tracks with some more style and confidence.</p>
            </div>
          </div>
          <div className="card">
            <StaticImage className="image" src="../../images/lessons/intermediate.png"/>
            <div className="text">
              <h3>LEVEL 3: INTERMEDIATE</h3>
              <p>Intermediate lessons will get you on to the fun stuff! Basic jumps, hill climbs and starting to get over bigger trials obstacles.</p>
            </div>
          </div>
          <div className="card">
            <StaticImage className="image" src="../../images/lessons/trails-jump.jpg"/>
            <div className="text">
              <h3>LEVEL 4: ADVANCED</h3>
              <p>For advanced students we keep improving the basics and build more advanced techniques to improve trial skills and help reach your goals.</p>
            </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default Lessons
