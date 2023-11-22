import React from 'react'
import styled from 'styled-components'

const OuterDiv = styled.div`
color: white
display: flex;
padding: 0px 216px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;
`
const InnerDiv = styled.div`
display:flex;
    height: 171px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    // border: 1.5px solid rgba(50, 216, 117, 0.96);
background: rgba(0, 0, 0, 0.05);
box-shadow: 0px 0px 10px 0px rgba(235, 255, 37, 0.20);
backdrop-filter: blur(26.25px);
`
const InnerTextDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
`
const UpperText = styled.div`
color: var(--electric-green-primary, #EBFF25);
font-family: Neurial Grotesk;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
p{
    color: #A9A9A9;
font-family: Neurial Grotesk;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 26px; /* 162.5% */
}
`
const VectImg = styled.div`
margin-left: 90px;
width: 0px;
height: 172px;
stroke-width: 1.5px;
stroke: rgba(235, 255, 37, 0.00);
`
const LowerHero = () => {
  return (
    <div>
        <OuterDiv>
            <InnerDiv>
                <InnerTextDiv>
                    <UpperText>
                        00%
                        <p>
                        Conversion Fee 
                    </p>
                    </UpperText>
                    
                    <VectImg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="172" viewBox="0 0 3 172" fill="none">
                            <path d="M1.5 0.198242L1.50001 172.198" stroke="url(#paint0_linear_1_96)" stroke-opacity="0.4" stroke-width="1.5"/>
                            <defs>
                                <linearGradient id="paint0_linear_1_96" x1="2" y1="0.198242" x2="2.00001" y2="172.198" gradientUnits="userSpaceOnUse">
                                <stop offset="0.15625" stop-color="#EBFF25" stop-opacity="0"/>
                                <stop offset="0.494792" stop-color="#EBFF25"/>
                                <stop offset="0.854167" stop-color="#EBFF25" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                            </svg>
                    </VectImg>
                </InnerTextDiv>
                <InnerTextDiv>
                    <UpperText>
                        500mn+
                        <p>
                        Liftime Volume Traded 
                    </p>
                    </UpperText>
                         
                    <VectImg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="172" viewBox="0 0 3 172" fill="none">
                            <path d="M1.5 0.198242L1.50001 172.198" stroke="url(#paint0_linear_1_96)" stroke-opacity="0.4" stroke-width="1.5"/>
                            <defs>
                                <linearGradient id="paint0_linear_1_96" x1="2" y1="0.198242" x2="2.00001" y2="172.198" gradientUnits="userSpaceOnUse">
                                <stop offset="0.15625" stop-color="#EBFF25" stop-opacity="0"/>
                                <stop offset="0.494792" stop-color="#EBFF25"/>
                                <stop offset="0.854167" stop-color="#EBFF25" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                            </svg>
                    </VectImg>
                </InnerTextDiv>
                <InnerTextDiv>
                    <UpperText>
                        250+
                        <p>
                        Total Tradable Pairs 
                    </p>
                    </UpperText>
                    
                    <VectImg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="172" viewBox="0 0 3 172" fill="none">
                            <path d="M1.5 0.198242L1.50001 172.198" stroke="url(#paint0_linear_1_96)" stroke-opacity="0.4" stroke-width="1.5"/>
                            <defs>
                                <linearGradient id="paint0_linear_1_96" x1="2" y1="0.198242" x2="2.00001" y2="172.198" gradientUnits="userSpaceOnUse">
                                <stop offset="0.15625" stop-color="#EBFF25" stop-opacity="0"/>
                                <stop offset="0.494792" stop-color="#EBFF25"/>
                                <stop offset="0.854167" stop-color="#EBFF25" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                            </svg>
                    </VectImg>
                </InnerTextDiv>
                <InnerTextDiv>
                    <UpperText>
                        15000+
                        <p>
                        Traders
                    </p>
                    </UpperText>
                </InnerTextDiv>
            </InnerDiv>
        </OuterDiv>
    </div>
  )
}

export default LowerHero