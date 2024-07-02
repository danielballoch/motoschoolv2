import React, {useState} from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
// display: none;
transition: .3s;
:hover {
  background: #635bff;
}
margin: 0 20px;
padding: 0 10px;
border-radius: 15px;
margin-right: 10%;
background-color: #000000;
height: 48px;
z-index: 200;
box-sizing: border-box;
  .burger {
    display: flex;
    outline: none;
    height: 48px;
    width: 30px;
    border: 0px;
    padding: 0px;
    background: transparent;
    transition: all 250ms ease-out;
    cursor: pointer;
  }
  
  .burger:before, .burger:after {
    box-sizing: border-box;
    top: 40;
    content: '';
    width: 30px;
    height: 3px;
    border-radius: 40px;
    position: absolute;
    background: #1a1a1a;
    background: white;
    transition: all 250ms ease-out;
    will-change: transform;
  }
  
  .burger:before {
    transform: translateY(15px);
  }
  
  .burger:after {
    transform: translateY(29px);
  }
  
  // line transition
  
  .active.burger:before {
    transform: translateY(22px) rotate(45deg);
  }
  
  .active.burger:after {
    transform: translateY(22px) rotate(-45deg);
  } 
@media(max-width: 1060px){
  display: block;
}
`

export default function Hamburger({setActive, active}){
    // const [active, setActive] = useState(false)
    return(
        <Wrapper onClick={(active) => setActive(!active)} className="hamburger">
            <button aria-label="Mobile Menu" class={active? "burger active" : "burger"}  ></button>
        </Wrapper>
    )
}
