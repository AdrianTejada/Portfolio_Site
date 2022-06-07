import Baffle from 'baffle-react'
import styled from 'styled-components'

const Style = styled.p`
    font-family: 'Source';
    font-size: 20px;
    color: #8C8C8C;
    @media only screen and (max-width: 700px) {
        font-size: 10px;
    }
`

export const Text = ({
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