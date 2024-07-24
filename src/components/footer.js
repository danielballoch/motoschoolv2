import React, { useRef } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Wrapper = styled.div`
// position: absolute;
// bottom: 0;
// transform: translateY(-304px);
// left: 0;
background-color: black;

z-index:0;
display: flex;
justify-content: center;
// width: 100vw;
// background-color: #0a2540;
// background-color: #f8f8f8;
color: white;
// background-color: #343a40;
// color: white;
.wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.main-footer {
display: flex;
.section1, .section2, .section3, .section4 {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 40px 0px;
    padding: 0 80px;
    a {
        font-size: 14px;
        color: white;
        text-decoration: none;
    }
}
.section1 {
    padding-left: 0;
    width: 435px;
}

.section1 .blurb {
    padding: 10px 0;
    font-size: 16px;
}
.head {
    font-size: 16px!important;
    margin: 0!important;
    padding: 10px 0!important;
}
.section2 {
    border-left: 1px solid rgba(0,0,0,0.2);
    a {
        display: inline-block;
        padding: 5px 0;
        margin: 5px 0;
    }
}
.social-icon {
width: 28px;
// filter: invert(100%);
// background-color: white;
border-radius: 50px;
border: solid 1px black;
margin-right: 5px;
transition: .5s;
}
.section3 {
    border-left: 1px solid rgba(0,0,0,0.2);
    padding-right: 0;
    a {
        display: inline-block;
        padding: 5px 0;
        margin: 5px 0;
    }
}
.logo {
    // height: 70px;
    // filter: invert(100%);
    margin-left: -8 px;
    img {
        // height: 70px;
    }
}
.socials-div {
    a {
        display: inline-block;
        padding: 10px;
    }
    img {
        // filter: invert(100%);
    }
}
}
.bottom-footer {
    display: flex;
    justify-content: center;
    // background-color: #22262a;
    width: 100%;
    a {
        font-size: 13px;
        padding: 13px;
        margin: 60px 20px 0 20px;
        color: white;
        // color: black;
        text-decoration: none;
    }
}
@media(max-width: 1000px){
    position: relative;
    .main-footer {
        flex-direction: column;
        width: 100vw;
        overflow: hidden;
        .section1 {
            padding: 0 80px;
            max-width: 340px;
            width: unset;
            .logo {
                img {
                    object-fit: contain!important;
                }
            }
            // max-width: 400px;
            // width: 90%;
        }
        .section1, .section2, .section3, .section4 {
            margin: 50px 0;
        }
        .section2, .section3, .section4 {
            width: fit-content;
            margin-left: 60px;
        }
    }
}
@media(max-width: 520px){
    .section1 {
        padding: 0 20px!important;
    }
    .bottom-footer {
        flex-direction: column;
        align-items: center;
    }
}
`

export default function Nav(){

    const footer = useRef();
    // const { contextSafe } = useGSAP({scope: footer});
    
    // useGSAP(
    //     () => {
    //         gsap.to("#main", {
    //             opacity: 1,
    //             background: 'white',
    //             y: "end",
    //           scrollTrigger: {
    //             trigger: "#main",
    //             pin: true,
    //             start: '304px bottom',
    //             end: '608px bottom',
    //             scrub: true,
    //           },
    //         })
    //     },
    //     { scope: footer }
    // );


    return(
        <div ref={footer} style={{padding:"0"}}>
        <Wrapper id="main">
            <div className="wrap" >
                <div className="main-footer">
                    <div className="section1">
                        <Link to="/" className="logo"><StaticImage src="../images/MOTOSCHOOL.png" alt="A dinosaur" /></Link>
                        <div className="blurb">The best place in Tauranga to ride over rocks on two wheels!
                        Come down today to start your trials journey, improve your skills, or create some fun memories with friends/family. </div>
                        {/* <div className="socials-div">
                            <a target="_blank" href="https://www.facebook.com/thoughtfulHQ"><StaticImage src="../images/fb-icon.svg" alt="A dinosaur" /></a>
                            <a target="_blank" href="https://www.instagram.com/thoughtful_hq/"><StaticImage src="../images/insta-icon.svg" alt="A dinosaur" /></a>
                            <a target="_blank" href="https://www.linkedin.com/company/thoughtfulhq/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B85NHyayhTnyWSqzr%2FU4dQw%3D%3D"><StaticImage src="../images/linkedin-icon.svg" alt="A dinosaur" /></a>
                        </div> */}
                    </div>
                    {/* <div className="section2">
                        <a>Gatsby Partner</a>
                        <a>Google Partner</a>
                    </div> */}
                    <div className="section2">
                        <p className="head"><b>NAVIGATE</b></p>
                        <Link to="/projects">Home</Link>
                        <Link to="/#services">About</Link>
                        <Link to="/contact">Our Tracks</Link>
                        <Link to="/frequently-asked-questions">FAQ</Link>
                    </div>
                    <div className="section3">
                        <Link to="/contact" className="head"><b>CONTACT</b></Link>
                        <a href="mailto:daniel@thoughtfulhq.com">PHIL@MOTOSCHOOL.COM</a>
                        <a href="tel:+64220780868">0277381275</a>
                        <a href="#">Book a session</a>
                    </div>
                    <div className="section3">
                    <Link to="/contact" className="head"><b>FOLLOW US</b></Link>
                        <div>
                            <a href="#"><StaticImage className="social-icon" src="../images/icons/facebook.png"/></a>
                            <a href="#"><StaticImage className="social-icon" src="../images/icons/instagram.png"/></a>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <Link to="/">© 2024 MOTOSCHOOL. All rights reserved.</Link>
                    <Link to="/terms-and-conditions">Privacy Policy</Link>
                    <a to="https://www.thoughtfulhq.com">Website by thoughtfulHQ</a>
                </div>
            </div>
        </Wrapper>
        </div>
    )
}