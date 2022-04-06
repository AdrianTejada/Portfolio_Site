import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { Text } from "@/comps/Text"
import { Colon } from "@/comps/Colon"
import { useState } from "react"
import { Footer } from "@/comps/Footer"

const MainCont = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -100vh;
`

const ScaleDiv = styled.div`
  width: 90vw;
  transform: scale(${props=>props.scale});
  transition-property: transform;
  transition: transform .6s;
  z-index: ${props=>props.z};
`

const ColonCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 90vw;
    align-items: flex-start;
`

const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
`


export default function TermsOfUse() { 
  const [scale, setScale] = useState(1)
  const [z, setZ] = useState(1)

  return <MainCont>
      <Menu  OnOpen={(e)=>{
        setScale(e)
        if (e === 1) {
          setTimeout(()=>{
            setZ(1)
          },400)
        } else {
          setZ(-2)
        }
      }}/>

      <ScaleDiv scale={scale===1?1:.98} z={z}>
        <ColonCont>
            <Colon/>
            <ContentCont>
                <Header
                    text="Terms of Use"
                />

                <Text
                    text="Adrian Tejada welcomes you to his Web site. Using this Web site indicates your consent and agreement to be bound by this User Agreement and any policies or practices contained herein."
                />

                <Text
                    text="All content and information (including, but not limited to, code, graphics, photos, guides, promotional materials, press releases, articles, plans, schedules, illustrations, audio clips, and video clips) displayed on this Web site is owned or licensed by Adrian Tejada and its respective owners, all content on this site is protected by copyright and other intellectual property laws. Any names, titles, logos and designs displayed on the Web site that contain Adrian Tejada’s, titles, logos, or brands are the exclusive property and trademarks of Adrian Tejada. You may not modify, publish, transmit, transfer, sell, reproduce, re-post or alter any such content. Adrian Tejada hereby grants you a personal, non-exclusive, non-assignable and non-transferable license to use and display, for home, non-commercial and personal use only, one copy of any content that you may download from this Web site. Any other use or reproduction of this Web site, in whole or in part, will be considered to be a violation of Adrian Tejada’s intellectual property rights."
                />

                <Text
                    text="Your use of this Web site constitutes your agreement to abide by these terms of use included in this online User Agreement. Adrian Tejada reserves the right to modify, alter or otherwise update this User Agreement at any time."
                />

                <Text
                    text="If you disagree with any of the above terms of use or any part of the User Agreement, do not use this Web site."
                />

                <Text
                    text="Adrian Tejada"
                />

                <Text
                    text="Last Update: April 2022"
                />


            </ContentCont>
        </ColonCont>
      </ScaleDiv>
        <Footer/>
  </MainCont>
}
 