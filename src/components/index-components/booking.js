import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import RippleButton from "../ripple-btn"


const Wrapper = styled.div`
background-color: black;
color: white;
padding-top: 100px;
padding-bottom: 100px;
.book-button, .contact-button {
transition: .3s;
    :hover {
        background-color: rgba(255,255,255,0.9);
    }
}
.ripple {
	background: rgba(0,0,0,0);
	color: #fff;
	padding: 0;
	position: relative;
	overflow: hidden;
    border: solid 3px white;
    border-radius: 10px;
}

.ripple::before {
	content: "";
	position: absolute;
	background-color: white;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	z-index: 1;
	bottom: 0;
	left: calc(50% - 5px);
	-webkit-transform: scale(0);
	transform: scale(0);
}

.ripple:hover {
	// background: #74b126;
    .booking-button {
    font-size: 18px;
    // color: white!important;
    background-color: #f1f3f4!important;
    }
    cursor: pointer;
}

.ripple:hover::before {
	-webkit-transform: scale(12);
	transform: scale(160);
	-webkit-transition: border-radius .5s .5s,-webkit-transform .5s;
	transition: border-radius .5s .5s,-webkit-transform .5s;
	transition: transform .5s,border-radius .5s .5s;
	transition: transform .5s,border-radius .5s .5s,-webkit-transform .5s;
}

.ripple:hover::after {
	content: "";
	position: absolute;
	z-index: 2;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.header-section {
max-width: 1300px;
display: flex;
margin: auto;
h2 {
margin-top: 0;
font-size: 60px;
font-weight: 900;
}
p {
margin: 0;
}
a {
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 color: black;
 text-decoration: none;
 padding: 5px 15px;
}
.header-image {
box-sizing: border-box;
width: 300px;
margin: 40px;
}
.header-right {
// padding-left: 40px;
display: flex;
flex-grow: 2;
flex-direction: column;
justify-content: center;
}
.header-items {
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;
.contact-icon {
width: 30px;
margin-right: 5px;
}
.book-button {
height: 60px;
width: 200px;
}
a {
height: 40px;
}
}
}
.booking-options {
    display: flex;
    justify-content: center;
    .booking-option { 
        text-decoration: none;
        display: flex;
        flex-direction: column;
        margin: 10px;
        box-sizing: border-box;
        border: solid 5px white;
        max-width: 420px;
        width: 95vw;
        transition: 1s;
        :hover {
        // transform: scale(1.01);
        // background-color: #009946;
        color: black;
        img {
        filter: invert(100%);
        transition-delay: .3s;
        }
        }
        
        .option-content {
        z-index: 100;
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        padding: 10px 40px;
        
        }
        h3 {
            // margin: 0;
            font-size: 30px;
            :first-of-type {
            margin-bottom: 15px;}
        }
        p {
            margin: 7px 0;
        }
        .info {
        display: flex;
        padding: 10px;
        align-items: center;
        li {
            margin-left: 40px;
        }
    }
    .add-ons-section {
        padding-top: 10px;
        margin-top: auto;
    }
    .icon {
        width: 50px;
        height: 34px;
        img {
        transition: 1s;
        }
    }
    .booking-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: white;
    color: black;
    text-decoration: none;
    font-weight: 900;
    transition: .3s;
    z-index: 100;
    }
}
}
@media(max-width: 1350px){
display: flex;
flex-direction: column-reverse;

.booking-options {
flex-direction: column;
justify-content: center;
align-items: center;
}
.header-right {
max-width: 400px!important;
display: flex;
align-items: center;
justify-content: center;
h2 {
display: none;
}
.pc {display: none;}
.book-button, .contact-button {
box-sizing: border-box;
width: 100%!important;
height: 100px!important;
font-size: 18px;
}
.header-items {
max-width: 420px;
width: 95vw;
flex-direction: column;
align-items: start;
margin: 50px 0;
// width: fit-content;
a, p {
margin: 5px 0;
width: 100%;
}
}
}
.header-image {
display: none!important;
}
}
`


const Booking = () => {
  return (
    <Wrapper>
           <div className="header-section">
            <StaticImage className="header-image" src="../../images/phil-livy.jpg"/>
            <div className="header-right">
                <h2>TRY MOTO TRIALS TODAY</h2>
                <div className="header-items">
                    <Link to="/booking" className="book-button">BOOK A SESSION</Link>
                    <p>OR REACH OUT <br className="pc"/>TO PHIL DIRECTLY</p>
                    <a href="mailto:philsmotoschool@outlook.com" className="contact-button"><StaticImage className="contact-icon" src="../../images/icons/email.png"/>philsmotoschool@outlook.com</a> 
                    <a href="tel:+64277381275" className="contact-button"><StaticImage className="contact-icon" src="../../images/icons/phone3.png"/>+64 27 738 1275</a>
                </div>
            </div>
           </div>
           <div className="booking-options">
                <Link to="/booking" className="booking-option ripple">
                    <div className="option-content">
                        <h3>30 MINUTE LESSON </h3>
                        <p>This package includes a 30min lesson with one on one coaching from Phil at the MOTOSCHOOL facility. One set of bike and gear hire is included in the price.</p>
                        <p>Want to share the lesson with friends or family? Bring them down! We only charge for additional gear/bike hire so the more the merrier!</p>
                        <div className="add-ons-section">
                            <div className="info"><StaticImage className="icon" src="../../images/icons/chest-icon.png"/><li>Additional gear $15 ea.</li></div>
                            <div className="info"><StaticImage className="icon" src="../../images/icons/bike-icon.png"/><li>Additional bike(s) $25 ea.</li></div>
                            <div className="info"><StaticImage className="icon" src="../../images/icons/helmet-icon.png"/><li>Recommend max of 4 riders.</li></div>
                        </div>
                        <h3>$80 - Gear Included</h3>
                    </div>
                    <div  className="booking-button">BOOK NOW</div>
                </Link>
                <Link to="/booking" className="booking-option ripple">
                    <div className="option-content">
                        <h3>1 HOUR LESSON </h3>
                        <p>This package includes a 1 hour lesson with one on one coaching from Phil at the MOTOSCHOOL facility. One set of bike and gear hire is included in the price.</p>
                        <p>Want to share the lesson with friends or family? Bring them down! We only charge for additional gear/bike hire so the more the merrier!</p>
                        <div className="add-ons-section">
                            <div className="info"><StaticImage className="icon" src="../../images/icons/chest-icon.png"/><li>Additional gear $15 ea.</li></div>
                            <div className="info"><StaticImage className="icon" src="../../images/icons/bike-icon.png"/><li>Additional bike(s) $45 ea.</li></div>
                            <div className="info"><StaticImage className="icon" src="../../images/icons/helmet-icon.png"/><li>Recommend max of 4 riders.</li></div>
                        </div>
                        <h3>$145 - Gear Included</h3>
                    </div>
                    <div  className="booking-button">BOOK NOW</div>
                </Link>
                <Link to="/booking" className="booking-option ripple">
                    <div className="option-content">
                        <h3>COACHING ONLY</h3>
                        <p>If you have your own bike and gear Phil offers coaching and track access at $100 per hour. </p>
                        <p>This could be a focused one-on-one or bring your friends for a shared ride! </p>
                        <p>Either way we have a variety or tracks/obstacles and would love to help get you ready for your next comp or just have fun learning new skills and blasting around the tracks.</p>
                        <div className="add-ons-section">
                            <div className="info"><StaticImage className="icon" src="../../images/icons/helmet-icon.png"/><li>Recommend 1-6 riders.</li></div>
                        </div>
                        <h3>$100 Per Hour</h3>
                    </div>
                    <div  className="booking-button">BOOK NOW</div>
                </Link>
           </div>
    </Wrapper>
  )
}

export default Booking