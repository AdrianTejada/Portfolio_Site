import { useEffect, useState } from "react"
import styled from "styled-components"

import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"

const MainCont = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

const Line = styled.div`
    width: 100%;
    height: 20px;
    background-color: black;
`


export default function Skills ({

}) {
    const [page, setPage] = useState(false)

    return <MainCont>
        <Menu currentRoute="skills"/>
            <Header
                erase={false}
                text="My Skill Set"
                />
        <Line/>
    </MainCont>
}