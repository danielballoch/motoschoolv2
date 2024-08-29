import React, {useRef, useEffect, useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import ContactForm1 from "../components/contact-form-1"
import ContactForm2 from "../components/contact-form-2"
import ContactForm3 from "../components/contact-form-3"

const Wrapper = styled.div`
background-color: black;
color: white;
padding-top: 100px;
padding-bottom: 100px;
.booking-section {
// margin-top: 100px;
box-sizing: border-box;
padding: 100px;
border: solid white 3px;
width: 900px;
margin: 100px auto;
border-radius: 10px;
h1 {
  font-size: 65px;
  font-weight: 900;
  margin: 10px;
  text-align: center;
}
}
.nav {
display: flex;
.nav-item {
width: 33%;
transition: .3s;
text-align: center;
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 100%);
background-size: 204% 100%;
background-position: 100% 0;
:hover {
// cursor: pointer;
}
}
.active {
background-position: 0% 0;
// background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 99%, rgba(0,0,0,0.4974322492668942) 100%);
// background-color: white;
color: black;
}
h2 {
font-size: 20px;
}
}
.forms-wrapper {
  display: flex;
  position: relative;
  // overflow: scroll;
  // background-color: grey;
  width: 110%;
  height: 100%;
  overflow-x: clip;
}
.forms-track {
  display: flex;
  transition: .3s;
}
.active1 {
    transform: translateX(-794px);
}
.active2 {
    transform: translateX(-1588px);
}
.active3 {
    // transform: translateX(-300%);
}
  @media(max-width: 940px){
  .active1 {
    transform: translateX(-90vw) translateX(-100px);
  }
  .active2 {
      transform: translateX(-180vw) translateX(-200px);
  }
  .active3 {
      transform: translateX(-260vw) translateX(-300px);
  }
  .booking-section {
  padding: 10px;
  width: 95vw;
  box-sizing: border-box;
  }
  }
  @media(max-width: 470px){
  .booking-section {
  h1 {
  font-size: 50px;
  }
  }
  
  }
`

const IndexPage = () => {
  // console.log("index data", data)
  const [formStage, setFormStage] = useState(0)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  const [lessonString, setLessonString] = useState("30 minute lesson - $80")
  const [gearString, setGearString] = useState("1 Set - (included)")
  const [bikeString, setBikeString] = useState("1 Bike - (included)")
  const [hourString, setHourString] = useState("1 Hour")

  const [totalPrice, setTotalPrice] = useState(80)

  useEffect(()=>{
    console.log("form stage:",formStage)
  }, [formStage])

  const data = useStaticQuery(graphql`
    query HomepageContactQuery {
        home: datoCmsHomepage {
            contactBackground {
                gatsbyImageData
                alt
            }
            contentLeft {
              value
            }
            formLabel1
            formLabel2
            formLabel3
            formLabel4
        }
        times: allDatoCmsTimesAvailable(
            sort: {position:ASC}
        ){
            nodes {
                time
                position
            }
        }
        unavailable: allDatoCmsBookedDate {
            nodes {
              bookedDate
            }
        }
    }
  `)
  let c = data.home;
  let timesAvailable = data.times.nodes
  let datesUnavailable = data.unavailable.nodes
  return (
    <Layout>
      <Wrapper>
        <div className="booking-section">
          <h1>MAKE A BOOKING!</h1>
          <div className="nav">
            <div 
            onClick={() => setFormStage(0)}
            className={formStage >= 0? "nav-item active" : "nav-item"}
            ><h2>YOUR DETAILS</h2></div>
            <div 
            onClick={() => setFormStage(1)}
            className={formStage >= 1? "nav-item active" : "nav-item"}
            ><h2>LESSON TYPE</h2></div>
            <div 
            onClick={() => setFormStage(2)}
            className={formStage >= 2? "nav-item active" : "nav-item"}
            ><h2>BOOKING TIME</h2></div>
          </div>
          <div className="forms-wrapper">
            <div className={formStage === 0? "forms-track" : formStage === 1? "forms-track active1" : formStage === 2? "forms-track active2" : "forms-track active3"}>
              <ContactForm1 setFormStage={setFormStage} name={name} phone={phone} email={email} setName={setName} setEmail={setEmail} setPhone={setPhone}/>
              <ContactForm2 setFormStage={setFormStage} name={name} phone={phone} email={email}
              lessonString={lessonString} setLessonString={setLessonString} gearString={gearString} setGearString={setGearString} hourString={hourString} setHourString={setHourString} bikeString={bikeString} setBikeString={setBikeString} totalPrice={totalPrice} setTotalPrice={setTotalPrice}
              />
              <ContactForm3 setFormStage={setFormStage} timesAvailable={timesAvailable} name={name} phone={phone} email={email} 
              lessonString={lessonString} gearString={gearString} hourString={hourString} bikeString={bikeString} totalPrice={totalPrice}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>MAKE A BOOKING | MOTOSCHOOL TAURANGA</title>
