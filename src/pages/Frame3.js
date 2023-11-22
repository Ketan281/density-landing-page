import React from 'react'
import styled from 'styled-components'

const Outerdiv = styled.div`
display: flex;
padding: 140px 0px;
flex-direction: column;
align-items: center;
gap: 82px;
align-self: stretch;
`
const InnerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
`
const InnerdivText1  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
`
const UpperText = styled.div`
color: var(--White, #FFF);
text-align: center;
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px; /* 106.78% */
letter-spacing: -2.097px;
span{
    color: var(--electric-green-primary, #EBFF25);
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px;
letter-spacing: -2.097px;
}
`
const LowerText = styled.div`
color: var(--neutrals-grey-4, #E7E7EA);
text-align: center;
font-family: Neurial Grotesk;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32.849px; /* 136.873% */
`
const InnerDiv2 = styled.div`
display: flex;
padding: 0px 150px;
justify-content: center;
align-items: center;
gap: 20px;
align-self: stretch;
`
const InnerDiv21 = styled.div`
height: 438px;
flex: 1 0 0;
background: var(--neutrals-grey-9, #19191D);
`
const Frame3 = () => {
  return (
    <div>
        <Outerdiv>
            <InnerDiv>
                <InnerdivText1>
                    <UpperText>
                        Trade More. <span>Pay Less</span>.
                    </UpperText>
                    <LowerText>
                        Our low Fees Supercharge Your Profits
                    </LowerText>
                </InnerdivText1>
            </InnerDiv>
            <InnerDiv2>
               <InnerDiv21>
                <img style={{height: "438px"}} src="https://i.ibb.co/VNkYTXj/Main2.png"/>
               </InnerDiv21>
            </InnerDiv2>
        </Outerdiv>
    </div>
  )
}

export default Frame3