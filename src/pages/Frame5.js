import React from 'react'
import styled from 'styled-components'


const Outerdiv = styled.div`
display: flex;
padding: 150px 0px;
flex-direction: column;
align-items: center;
gap: 64px;
align-self: stretch;
`
const Textdiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 28px;
`
const Headtext = styled.div`
width: 846px;
color: var(--electric-green-primary, #EBFF25);
text-align: center;
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px; /* 106.78% */
letter-spacing: -2.097px;
span{
    color: var(--White, #FFF);
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px;
letter-spacing: -2.097px;
}
`
const Subtext = styled.div`
width: 659.086px;
color: var(--neutrals-grey-4, #E7E7EA);
text-align: center;
font-family: Neurial Grotesk;
font-size: 22.366px;
font-style: normal;
font-weight: 400;
line-height: 32.849px; /* 146.875% */
`
const Horidiv = styled.div`
display: flex;
width: 1140px;
height: 171px;
justify-content: space-around;
align-items: center;
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.25);
background: rgba(16, 16, 16, 0.40);
backdrop-filter: blur(26.25px);
`
const HoriText = styled.div`
color: var(--White, #FFF);
text-align: center;
font-family: Neurial Grotesk;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Lastimg = styled.div`
width: 1130px;
height: 510px;
`
const Frame5 = () => {
  return (
    <div>
        <Outerdiv>
            <Textdiv>
                <Headtext>
                    Unlock <span>New Frontiers.</span>
                </Headtext>
                <Subtext>
                    Are you a stock trader looking for new opportunities to make money? We got you covered!
                </Subtext>
            </Textdiv>
            <Horidiv>
                <HoriText>
                    Same<br/> 
                    Strategies
                </HoriText>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="89" viewBox="0 0 2 89" fill="none">
                    <path d="M1 0.803711L1 88.8037" stroke="#A9A9A9"/>
                </svg>
                <HoriText>
                    Same<br/> 
                    Indicators
                </HoriText>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="89" viewBox="0 0 2 89" fill="none">
                    <path d="M1 0.803711L1 88.8037" stroke="#A9A9A9"/>
                </svg>
                <HoriText>
                    Better<br/> 
                    Leverage
                </HoriText>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="89" viewBox="0 0 2 89" fill="none">
                    <path d="M1 0.803711L1 88.8037" stroke="#A9A9A9"/>
                </svg>
                <HoriText>
                    24 × 7<br/> 
                    Trading
                </HoriText>
            </Horidiv>
            <Lastimg>
                <img style= {{width: "1130px",
height: "510px"
}}src = "https://i.ibb.co/09LrMLd/line.png"/>
            </Lastimg>
        </Outerdiv>
    </div>
  )
}

export default Frame5