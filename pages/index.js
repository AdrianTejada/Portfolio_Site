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

export default function Home() {
  const r = useRouter()
  
  return <MainCont>
    <Menu/>
    Home
  </MainCont>
}
 