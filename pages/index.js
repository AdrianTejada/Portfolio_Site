import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { SubHead } from "@/comps/SubHead"
import { Text } from "@/comps/Text"

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
            text="
            Mostly self taught, I’ve always loved any form of animation and motion graphics. Originally doing this for fun for friends and family, I eventully started doing work for small businesses and local artists."
          />


      </SkillsCont>
  </MainCont>
}
 