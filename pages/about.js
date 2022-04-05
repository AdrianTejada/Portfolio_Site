import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { Text } from "@/comps/Text"
import { Colon } from "@/comps/Colon"
import { useState } from "react"
import { Footer } from "@/comps/Footer"
import Image from "next/image"
import src from '@/public/moi/IMG-0429.jpg'

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
    width: 100%;
`

const AboutCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`

const TextCont = styled.div`
    display: flex;
    flex-direction: column ;
    width: 50%;
    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`

const ImageCont = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 700px) {
        flex-basis: 300px;
        width: 100%;
        justify-content: flex-end;
    }
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
                <AboutCont>
                    <TextCont>
                        <Text
                            text="After highschool I originally wanted to pursue a career in videography, photography, and motion graphic design. Then I heard of the Digital Design and Development program at BCIT, and applied with the intention to get better at motion graphic design and learn UI/UX Design. Eventually I found myself having more fun with front-end development and decided to pursue it as my current career. I hope to grow and learn plenty of things on this journey and am currently aspiring to become either a Full Stack Developer or Front End Engineer!"
                        />
                        <Text
                            text="Outside of my professional life, you can find me hiking, bouldering, hanging out with my dog Max."
                        />
                    </TextCont>
                    
                    <ImageCont>
                        <Image
                            alt="A photo of Adrian Tejada"
                            src={src}
                            width={500}
                            height={625}
                        />
                    </ImageCont>

                    
                </AboutCont>
            </ContentCont>
        </ColonCont>
      </ScaleDiv>
        <Footer/>
  </MainCont>
}