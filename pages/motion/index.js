import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { Colon } from "@/comps/Colon"
import { useState, useEffect } from "react"
import { Footer } from "@/comps/Footer"
import { ProjectCont } from "@/comps/ProjectCont"
import ktoflogo from '@/public/hustg/logo.png'
import Head from "next/head"
import lytchixcosette from '@/public/lytchixcosette/icon.png'


const MainCont = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -100vh;
  opacity: ${props=>props.op};
  transition: opacity .6s;
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


export default function Motion() { 
  const [scale, setScale] = useState(1)
  const [z, setZ] = useState(1)
  const [fade, setFade] = useState(true)

  useEffect(()=>{
    setFade(false)
  },[])

  return <MainCont op={fade == false ? 1 : 0}>
        <Head>
      <title>Adrian Tejada - Development</title>
      <link rel="icon" href="AT.png"/>
      <meta name="description" content="Motion graphics designed by Adrian Tejada"/>
    </Head>
      <Menu currentRoute="motion" OnOpen={(e)=>{
        setScale(e)
        if (e === 1) {
          setTimeout(()=>{
            setZ(1)
          },400)
        } else {
          setZ(-2)
        }
      }}
      Fade={(e)=>setFade(e)}
      />

      <ScaleDiv scale={scale===1?1:.98} z={z}>
        <ColonCont>
            <Colon/>
            <ContentCont>
                <Header
                    text="Motion"
                />
                <ProjectsCont>
                  <ProjectCont
                    bg={"white"}
                    txtcolor={"black"}
                    txt={"Lytchi X Cosette"}
                    img={lytchixcosette}
                    alt={"Lytchi x Cosette Logo"}
                    logowidth={"150px"}
                    logoheight={"150px"}
                    path={"/motion/lytchixcosette"}
                  />
                <ProjectCont
                    bg={"#fcf1c7"}
                    txtcolor={"#2f493a"}
                    txt={"Have you Seen This Girl?"}
                    img={ktoflogo}
                    alt={"Have you Seen This Girl?"}
                    logowidth={"120px"}
                    logoheight={"120px"}
                    path={"/motion/haveyouseenthisgirl"}
                  />
                </ProjectsCont>
            </ContentCont>
        </ColonCont>
      </ScaleDiv>
      <Footer/>
  </MainCont>
}