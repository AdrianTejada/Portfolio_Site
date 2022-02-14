import { useEffect, useState } from "react"
import styled from "styled-components"

import { Menu } from '@/comps/Menu'
import { Header } from "@/comps/Header"
import { Text } from "@/comps/Text"

const MainCont = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* transform: scale(0.5); */
`

const Cont = styled.div`
    width: 90%;
`


export default function About ({

}) {
    return <MainCont>
        <Menu currentRoute="about"/>
        <Cont>
            <Header
                erase={false}
                text="About Me"
            />

            <Text
                text="I’ve always been a creative soul, so I picked up photography when I was in highschool. That was my gateway in to design which led me too learn about programs like After Effects, Premiere Pro, and Blender. Then I heard of the Digital Design and Development Program at BCIT from a friend and it seemed like a great fit. Then comes around September 2020, the month I started D3. I entered D3 expecting to primarily a UI/UX designer, however really found my groove with coding. Since then I've found my stride with coding using React.js. I really enjoy the problem solving aspect of it "
            />
        </Cont>
    </MainCont>
}