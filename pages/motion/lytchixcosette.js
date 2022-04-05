import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { Text } from "@/comps/Text"
import { Colon } from "@/comps/Colon"
import { useState } from "react"
import { Footer } from "@/comps/Footer"
import ReactPlayer from "react-player"

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
    width: 100%;
`

const ResponsiveCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`

const WorkCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const VideoCont = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 713px;
    height: 713px;
    @media only screen and (max-width: 700px) {
        width: 300px;
        height: 300px;
    }
`


export default function LytchiXCosette() { 
  const [scale, setScale] = useState(1)
  const [z, setZ] = useState(1)

  return <MainCont>
      <Menu OnOpen={(e)=>{
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
                    text="Lytchi X Cosette"
                />
                <WorkCont>
                    <Text
                        text="Promotion and Visuals done for the Lytchi & Cosette collaboration."
                    />    
                </WorkCont>
                <ResponsiveCont>
                <WorkCont>
                    <VideoCont>
                        <ReactPlayer
                            url={"https://youtu.be/NMoWF4O9xPc"}
                            playing="true"
                            loop="true"
                            width="100%"
                            height="100%"
                            controls="false"
                        />
                    </VideoCont>
                </WorkCont>
                <WorkCont>
                    <VideoCont>
                        <ReactPlayer
                            url={"https://youtu.be/gghDQHDeXNw"}
                            playing="true"
                            loop="true"
                            width="100%"
                            height="100%"
                            controls="false"
                        />
                    </VideoCont>
                </WorkCont>

                </ResponsiveCont>
            </ContentCont>
        </ColonCont>
      </ScaleDiv>
      <Footer/>
  </MainCont>
}