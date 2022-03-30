import Baffle from 'baffle-react'
import TypeIt from 'typeit-react'
import styled from 'styled-components'

const Style = styled.p`
    font-family: 'Source';
    font-size: 20px;
    color: #8C8C8C;
`

export const Text = ({
    erase=false,
    text="hello",
    speed=1000
}) => {
    return <Style>
        {erase === false?
            <Baffle
                speed={100}
                obfuscate={false}
                characters="⠓⠑⠇⠇⠕⠊⠍⠁⠙⠗⠊⠁⠝"
                revealDuration={speed}
            >
                {text}
            </Baffle>
        :
            <TypeIt>
                {text}
            </TypeIt>
        }
    </Style>
}