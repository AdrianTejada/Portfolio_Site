import Baffle from 'baffle-react'
import TypeIt from 'typeit-react'
import styled from 'styled-components'

const Style = styled.h4`
    font-family: 'Source';
    font-size: 30px;
    font-weight: normal;
    margin-top: 50px;
    color: #8C8C8C;
    margin-bottom:0px ;
`

export const SubHead = ({
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