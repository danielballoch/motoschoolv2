import React, { useRef } from "react"
import styled from "@emotion/styled"
import HeroVideo from "../images/TestVideo.webm"

const Wrapper = styled.div`
background-color: red;
`

export default function HoverTest(){
    return (
    <Wrapper>
        <video loop autoPlay muted>
            <source src={HeroVideo} type="video/webm"/>
        </video>
    </Wrapper>
    )
}

