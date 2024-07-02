import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/index-components/hero"
import Lessons from "../components/index-components/lessons"
import Tracks from "../components/index-components/tracks"
import Coach from "../components/index-components/coach"
import Booking from "../components/index-components/booking"

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Lessons/>
      <Tracks/>
      <Coach/>
      <Booking/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>MOTOSCHOOL TAURANGA | MOTO TRIALS COACHING</title>
