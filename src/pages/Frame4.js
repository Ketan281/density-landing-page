import React from 'react'
import styled from 'styled-components'

const OuterDiv = styled.div`
display: flex;
padding: 140px 0px;
flex-direction: column;
align-items: center;
gap: 64px;
align-self: stretch;
`
const UpperTextDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
p{
    color: var(--White, #FFF);
text-align: center;
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px; /* 106.78% */
letter-spacing: -2.097px;
}
span{
    color: var(--White, #EBFF25);
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px;
letter-spacing: -2.097px;
}
div{
    color: var(--neutrals-grey-4, #E7E7EA);
text-align: center;
font-family: Neurial Grotesk;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32.849px; /* 136.873% */
width: 659.086px;
}
`
const ImgDiv = styled.div`{
    width: 1087px;
height: 652px;
flex-shrink: 0;
background: url("../images/stock.png"), lightgray 0% 0% / 64.93775248527527px 64.93775248527527px repeat;
mix-blend-mode: overlay;
}`
const ButtonDiv = styled.div`
display: flex;
height: 48px;
padding: 24px 48px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 8px;
background: linear-gradient(86deg, #D4F938 23.09%, #32D875 108.69%);
box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.80);
backdrop-filter: blur(5px);
cursor:pointer;
p{
    color: #000;
font-family: Neurial Grotesk;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
}
`
const Frame4 = () => {
  return (
    <div>
        <OuterDiv>
            <UpperTextDiv>
                <p>Explore the Markets
                    <br/>like it is your <span>Playground</span>.</p>
                <div>
                    Search for your favorite coins and stay ahead of the market
                </div>
            </UpperTextDiv>
            <ImgDiv>
            <img src="https://i.ibb.co/G0VyM4C/stock.png"/>
            </ImgDiv>
            <ButtonDiv>
                <p>Explore Markets</p>
            </ButtonDiv>
        </OuterDiv>
    </div>
  )
}

export default Frame4