import React, { useState, useRef, createContext, useContext } from "react"
import Navbar from "./nav"
import Footer from "./footer"
import gsap from 'gsap'
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import styled from "@emotion/styled"
import { ShareContextProvider } from "../components/context"

const Wrapper = styled.div`
#smooth-wrapper {
  max-width: 100vw;
  overflow-x: clip;
  margin-top: 0;
}
`

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export const PageContext = createContext(null)

export default function Layout({children, dark, home}){
  const [scrollPosition, setScrollPosition] = useState()
  const main = useRef();
  const smoother = useRef();
  // console.log("hello hello", dark)

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, 
        effects: false, 
        onUpdate: (self) => {
          setScrollPosition(self.scrollTop())
          // console.log("gsap self:", self.scrollTop())
        }
      });
    },
    { scope: main }
  );



  return (
    <Wrapper>
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        {/* <Navbar smoother={smoother}/> */}
        <Navbar smoother={smoother} dark={dark} home={home}/>
        <ShareContextProvider Value={[scrollPosition, smoother]}>
          <main>{children}</main>
        </ShareContextProvider>
        <Footer smoother={smoother} home={home}/>
      </div>
    </div>
    </Wrapper>
  )
}
