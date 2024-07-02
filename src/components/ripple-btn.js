import React from "react"
import styled from "@emotion/styled"

const Wrap = styled.div`
width: fit-content;
a {
display: flex;
justify-items; center;
align-items: center;
// width: 250px;
}
.ripple-text {
font-size: 16px!important;
transition: .3s;
text-align: center;
margin: 0!important;
padding: 0!important;
z-index: 100;
position: relative;
color: white!important;
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
	top: calc(50% - 5px);
	left: calc(50% - 5px);
	-webkit-transform: scale(0);
	transform: scale(0);
}

.ripple:hover {
	// background: #74b126;
    p {
    color: black!important;
    }
    cursor: pointer;
}

.ripple:hover::before {
	-webkit-transform: scale(12);
	transform: scale(33);
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
`

export default function RippleButton({text}){
return (
    <Wrap>
        <a className="ripple"><p className="ripple-text">{text}</p></a>
    </Wrap>

)
}