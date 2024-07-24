import React, {useEffect} from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const Wrapper = styled.div`
height: 93vh;
padding: 10px;
background-color: black;
color: white;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const IndexPage = (data) => {

  return (
    <Layout>
        <Wrapper>
            <h1>YOUR BOOKING REQUEST HAS BEEN SENT!!</h1>
            <p>There's still one more step to confirm your booking so please check your email inbox!</p>
        </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>CONTACT SUCCESS | MOTOSCHOOL TAURANGA</title>
