import React from 'react'
import styled from 'styled-components'

const Outerdiv = styled.div`
display: flex;
padding: 117px 160px;
flex-direction: column;
align-items: center;
gap: 91px;
align-self: stretch;
background: var(--White, #FFF);
`
const Headext = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
align-self: stretch;
`
const Uppertext = styled.div`
color: var(--Black, #0E0E0F);
text-align: center;
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px; /* 106.78% */
letter-spacing: -2.097px;
`
const LowerText = styled.div`
width: 659.086px;
color: var(--neutrals-grey-8, #32333A);
text-align: center;
font-family: Neurial Grotesk;
font-size: 22.366px;
font-style: normal;
font-weight: 400;
line-height: 32.849px; /* 146.875% */
`
const Imgdiv = styled.div`
display: flex;
align-items: flex-start;
gap: 20px;
align-self: stretch;
`
const Frame6 = () => {
  return (
    <div>
        <Outerdiv>
            <Headext>
                <Uppertext>
                    Start Small. Earn Big.
                </Uppertext>
                <LowerText>
                    Deposity a minimum of 1000 and get a Deposit bonus +<br/> dedicagted relationship manager
                </LowerText>
            </Headext>
            <Imgdiv>
            <img style = {{height: "450px"}} src = "https://i.ibb.co/tQZn35Y/percent.png"/>
            <img style={{height:"450px"}} src= "https://i.ibb.co/ZzQCF5p/dedi.png"/>
            </Imgdiv>
        </Outerdiv>
    </div>
  )
}

export default Frame6