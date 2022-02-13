import styled from "styled-components"
import Baffle from 'baffle-react'
import TypeIt from "typeit-react"

const HeaderCont = styled.div`
    width: 90%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const HeaderText = styled.div`
    font-size: 150px;
    font-family: 'Gothic'; 
`
const Line = styled.div`
    width: 100%;
    height: 10px;
    background-color: black;
`  

export const Header = ({
    erase=false,
    text="",
}) => {
    return <HeaderCont>
    <div>
        {erase === false?
        <HeaderText>
            <Baffle
                speed={100}
                obfuscate={false}
                characters="░▒█▒▓▒▓█▓▒░█▒█▒▒▒░░░▒▓▒"
                revealDuration={3000}
            >
                {text}
            </Baffle>
        </HeaderText>

        :<HeaderText>
            <TypeIt>{text}</TypeIt>
        </HeaderText>}
    </div>
    <Line/>
    </HeaderCont>
}