import Baffle from 'baffle-react'
import styled from 'styled-components'

const Style = styled.h3`
    font-family: 'Gothic';
    font-size: 72px;
    font-weight: normal;
    margin-top: 0px;
    @media only screen and (max-width: 700px) {
        font-size: 20px;
    }
`

export const Header = ({
    text="hello",
    speed=1000
}) => {
    return <Style>
            <Baffle
                speed={100}
                obfuscate={false}
                characters="⠓⠑⠇⠇⠕⠊⠍⠁⠙⠗⠊⠁⠝"
                revealDuration={speed}
            >
                {text}
            </Baffle>
    </Style>
}