import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { TextEffect } from "@/comps/Header"
import { Header } from "@/comps/Header"

const MainCont = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin-top: 200px;
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
  width: 100%;
  height: 6px;
  background-color: black;
  margin-top: 300px;

`


export default function Home() {  
  return <MainCont>
      <Menu currentRoute="index"/>

      <TextCont>
        <Hello>Hi, my name&apos;s</Hello>
        <Name>ADRIAN TEJADA</Name>
        <SubCont>
          <Emoticon>{`(`}&nbsp;&nbsp;&nbsp;-&nbsp;ω&nbsp;-&nbsp;{`)ﾉ`}</Emoticon>
          <SubText>Front-End Developer & Motion Graphics Designer</SubText>
        </SubCont>
      </TextCont>

      <SkillsCont>
        <Line/>
          <Header
            text="My Skill Set"
          />



      </SkillsCont>
  </MainCont>
}
 