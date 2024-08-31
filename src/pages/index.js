import React, {useEffect} from "react"
import Layout from "../components/layout"
import Hero from "../components/index-components/hero"
import Lessons from "../components/index-components/lessons"
import Tracks from "../components/index-components/tracks"
import Coach from "../components/index-components/coach"
import Booking from "../components/index-components/booking"
import HoverTest from "../components/index-components/hover-test2"


const IndexPage = (data) => {
  console.log("index data", data)

  
  return (
    <Layout home={true}>
      <Hero/>
      {/* <HoverTest/> */}
      <Lessons/>
      <Tracks/>
      <Coach/>
      <Booking/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>MOTOSCHOOL TAURANGA | MOTO TRIALS COACHING</title>
