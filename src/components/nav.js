import React, { useState, useRef, useEffect, useContext } from "react"
import { Link, navigate } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "../components/hamburger"
// import backgroundimg from "../images/favicon.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import RippleButton from "./ripple-btn"
import { ShareContext, ShareContextProvider } from "../components/context"



const Wrapper = styled.div`
// position: absolute;
// height: 100vh;
width: 100vw;
overflow-x: clip;
z-index: 500;
a {
:hover {
cursor: pointer;
}
}
.dark {
background-color: rgba(0,0,0,.9); 
}
.navbar {
    overflow-x: clip;
    top: 0;
    left: 0;
    right: 0;
    z-index: 500!important;
    position: absolute;
    // background-color: rgba(255,255,255,.9);
    display: flex;
    // width: 100vw;
    justify-content: flex-end;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    z-index: 200;
    min-height: 80px;
    // height: 100vh;
    // padding: 0 250px;
    align-items: center;
    box-sizing: border-box;
    a {
    text-decoration: none;
    }
    .logo {
        justify-self: flex-start;
        z-index: 200;
        margin-left: 5%;
        margin-right: auto;
        text-align: center;
        width: 260px;
        img {
            object-fit: contain!important;
        }
        text-decoration: none;
        color: black;
        font-size: 24px;
    }
    .middle-content {
        a {
            font-weight: 600;
            padding: 10px;
            margin: 0 10px;
            color: white;
            text-decoration: none;
            font-size: 16px;
        }
    }
    .book-button {
        margin-right: 5%;
        margin-left: 100px;
        width: 260px;
        a {
            width: 260px;
            margin: auto;
            // background-color: black;
            color: white;
            padding: 15px;
            // width: 100%;
            display: block;
            box-sizing: border-box;
            text-align: center;
            border: solid 2px white;
            border-radius: 5px;
            text-decoration: none;
            transition: .3s;
        }
    }
}
.sidedrawer {
    width: 600px;
    right: -600px;
    // width: 600px;
    // right: -600px;
    // max-width: 580px;
    // transition: .3s;
    position: absolute;
    
    height: 100vh;
    z-index: 500;
    background-color: white;
    
    // top: 0;
    // right: -80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 200px 40px;
    box-sizing: border-box;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    // ::before {
    //     content: "";
    //     background-size: contain;
    //     background-repeat: no-repeat;
    //     position: absolute;
    //     top: 90px;
    //     right: 20px;
    //     bottom: 10px;
    //     left: 20px;
    //     opacity: 0.04;
    // }
    
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    a {
        z-index: 100;
        font-size: 35px;
        padding: 10px;
        color: black;
        text-decoration: none;
    }
}
.pin-spacer {
    display: none;
    width: 0;
    // z-index: 100!important;
}
.close-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    // width: 300px;
    padding: 0!important;
    font-size: 30px!important;
    p {
        padding: 0;
        margin: 0;
        width: 100px;
    }
    top: 10px;
    right: calc(10vw - 20px);
    :hover {
        cursor: pointer;
        .hamburger {
            background-color: #635bff!important;
        }
    }
}
.phone {
    font-size: 20px!important;
    position: absolute;
    bottom: 0;
}
.email {
    font-size: 20px!important;
    position: absolute;
    bottom: 0;
    right: 40px;
}
@media(max-width: 755px){
    .email {
        display: none;
    }
}
@media(max-width: 1050px){
    .sidedrawer {
        width: 300px;
        right: -300px;
    }
    .email {
        display: none;
    }
}
@media(max-width: 1200px){
.middle-content {
display: none;
}
.book-button {
    display: none;
}
}
`



export default function Nav({smoother, dark, home}){
    const [active, setActive] = useState(false)
    const SContext = useContext(ShareContext)
    const [activeScroll, setActiveScroll] = useState()
    // console.log("hello nav:", SContext, ShareContext)
    // if(window){ console.log("location: ", window.location.hash)}
   
    console.log("smoothersdf",smoother)
    const navref = useRef();
    const { contextSafe } = useGSAP({ scope: navref });


    let mm = gsap.matchMedia();

   

    const onClickGood = contextSafe(() => {
        if(!active){
            setActive(!active);
           
            mm.add("(min-width: 1050px)", () => {
                gsap.to('.sidedrawer', { x: "-600px" });
            });
              
            mm.add("(max-width: 1049px)", () => {
                gsap.to('.sidedrawer', { x: "-300px" });
            });
        } else {
            setActive(!active);
            gsap.to('.sidedrawer', { x: 0 });
        }
        
    });

    // useEffect(()=>{
    //     console.log("is the navigation running?")
    //     let location = window.location.hash
    //     console.log("location: ",location)
    //     if (location === "#tracks-left"){
    //         console.log("working");
    //         console.log("smoother:",smoother)
    //         // smoother.current.scrollTo(".tracks-left", false, "center center");
    //         // setActiveScroll("#tracks-left")
    //     }
        
    // },[])

    useGSAP(
        () => {
            gsap.to(".sidedrawer", {
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: ".sidedrawer",
                  start: 0,
                  end: "max",
                  pin: true
                },
            })
        },
        { scope: navref }
    );

    return(
        <Wrapper id="top" 
        ref={navref}
        >
            <div className={dark?"navbar dark" : "navbar"}>
                <Link to="/" className="logo">
                    <StaticImage src="../images/MOTOSCHOOL.png" alt="thoughtfulHQ" />
                    {/* ORDINARY DIGITAL &copy; */}
                </Link>
                {/* <div
                    onClick={() => {toggleShare}}>
                    Some content here
                </div> */}
                <div className="middle-content">
                    <Link to="/">Home</Link>
                    {home? 
                    <a onClick={() => smoother.current.scrollTo(".tracks-left", false, "center center")}>Our Tracks</a>
                    : 
                    <Link to="/#tracks-left">Our Tracks</Link>
                    }
                     {home? 
                    <a onClick={() => smoother.current.scrollTo(".booking-options", false, "center center")}>Pricing</a>
                    : 
                    <Link to="/#booking-options">Pricing</Link>
                    }
                    <Link to="/frequently-asked-questions">FAQ</Link>
                </div>
                <Link to="/booking" className="book-button">
                    <RippleButton text="BOOK A SESSION"/>
                    {/* <a target="_blank" href="https://calendly.com/thoughtfulhq/30min">Book A Free Discovery Call</a> */}
                    {/* <a href="/contact">BOOK A SESSION</a> */}
                </Link>
                {/* <Hamburger setActive={() => setActive(!active)} active={active}/> */}
                <Hamburger setActive={() => onClickGood()} active={active}/>
            </div>
            {/* <div className={active? "sidedrawer" : "sidedrawer drawertoggle"}> */}
            <div className={active? "sidedrawer" : "sidedrawer toggle"}>
                <a className="close-btn" onClick={() => onClickGood()}><p>Close</p><Hamburger setActive={() => setActive(!active)} active={active}/></a>
                <Link to="/" onClick={() => onClickGood()}>Home</Link>
                {/* <Link to="/projects" onClick={() => onClickGood()}>About</Link> */}
                <Link to="/" onClick={() => {onClickGood()}}>Tracks</Link>
                <Link to="/" onClick={() => {onClickGood()}}>Pricing</Link>
                <Link to="/frequently-asked-questions" onClick={() => onClickGood()}>FAQ</Link>
                <Link to="/contact" onClick={() => onClickGood()}>Book Now</Link>
                <a className="email" href="mailto:daniel@thoughtfulhq.com">daniel@thoughtfulhq.com</a>
                <a className="phone" href="tel:+64220780868">Call +64 27 738 1275</a>
            </div>
        </Wrapper>
    )
}