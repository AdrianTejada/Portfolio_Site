import { useProvider } from "@/utils/provider"
import styled from "styled-components"
import { Menu } from "@/comps/Menu"

const MainCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: beige; */
`


const TextCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 100px;
  margin-right: 100px;
  -moz-user-select:none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

const Hello = styled.div`
  font-size: 90px;
  font-family: 'Gothic';
  margin-bottom: -40px;
`

const Name = styled.div`
  font-size: 200px;
  font-family: 'Gothic';
  margin-bottom: -40px;
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

const SubText = styled.div`
  font-size: 50px;
  font-family: 'Source';
  color: #8C8C8C;
`


export default function Home() {  
  return <MainCont>
    <Menu currentRoute="index"/>
      <TextCont>
        <Hello>Hi, my name's</Hello>
        <Name>ADRIAN TEJADA</Name>
        <SubCont>
          <Emoticon>{`(`}&nbsp;&nbsp;&nbsp;-&nbsp;ω&nbsp;-&nbsp;{`)ﾉ`}</Emoticon>
          <SubText>Front-End Developer & Motion Graphics Designer</SubText>
        </SubCont>
      </TextCont>
  </MainCont>
}
 