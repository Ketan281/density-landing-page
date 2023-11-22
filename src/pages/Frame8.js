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

const Headtext = styled.div`
color: var(--White, #FFF);
text-align: center;
font-family: Neurial Grotesk;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px; /* 106.78% */
letter-spacing: -2.097px;
`

const Nextdiv = styled.div`
display: flex;
padding: 0px 216px;
flex-direction: column;
align-items: center;
gap: 80px;
align-self: stretch;
`
const Upperdiv = styled.div`
display: flex;
width: 954px;
justify-content: center;
align-items: center;
align-content: center;
gap: 80px;
flex-wrap: wrap;
`
const Lowerdiv = styled.div`
display: flex;
width: 80%;
flex-basis:21%;
margin-left:10%;
justify-content: center;
align-items: center;
align-content: center;
gap: 40px;
align-self: stretch;
flex-wrap: wrap;
`
const LowerInnerdiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
height: auto;
width: auto;
p{
    color: var(--White, #FFF);
font-family: Neurial Grotesk;
font-size: 20.48px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
const Frame8 = () => {
  return (
    <div>
        <Outerdiv>
            <Headtext>
                Backed by the Best.
            </Headtext>
            <Nextdiv>
                <Upperdiv>
                    <img style={{width: 184.62, height: 40}} src="https://s3-alpha-sig.figma.com/img/53d0/e62b/ba79bd62e20f35b658291d29e6ac2f87?Expires=1701648000&Signature=jlR-H7y31K0EXSv-TQRo2Y5lOKnKlui4Yru1aH0~Py1SI4Qz0ZFnSOhLoON1KcuBqYyTViVIE9lTJwF1Q-~2IM159xLGqabuvot-W1E75Cz6DK88ysF8bbhzcLU-lYP2S18FvbgoB-Xz7VISzom4qnySfe30i6wjEGYLYS7il6wn3srbkugokdJPSyKa3HBbtvASUlcq8hjfkqo8a45NDqM4dLN2hIfp9iN86laEOU~dxywst4s4D-1LLdfOiTO6AeGjqtOk6J51Pw7jWXQvStSaoU3EG5DycwJwX6wrFCe~VV6Rm657RhXt17~96duipznpTiJ0ZuwipsKkT2ldgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <img style={{width: 120, height: 120.92}} src="https://s3-alpha-sig.figma.com/img/9dd0/ba9f/ed92e99606eb34b2a6aa06547d9b29b6?Expires=1701648000&Signature=ZnY3d6GZsGa4r5l9gF95w~66DY~ps1ybXKmv7Z6d8XwuU4rw0TMFKw9vxUOf0hr07iHOvxXu981jFiIcRPUJ35JqeIdWXE7Icm5dQfH4FHW~Ht5r3HeBTObZhaPxHpmtI1eMsxl8WjYhQBE4v4RzrNG1UAxqaby7jDZ~b5Xupwa9SU5Lcw2SaDR4MB6ottVIqFUtfd2gZWm5i-dqoR1blX9z6vHjQ3iss9FWbo8z0~GeD-gWBvrZGUKFiTBY382AmEf3WcHxCwJ739YcM5rUG6YQINvGr8DLmVDi8sAjnB1mo6Bx9I96fAjo1k~nqGIallSSD7yzbw8dZKXtBfz5iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <img style={{width: 236, height: 24}} src="https://s3-alpha-sig.figma.com/img/b29c/f999/88b778bd38aa84ee260b6e2a0c13a3fd?Expires=1701648000&Signature=PoQg~PSoHzu8CA2NgzdRT-wq126ayW6IS~4unYAF9IxMCc3yhoKoKnaZLCYHj53qvWzEHZ1xCN7zBiGQNpNwjiHXVS3gLt3HcVXHD8HRQIl-5eIM4CRS7HPTaYJIoEUCzdc-JnfJz0gnw3BEHhUHBHRSGn-qZHFQw2QAWhvpgkKs7JCSNS6nTUWaDBDsZhf-XJuq98lBRFm78U2IMzODnDFZ934U7ycqgp3Vvfjovtt0yzu-w1KRGgasxPeWlW3DqaINOB38wokkzZMF4DdkMYuH9JCcDlKX0CCOzUX8LLRZ3-tBzgCkX0Zc4yI8OIATW1ueWLfKVbBXZDWf~9vk1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <img style={{width: 124.24, height: 100}} src="https://s3-alpha-sig.figma.com/img/2bbf/5ab8/d824e66158857c20af76ea8fe0c96621?Expires=1701648000&Signature=VxSCXsbMCs1IrLVKGGdLcqpxW0OOOna1n3TWBdj4KxvTOhTG1nrzf4irsPkoJ5seNRPen~GtWo~YgqRNr2u3O0-ppmbJkoVzR-hjCIpc5pmizu1-PUyME-TMR0xYf2M9XS2WGEv2o2EwXG9ZJs8kceldASjqGOmgGFuQUa6q5HANExk2pwEtBUT5q5oKHvcuD~LnafxB-1bIiqL6i56tfxS~Y~uB8mw9o-~rxmRH9hJ2UrXEf8sHI7tZmaI1ZQdicDDDMg8MimATzDO6SYdrAVuMQCPPAZF~mPeDZBc60mk2tHSHzfSLFCnWDQnxScrXoZToe3ATB196B1eFaFs9jA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <img style={{width: 108.22, height: 64}} src="https://s3-alpha-sig.figma.com/img/79e8/69f6/f2f59ff3345a9ad521e0188c69a95497?Expires=1701648000&Signature=GQWb8xYDrv0gzKz3ZPXUzyRlOAQnB92BVIjYy7nw9l9cjHQbtYjiG3pNyagjYeNBpf3Y9M8brgNP~V9PWTTvpw1MVGds~sG6UqGKTgvKAuq3dtl7xF2RF1ZMEEMx05ZETdwBnYuswB1blVOy8DvxuNzU23CbKNOYDOJjgC01KZ~mBuuX5toTDDj2uG2aCKJZfseAt1U5spKamJuAXJojN885O7UR3a8O87Rgzld5wgvzGFZGPdtScKxgRBeSgpe0WOYpH3Tk50LOvXk~d9jUDYJJt1XVdKtKn9KcKNNH97eIOElP3jtt0pvKOzDwdePfT~MG-~joXTVpfo9MYwrrfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <img style={{width: 219.70, height: 40}} src="https://s3-alpha-sig.figma.com/img/5f43/3130/5f696c3e45c4a552ec15ffced05f53cd?Expires=1701648000&Signature=NY66mSyqwTkY8JHJwbuWVGPcE7yEwXcZILUcV-i6P1T-VXKtFlpS2nwf1ndiW4wYeqKOX0LUI5hZciRx0Il6Nc~bjHJc1DRJbfoonyGa~HYQj37uihNPHWybePAPDwn2XDd-On4pMKXrfqxsmINCwTfLwPUjb~iBctz-S7hZLZsyrSNNpNROn~KwfA5zlmY5v5GFh61rf-3CwEmdA84FhQb3TWiIRGPtfB3jR8zu2lIUtJC2GES2TeomZyT0arK1vRNxtPGiznOwpXmVgq1kHjIG8qg9HmmXuj0U1XYAie0RrvJtKRAc1Q9rJtTZdGqHOCaiE1dbDdv0oCv5pTL7aQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <img style={{width: 182.02, height: 64}} src="https://s3-alpha-sig.figma.com/img/1f52/bd5e/e156cf832b1e4d808a359816ea95c65d?Expires=1701648000&Signature=LvHGIiDygLNLk1yad-2k11kQqi2F0JoW0GKcJNj1SykS~WW6Ojc4ijhtwaJ~HewFOG0a97SYxzolVJqOxvuyV0hPu2jsnGk7H3TDinCct02ZszySbc1uxpZinpm0utsAfORoOxbnFKFhePkf-qKSQXwSa9eoaDIYJGsHT5VBRj20zGl33MOAcpPu17XydfBtJXqanWBKUykNnER8aZOEugdP6QoF7Tdr~2R8Aez7jvYa0~TSzAB0OJ7KqPCgJR072Mt1khb2A9nhJMNFf7aP0jD7Lq7WlsYymtP98kOofgdtuHZSc8mWFvxwOVHl0LlbmjMWyxE39Q4ai7UnwE1x5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                </Upperdiv>
                <Lowerdiv>
                    <LowerInnerdiv>
                        <img style={{width: "120px",height: "138px"}} src="https://s3-alpha-sig.figma.com/img/c40f/8c85/fd87bad93590b673054e42225fcc910c?Expires=1701648000&Signature=h2XXNh-DrcGxYiZsO13eCSuwCoCbOkLQy-7tbfta-baZ8p3RayaxPNY6l75Xc-zxgk6Am5UIntVDk2BzgMyyA5YCD~JLe4XmFrvd4x3-jCZ7pBoZjbaxS5XwRXY0IiW8xTpv8ru7uyHx9YUuv88GepahTgPgj8hnNv0312Qs3mkl~hEHf5LUEan9JcWHED1ehTI73YhfOcIPEXDDrA20jR3SFg0dNsE1d07Gp6iyJoL2lXfv9x2yRJtdyqDXLI5acYCPHnu3UOmG4Z7~jjnpcwzm-p1Zjsj1gkRpvdxYFOm4JmJv0tWWqUfcEk3pRBlYAQmRNjHBROcFkH9ZxTE1cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        <p>Utsav Somani</p>
                    </LowerInnerdiv>
                    <LowerInnerdiv>
                        <img style={{width: "120px",height: "138px"}} src="https://s3-alpha-sig.figma.com/img/7a04/efbc/3ebeb0ed906ac0271f1359c500fe5016?Expires=1701648000&Signature=VKTrt1dpi28rKocZ5lJXYIeh8BbCSXyOo6pPevijljtPrgFblCpB8ffrb46dRSMRXnoN3fTka6zfgSllegm78gW-j8lRwfzX2~0ZGKgDvh7YzA0EZdbg6LB6u1F-~JD0~tw8EQUlPdvSX6TuDRTgR18V6~Njpc1tJ5gFGNTMAB1RJvJdEhtTRYX56t1GEMLtwrSOKntqy5gu~LAad4ANyRbPLAbsLm7aSIeK6Y3Ape1M6wDJpt8fbFSRcC5z7cxQwOgqvpA5NLWHkjz-kgKvAZG7HkNfOI3BhekftKp7Inpns4s-BjJUgA-mpkl70BCZEKfMHniEvKHnQ4cZzVqiCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        <p>Aditya Nagarsheth</p>
                        <span style={{color: "white",fontSize:"12px"}}>Perpetual Value partners</span>
                    </LowerInnerdiv>
                    <LowerInnerdiv>
                        <img style={{width: "120px",height: "138px"}} src="https://s3-alpha-sig.figma.com/img/fd16/29ae/c9abe1cd861d205ff5bcdae7813f3f98?Expires=1701648000&Signature=Kt2-PIllw9jUSe6xxjaqxyU47~BWMZifebTNBqVTMFbQZ515ZW1R68YrTjJJ0Vmh~gfie6jMyrE-O7HfD7KDssNT0vIsZfbCFDF5MgBrLpinrXme5C2D0Oi30QuG~fG~h5aogDpz6p7X3qnJAnjlnFwchvrhvbBv3l2MyXtQ8QoXILX6tD0mUAz5gf-LQiTIikdkGIK8obpRE2DYjv4UWB440vWZk74RoprgJJGCQd2zbRlthyZn2~HswpQoQA~Sdosg7EcY1Bfx8c3~BNyhdBHo8HFAIN026IxsbhvZ6AmiRXQSsVlcK6yl7u3y-lovryRy5K~ty4-HXjTE41E8zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        <p>Gokul Rajaram</p>
                    </LowerInnerdiv>
                    <LowerInnerdiv>
                        <img style={{width: "120px",height: "138px"}} src="https://s3-alpha-sig.figma.com/img/9a24/aeef/826d7dee9d2b63149fd5f3430bd0a143?Expires=1701648000&Signature=d8YtzSayE2H4lvdrQ4F4tKr1Oc~9eHdigfM3rwUMnvLybF5oqlO0R-Wnn64xvK-B0JuyQutibcRbi1hYs6Cf-xN-ogbIfeu247qbbukVxqqnXrQf2L84~eWNtM1lU4XXzp~YMfHiZr9rSAUz-nDUgzhgKvYhN37~QYLHOnIkxUsTVZs49Y5GQhrJU5tVzvYZ0dsNUdReXvh4ZuoaeDiIqskTXILt6zw8PNhAxOODHzIlCuvwqOwBeIyW1CoWXdx1K4Hgwz591l7XWy8A73H3dut6o5VIBUZvKv9afcEY61sdGgy2v4lzaaVEE8UuijBNpeUnHdNyr4PoSiRhF6P0Aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        <p>Sajid Rehman</p>
                        <span style={{color: "white",fontSize:"12px"}}>My asia vc</span>
                    </LowerInnerdiv>
                    <LowerInnerdiv>
                        <img style={{width: "120px",height: "138px"}} src="https://s3-alpha-sig.figma.com/img/8ccd/41be/45ba19d47580a2809176af3518efcaaa?Expires=1701648000&Signature=Cj1t33bJhY~G4wzwac57ovIlmT7oEqlezzNUuUucXakUvze~owAvH2cpDpZBJwN-xhZ7G5EPmbysvGBbuyp4tSZt3441Gp8bCJ6qp3sOO-VO6yfZSsKlLvfvUBcpmcttwHq3qr6CGEhFJOl7UDNDi5dscLUB2t~cfQ5cMaigqQ7WZRvxPOQf5k6y~3ghsfhoR-KepAJ2U2akNuIit6xQzod26xYSUUa9ubB09Wm2vu8GIisjfSaxv44~1A09NWy8~jIPEHaSYPRTTWNpns57pbC0GUE~~ViacawL~Po8j215o~otMTMDfF2JTwf9cKPVGc8Lgbcpzex4SXMZm-8z~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        <p>Arjun Sethi</p>
                    </LowerInnerdiv>
                    <LowerInnerdiv>
                        <img style={{width: "120px",height: "138px"}} src="https://s3-alpha-sig.figma.com/img/bfdd/9aa1/d8dd1506f68470f67aa0c7878837a6c4?Expires=1701648000&Signature=muK1XHJLvLmzFPhnDMIV3PiRqRE3muod7d1no1GFBNzvHnPp7rUF7~opvz-N0w80bP-MwVGsDx0Ki6ZPVsI2kdAfp6J0RS9hk~KGG2hM56e6ahn60ieccd8C5ks-M6n9-hPq2LVDB4XZYiwW96MrNony1SNBBxtZlBhVt4CI9m26O2z7mACeroZ1IuKd1gq1XqqepaKr76b4a~6F5tuN8CToAqeRiErVTjV8iXevGvuxwdvDvUKMNUHg10XlmikH1i0cvTvvRkhK-87ZXdekrMZe0L7dkY09ajk-yVoumgSYL9jI4JyOzDXKQ1-nlhqSXL1A2XI0IUHztdpf9QTG4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        <p>Kunal Shah</p>
                    </LowerInnerdiv>
                    <LowerInnerdiv>
                        <img style={{width: "120px",height: "138px"}} src="https://s3-alpha-sig.figma.com/img/51b6/81b6/9d63409d7f08af8d59d02067b4c8ac3a?Expires=1701648000&Signature=TAPpFU6J-sipvDMOLZD-laDC0gkZyIeUkw0X-Xx7OHjKo15ZPHYJTmc4~hFuMXuh6fpz-vzSoeLoPRgIei3yUciEJwwMmya8e1rs9aXGpOZQmYasiA3aNxlhCcW279FN77HQNmfHEfiIuw5CxR3RAQRlrAGsQgvjKWE7BrDq9O2R5hMr5NGXZpY9qcFrt10KWRDWzshgCJXQGA6ZVcQITY3i6EDdREdj7NaDVfGKe7bzrhrCmQhKvJzYnj2ZCt8-GpZQkwFeIC~F4VMqKr6lKOCusqqZkdUuQD00JCimoTFn6-GwOwGr8QTt0We69WcwLrdDDH1npuQyQJbLoDWwTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        <p>Sandeep Nailawal</p>
                    </LowerInnerdiv>
                    <LowerInnerdiv>
                        <img style={{width: "120px",height: "138px"}} src="https://s3-alpha-sig.figma.com/img/3bd2/ed04/1ac2da9fdca84d463de39b2d8f01c030?Expires=1701648000&Signature=l~qLj4FROM1MpdwrMNezVlcUCofztGRbgbZwUpSMwbnJjhbUsuzq-yGHoMbgSMCZr-yI2K6pea4gL1kD4ogyCkqVHMMd6NDiW0kCb1c~9-Z-QVeLsTw7iFOiCcB5MsUMnrAN2wrQHk9BMCiUnxrcCS5NUoXS1fkGKywc04ev7YDfKZikCg3rw-BJ-j0elGXNMAcmJdGtnyDNa57EwXMRuzaT1AZd~AI~5JJhY3KS1HzTgNWragHwU8D5BuTXyrjh1Zh-WCEM9CSQld14xv8FDrF8TpKt70JK145AkBd-0nfbIWBS6r879G5hCyM5OsHrds1C3JdzOfWo4RlTIwAEhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        <p>Karn Vivek Nagpal</p>
                    </LowerInnerdiv>
                </Lowerdiv>
            </Nextdiv>
        </Outerdiv>
    </div>
  )
}

export default Frame8