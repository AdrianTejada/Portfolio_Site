import { useEffect, useState } from "react"
import styled from "styled-components"
import { Menu } from "@/comps/Menu"

const MainCont = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const Header = styled.div`
  font-size: 100px;
  font-family: 'Gothic';
`


export default function Skills ({

}) {
    return <MainCont>
        <Menu currentRoute="skills"/>
        <Header>
            SKILLS
        </Header>
    </MainCont>
}