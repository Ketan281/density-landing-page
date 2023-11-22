import React from 'react'
import styled from 'styled-components'


const Outerdiv = styled.div`
display: flex;
padding: 117px 160px;
flex-direction: column;
align-items: center;
gap: 64px;
align-self: stretch;
background: var(--White, #FFF);
`
const Headtext = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
align-self: stretch;
`
const Upperhead = styled.div`
color: var(--Black, #0E0E0F);
text-align: center;
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px; /* 106.78% */
letter-spacing: -2.097px;
`
const Lowerhead = styled.div`
width: 659.086px;
color: var(--neutrals-grey-8, #32333A);
text-align: center;
font-family: Neurial Grotesk;
font-size: 22.366px;
font-style: normal;
font-weight: 400;
line-height: 32.849px; /* 146.875% */
`
const LowerDiv = styled.div`
display: flex;
align-items: flex-start;
gap: 20px;
align-self: stretch;
`
const Imgdiv = styled.div`

`
const Frame9 = () => {
  return (
    <div>
        <Outerdiv>
            <Headtext>
                <Upperhead>
                    Don’t take our word for it.
                </Upperhead>
                <Lowerhead>
                    Hear it from our expert community of traders who have made<br/> insane amounts in a short amount of time
                </Lowerhead>
            </Headtext>
            <LowerDiv>
                <Imgdiv>
                <img style={{height: "450px",marginLeft:"5%"}} src = "https://i.ibb.co/JBFkX6F/one.png"/>
                </Imgdiv>
                <Imgdiv>
                <img style={{height: "450px",marginLeft:"5%"}} src = "https://i.ibb.co/JBFkX6F/one.png"/>
                </Imgdiv>
                <Imgdiv>
                <img style={{height: "450px",marginLeft:"5%"}} src = "https://i.ibb.co/JBFkX6F/one.png"/>
                </Imgdiv>
            </LowerDiv>
        </Outerdiv>
    </div>
  )
}

export default Frame9