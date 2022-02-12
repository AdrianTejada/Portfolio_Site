import { useProvider } from "@/utils/provider"
import { useRouter } from "next/router"
import styled from "styled-components"
import { Menu } from "@/comps/Menu"

const MainCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  font-size: 100px;
  font-family: 'Gothic';
`

export default function Home() {
  // const router = useRouter()
  
  return <MainCont>
    <Menu currentRoute="index"/>

    <Header>
      Home
    </Header>
  </MainCont>
}
 