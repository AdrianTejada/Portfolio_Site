import styled from "styled-components"
import Baffle from 'baffle-react'
import TypeIt from "typeit-react"

const HeaderCont = styled.div`
    width: 100%;
    height: 200px;
    margin-left: 70px;
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const HeaderText = styled.div`
    font-size: 180px;
    font-family: 'Gothic'; 
`
const Line = styled.div`
    width: 100%;
    height: 20px;
    background-color: black;
`


export const Header = ({
    erase=false,
    text="",
    play=false
}) => {
    return <HeaderCont>
    <div>
        {erase === false?
        <HeaderText>
            <Baffle
                speed={100}
                obfuscate={play}
                characters="░▒█▒▓▒▓█▓▒░█▒█▒▒▒░░░▒▓▒"
                revealDuration={3000}
                style={{fontSize: "30px"}}
            >
                {text}
            </Baffle>
        </HeaderText>

        :<HeaderText>
            <TypeIt>{text}</TypeIt>
        </HeaderText>}
    </div>
    </HeaderCont>
}