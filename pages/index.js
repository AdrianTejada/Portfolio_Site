import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { SubHead } from "@/comps/SubHead"
import { Text } from "@/comps/Text"
import { TypeEffect } from "@/comps/TypeEffect"
import { Colon } from "@/comps/Colon"
import { useEffect, useState } from "react"


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

const TextCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  -moz-user-select:none;
  -webkit-user-select: none;
  -ms-user-select: none;
  margin-top: 150px;
`

const Hello = styled.div`
  font-size: 72px;
  font-family: 'Gothic';
  margin-bottom: -40px;
`

const Name = styled.h1`
  font-size: 180px;
  font-family: 'Gothic';
  margin-bottom: -40px;
  margin-top: 0px;
  font-weight: normal;
  @media only screen and (max-width: 700px) {
    font-size: 70px;
  }
`

const SubCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Emoticon = styled.div`
  font-size: 70px;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 50px;
`

const SubText = styled.p`
  font-size: 32px;
  font-family: 'Source';
  color: #8C8C8C;
`

const SkillsCont = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
`

const Line = styled.div`
  margin-top: 290px;
  width: 90vw;
  height: 6px;
  background-color: black;
  border-radius: 2px;
`

const BigCont = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export default function Home() { 
  const [scale, setScale] = useState(1)
  const [z, setZ] = useState(1)

  return <MainCont>
      <Menu currentRoute="index" OnOpen={(e)=>{
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
        <TextCont>
          <Hello>
            <TypeEffect
              text="Hi, my name&#x27;s"
            />
            </Hello>
          <Name>
            <TypeEffect
              text="ADRIAN TEJADA"
            />
          </Name>
          <SubCont>
            <Emoticon>
              <TypeEffect
                text="(&nbsp;&nbsp;&nbsp;-&nbsp;ω&nbsp;-&nbsp;)ﾉ"
              />
            </Emoticon>
            <SubText>
              <TypeEffect
                text="Front-End Developer & Motion Graphics Designer"
              />
            </SubText>
          </SubCont>
        </TextCont>
      
      
        <Line/>
        <BigCont>
        <Colon/>
        <SkillsCont>
            <Header
              text="My Skill Set"
            />
            <SubHead
              text="Front End Development"
            />
            <Text
              text="Thanks to my 2 years spent at the Digital Design and Development at BCIT, I have experience building web-applications in team environments using React.js, JavaScript, HTML, and CSS. My favorite parts of Front End Development are mapping out data from API’s on to the front-end, and coding out UI/UX interactions and animations."
            />
            <SubHead
              text="Motion Graphics"
            />
            <Text
              text="Mostly self taught, I’ve always loved any form of animation and motion graphics. Originally doing this for fun for friends and family, I eventully started doing work for small businesses and local artists."
            />
        </SkillsCont>
        </BigCont>

      </ScaleDiv>
      
  </MainCont>
}
 