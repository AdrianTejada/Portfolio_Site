import { useEffect, useState } from "react"
import styled from "styled-components"

import { Menu } from '@/comps/Menu'
import { Header } from '@/comps/Header'
import { DevProjectCont } from "@/comps/ProjectCont"

const MainCont = styled.div`
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* transform: scale(0.5); */
`

const Cont = styled.div`
    width: 90%;
    
`

export default function Development ({

}) {

    return <MainCont>
        <Menu currentRoute="development"/>
        <Cont>
            <Header
                erase={false}
                text="Development"
            />

            <DevProjectCont/>
        </Cont>
    </MainCont>
}