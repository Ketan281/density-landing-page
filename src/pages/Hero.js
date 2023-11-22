import React from 'react'
import styled from 'styled-components'


const HeroDiv = styled.div`
    display: flex;
    padding: 80px 0px 120px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 76px;
    align-self: stretch;
    color:white;
`
const TextDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
`
const UpperText = styled.div`
width: 693px;
height: 202px;
color: var(--White, #FFF);
text-align: center;
font-family: Neurial Grotesk;
font-size: 96px;
font-style: normal;
font-weight: 700;
line-height: 100px; /* 104.167% */
letter-spacing: -4.19px;
 span {
    background: linear-gradient(97deg, #78E65D 47.68%, #D5FA39 70.85%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Neurial Grotesk;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: 100px;
    letter-spacing: -4.19px;
 }
`
const LowerText = styled.div`
    color: var(--neutrals-grey-4, #E7E7EA);
    text-align: center;
    font-family: Neurial Grotesk;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`
const GroupDiv = styled.div`
width: 779.594px;
height: 668.698px;
`

const Hero = () => {
  return (
    <div>
        <HeroDiv>
            <TextDiv>
                <UpperText>
                    It’s time to trade,
                    the <span>future.</span>
                </UpperText>
                <LowerText>
                    Trade BTC, ETH Futures with 125x leverage and earn rewards.
                </LowerText>
            </TextDiv>
            <GroupDiv>
                {/* <Layout1>
                    <Layout1Image1>

                    </Layout1Image1>
                    <Layout1Image2>

                    </Layout1Image2>
                    <Layout1Image3>

                    </Layout1Image3>
                </Layout1> */}
                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                    <div style={{width: 261.34, height: 529.67, left: 0, top: 73.57, position: 'absolute'}}>
                        <img style={{width: 261.34, height: 529.67, left: -0, top: -0, position: 'absolute', opacity: 0.70}} src="https://s3-alpha-sig.figma.com/img/d865/3ece/ef686fc251c25adef38a58b11a96f880?Expires=1701648000&Signature=ASF0jpSbziVa8TagTJ~HmxA9CTCpgYq1GkmnoWXUZrtkKAnxSkiZ5oAKCVefNX~fotWcLuyo9rsLav9AYNtQYfdWLd7Sb7J6T3Vd-7Y5tGmFNQo59dkpZeBZBVkz~~3R6wR3hpjwCdibZ8Mc2hSfBSCrsD8MxSSkq~iWUtSBItsBPzYiqyFHWW7qbVTBABqyYDAe57SCb5GVQZctmn9JhE06QZyDs7v3k8vFDBhFWd9B4D2PlJMXu7Bvb6UoRGX~SsNbLexiZLKQeXjh6TSL7t989F2cYYj7QNHdkhAcTcu7BNKSELzWVc62GZQmXDtSlINyF820Zjim8tlRX8ojUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                        <img style={{width: 261.34, height: 529.67, left: -0, top: -0, position: 'absolute'}} src="https://s3-alpha-sig.figma.com/img/639f/61fd/0b4e7a7f3ba8340e9a1a5d93ee8b2786?Expires=1701648000&Signature=EJm9XrDNnrVfU9ijbB~QIsZ2RCXEO7GdK4nSzZf1pLfGS0edcv5hFk428x267MD~52tLGUke~v0GnGZG1ByCzWOvCkEnm60ePlKRNH~hmO4i7kSIxe6QtWh7~9cUjGC3E-f5GrpPSIZdsfDzUCuzNx2IXdi9kqXE9tzBudQQ-hSyZ27uv4nPRJe4JgzEkduzjFLX~7MAeQ0P6KhWw8yodKROXoBulWtuXRkyMCefg5HHjMZt9dsmBlrsHWOazzxicgB6S~UCzUeYxwvY6By0lpCVfSyY3PxIJOr6Ojvc3SnbqGO7JuALmBRRilU2YF7258DRnO56he73fYRrUEtRrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                        <img style={{width: 235.44, height: 508.04, left: 12.43, top: 10.10, position: 'absolute'}} src="https://s3-alpha-sig.figma.com/img/dd3a/6dab/cf66289d3ad63341d9ff439e9859ddef?Expires=1701648000&Signature=Aet5rS7M4k-vh~iCh-fNoO2gfi-Xs4-rZFMtkRyTPjGqFV8HIMqCvgTiOc1jd6lkAzVUhkEctTb7B~zJcVs~3IJfjoqK2LG5ABmBqKYXtSTaKcqEPdegWS0PPRsfMyICAxGtM7SJIBLKKfddE9ImUGBU8AhE6rw5r1TdRRoMrVdmu4wui~Be6XRp8UeJTG28sXZKBBSxbjI2INFJMo1feUiDHd8ZQpu5LxPjyM35jcFdYRyr4WuRtvIuQSSxzPK3VMAbI~9e4DvOvzW4BQF-nRCvYL8azJaxlG51x03wjNWMrN53yfai8MavMhqeSS4dlk7ZK8PAVFj8Euyeln7Tig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div style={{width: 260.41, height: 527.79, left: 519.18, top: 75, position: 'absolute'}}>
                        <img style={{width: 260.41, height: 527.79, left: 0, top: 0, position: 'absolute', opacity: 0.70}} src="https://s3-alpha-sig.figma.com/img/d865/3ece/ef686fc251c25adef38a58b11a96f880?Expires=1701648000&Signature=ASF0jpSbziVa8TagTJ~HmxA9CTCpgYq1GkmnoWXUZrtkKAnxSkiZ5oAKCVefNX~fotWcLuyo9rsLav9AYNtQYfdWLd7Sb7J6T3Vd-7Y5tGmFNQo59dkpZeBZBVkz~~3R6wR3hpjwCdibZ8Mc2hSfBSCrsD8MxSSkq~iWUtSBItsBPzYiqyFHWW7qbVTBABqyYDAe57SCb5GVQZctmn9JhE06QZyDs7v3k8vFDBhFWd9B4D2PlJMXu7Bvb6UoRGX~SsNbLexiZLKQeXjh6TSL7t989F2cYYj7QNHdkhAcTcu7BNKSELzWVc62GZQmXDtSlINyF820Zjim8tlRX8ojUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                        <img style={{width: 260.41, height: 527.79, left: 0, top: 0, position: 'absolute'}} src="https://s3-alpha-sig.figma.com/img/639f/61fd/0b4e7a7f3ba8340e9a1a5d93ee8b2786?Expires=1701648000&Signature=EJm9XrDNnrVfU9ijbB~QIsZ2RCXEO7GdK4nSzZf1pLfGS0edcv5hFk428x267MD~52tLGUke~v0GnGZG1ByCzWOvCkEnm60ePlKRNH~hmO4i7kSIxe6QtWh7~9cUjGC3E-f5GrpPSIZdsfDzUCuzNx2IXdi9kqXE9tzBudQQ-hSyZ27uv4nPRJe4JgzEkduzjFLX~7MAeQ0P6KhWw8yodKROXoBulWtuXRkyMCefg5HHjMZt9dsmBlrsHWOazzxicgB6S~UCzUeYxwvY6By0lpCVfSyY3PxIJOr6Ojvc3SnbqGO7JuALmBRRilU2YF7258DRnO56he73fYRrUEtRrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                        <img style={{width: 234.60, height: 506.24, left: 12.39, top: 10.07, position: 'absolute'}} src="https://s3-alpha-sig.figma.com/img/a407/2e1d/e72aa35eb8aeb937dcc630e8cae3f24c?Expires=1701648000&Signature=B7YUrYz376mSpu2hRW1AAgwbDDwnFXoAIFvMmoSSpMpSTKvbd5RsPt9UbNfPYrRagmjX5TH5NQ48od-W9uRZgYZoo4RXC3bYp1DCt9ZHzjv2OhsWz1F2chwh6Lsql6TLjucy9skVtdTG8ISPhyuqRHyzlhj2jo~HWX0Wc9mFSY6F6KRaoVsAODEW77krgMmmYxmdy7GqxAxc1bdPLqKuPLewjiU0RvCAW7sMuvoPWSYQ70DnvVuhoJyoHLeEoARHS5OfQYzXCKcHGsq81fBvGSCwpR8vY2PYlEFIzGnrwQH2Jnm-Zgb1L3eUcGTP--XtRaY6HWe5UkKzDloapiP-LA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                    <div style={{width: 329.93, height: 668.70, left: 225.78, top: 0, position: 'absolute'}}>
                        <img style={{width: 329.93, height: 668.70, left: -0, top: -0, position: 'absolute', opacity: 0.70}} src="https://s3-alpha-sig.figma.com/img/d865/3ece/ef686fc251c25adef38a58b11a96f880?Expires=1701648000&Signature=ASF0jpSbziVa8TagTJ~HmxA9CTCpgYq1GkmnoWXUZrtkKAnxSkiZ5oAKCVefNX~fotWcLuyo9rsLav9AYNtQYfdWLd7Sb7J6T3Vd-7Y5tGmFNQo59dkpZeBZBVkz~~3R6wR3hpjwCdibZ8Mc2hSfBSCrsD8MxSSkq~iWUtSBItsBPzYiqyFHWW7qbVTBABqyYDAe57SCb5GVQZctmn9JhE06QZyDs7v3k8vFDBhFWd9B4D2PlJMXu7Bvb6UoRGX~SsNbLexiZLKQeXjh6TSL7t989F2cYYj7QNHdkhAcTcu7BNKSELzWVc62GZQmXDtSlINyF820Zjim8tlRX8ojUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                        <img style={{width: 329.93, height: 668.70, left: -0, top: -0, position: 'absolute'}} src="https://s3-alpha-sig.figma.com/img/639f/61fd/0b4e7a7f3ba8340e9a1a5d93ee8b2786?Expires=1701648000&Signature=EJm9XrDNnrVfU9ijbB~QIsZ2RCXEO7GdK4nSzZf1pLfGS0edcv5hFk428x267MD~52tLGUke~v0GnGZG1ByCzWOvCkEnm60ePlKRNH~hmO4i7kSIxe6QtWh7~9cUjGC3E-f5GrpPSIZdsfDzUCuzNx2IXdi9kqXE9tzBudQQ-hSyZ27uv4nPRJe4JgzEkduzjFLX~7MAeQ0P6KhWw8yodKROXoBulWtuXRkyMCefg5HHjMZt9dsmBlrsHWOazzxicgB6S~UCzUeYxwvY6By0lpCVfSyY3PxIJOr6Ojvc3SnbqGO7JuALmBRRilU2YF7258DRnO56he73fYRrUEtRrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                        <img style={{width: 297.24, height: 641.39, left: 15.70, top: 12.75, position: 'absolute'}} src="https://s3-alpha-sig.figma.com/img/2a43/047d/d8e56f9e87e7165c48d02898b7d8b4e7?Expires=1701648000&Signature=SlBs4qbD9EtuHPxGp8zOfRemWqJUC7RKWVlBJK8xhli~sS7InOWclW2FoLO0vfpMkjvpxxxXYm7Q6GCmtZSE3TP5BZPFuli0WjLpBNOeNscjZzX0nJisdnTbXXrlxJEnzcYc0fb3eQvXQy829L0r35DhjqDqUWT10qZ-cpIFlcq~wlv5vK~S0ET6kP~hNL0jfHg4ssythvdhzpJ04aeVpbuSJTcozkzZscRT-OzxwSTmn8NX4lljOXBz-HQzOgb12A-YiLtOZJ1DuXQc3MkVqEykCR1qvZ86rGM~0UqPm8GVFSGbGsbqzdFwFAc5auKNpLfFtzZ2CF21bLQE2cQraQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                </div>
            </GroupDiv>
        </HeroDiv>
    </div>
  )
}

export default Hero