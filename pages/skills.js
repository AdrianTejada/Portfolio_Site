import { useEffect, useState } from "react"
import styled from "styled-components"

import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import {Text} from '@/comps/Text'

const MainCont = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextCont = styled.div`
    width: 90%;
    margin-top: 30px;
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
            <TextCont>
                <Text
                    erase={false}
                    text="My primary skill is Front-End Development using React, HTML, CSS, & Javascript with sufficient knowledge in UI/UX Design. I also enjoy bringing Graphic Design to life through Motion Graphic."
                />
            </TextCont>

            
    </MainCont>
}