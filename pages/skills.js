import { useEffect, useState } from "react"
import styled from "styled-components"

import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import {Text} from '@/comps/Text'
import { ProgressBar } from "@/comps/ProgressBar"

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

const ProgressBarCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
`

export default function Skills ({

}) {
    const [page, setPage] = useState(false)

    return <MainCont>
        <Menu currentRoute="skills"/>
        <Cont>
            <Header
                erase={false}
                text="My Skill Set"
                />
                <Text
                    erase={false}
                    text="My primary skill is Front-End Development using React, HTML, CSS, & Javascript with sufficient knowledge in UI/UX Design. I also enjoy bringing Graphic Design to life through Motion Graphic. hello hello helloh eooo"
                />

            <ProgressBarCont>
                <Text
                    erase={false}
                    text="Front-End Development"
                />
                <ProgressBar
                    progress="95%"
                />

                <Text
                    erase={false}
                    text="Back-End Development"
                />
                <ProgressBar
                    progress="85%"
                />

                <Text
                    erase={false}
                    text="Motion Graphics"
                />
                <ProgressBar
                    progress="80%"
                />

                <Text
                    erase={false}
                    text="UI/UX Design"
                />

                <ProgressBar
                    progress="72%"
                />
            </ProgressBarCont>
        </Cont>
    </MainCont>
}