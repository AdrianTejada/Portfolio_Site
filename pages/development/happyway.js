import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { SubHead } from "@/comps/SubHead"
import { Text } from "@/comps/Text"
import { Colon } from "@/comps/Colon"
import { useState, useEffect } from "react"
import { Footer } from "@/comps/Footer"
import Head from 'next/head'

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
    width: 100%;
`

export default function Happyway() { 
  const [scale, setScale] = useState(1)
  const [z, setZ] = useState(1)
  const [fade, setFade] = useState(true)

  useEffect(()=>{
    setFade(false)
  },[])

  return <MainCont op={fade == false ? 1 : 0}>
    <Head>
      <title>Adrian Tejada - Happyway</title>
      <link rel="icon" href="../AT.png"/>
      <meta name="description" content="Work on SaveThePlate"/>
    </Head>
      <Menu OnOpen={(e)=>{
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
                    text="Happyway"
                />
                <SubHead
                  text="Role - Front End Developer"
                />
                <Text
                  text="A web application I helped develop during my Internship at BCIT. Development version available upon request."
                />
                <Text style={{color: 'red'}}
                  text="Link to project"
                />

            
            </ContentCont>
        </ColonCont>
      </ScaleDiv>
      <Footer/>
  </MainCont>
}