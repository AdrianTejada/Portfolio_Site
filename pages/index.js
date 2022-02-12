import { useProvider } from "@/utils/provider"
import styled from "styled-components"
import { Menu } from "@/comps/Menu"

const MainCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Hello = styled.div`
  font-size: 72px;
  font-family: 'Gothic';
  margin-bottom: -40px;
`

const Name = styled.div`
  font-size: 180px;
  font-family: 'Gothic';
  margin-bottom: -40px;
`

const SubCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Emoticon = styled.div`
  font-size: 56px;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 50px;
`

const SubText = styled.div`
  font-size: 32px;
  font-family: 'Source';
  color: #8C8C8C;
`


export default function Home() {  
  return <MainCont>
    <Menu currentRoute="index"/>

    <HeroCont>
      <Hello>Hi, my name's</Hello>
      <Name>ADRIAN TEJADA</Name>
      <SubCont>
        <Emoticon>{`(`}&nbsp;&nbsp;&nbsp;-&nbsp;ω&nbsp;-&nbsp;{`)ﾉ`}</Emoticon>
        <SubText>Front-End Developer & Motion Graphics Designer</SubText>
      </SubCont>
    </HeroCont>

  </MainCont>
}
 