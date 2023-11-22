import * as React from "react"
import styled,{ createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"
import Navbar from "./Navbar"
import Hero from "./Hero"
import LowerHero from "./LowerHero"
import Frame2 from "./Frame2"
import Frame3 from "./Frame3"
import Frame4 from "./Frame4"
import Frame5 from "./Frame5"
import Frame6 from "./Frame6"
import Frame7 from "./Frame7"
import Frame8 from "./Frame8"
import Frame9 from "./Frame9"
import Frame10 from "./Frame10"
import Frame11 from "./Frame11"
const GlobalStyle = createGlobalStyle`
  ${reset}
`


const Base = styled.div`
  margin: -8px;
  padding: -8px;
  background: #000000;
`

const IndexPage = () => {
  return (
    <>
        <Base>
          <Navbar/>
           <Hero/>
           <LowerHero/>
           <Frame2/>
           <Frame3/>
           <Frame4/>
           <Frame5/>
           <Frame6/>
           <Frame7/>
           <Frame8/>
           <Frame9/>
           <Frame10/>
           <Frame11/>
           
        </Base> 
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
