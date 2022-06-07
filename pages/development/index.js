import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { Colon } from "@/comps/Colon"
import { useState } from "react"
import { Footer } from "@/comps/Footer"
import { ProjectCont } from "@/comps/ProjectCont"
import stpLogo from '@/public/stp/stp_logo.png'
import Head from "next/head"

const MainCont = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -100vh;
`

const ScaleDiv = styled.div`
  transform: scale(${props=>props.scale});
  transition-property: transform;
  transition: transform .6s;
  z-index: ${props=>props.z};
  height: 100vh;
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
`

const ProjectsCont = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`


export default function Development() { 
  const [scale, setScale] = useState(1)
  const [z, setZ] = useState(1)

  return <MainCont>
    <Head>
      <title>Adrian Tejada - Development</title>
      <link rel="icon" href="AT.png"/>
      <meta name="description" content="Applications Developed by Adrian Tejada"/>
    </Head>
      <Menu currentRoute="development" OnOpen={(e)=>{
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
                    text="Development"
                />
                <ProjectsCont>
                  <ProjectCont
                    bg={"#E94168"}
                    txtcolor={"white"}
                    txt={"SaveThePlate"}
                    img={stpLogo}
                    alt={"The SaveThePlate Logo"}
                    logowidth={"109px"}
                    logoheight={"119px"}
                    path={"/development/savetheplate"}
                  />
                  <ProjectCont
                    bg={"white"}
                    txtcolor={"black"}
                    txt={"Happyway"}
                    img={stpLogo}
                    alt={"The Happyway Logo"}
                    logowidth={"109px"}
                    logoheight={"119px"}
                    path={"/development/happyway"}
                  />
                </ProjectsCont>  
            </ContentCont>
        </ColonCont>
      </ScaleDiv>
      <Footer/>
  </MainCont>
}