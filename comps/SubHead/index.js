import Baffle from 'baffle-react'
import styled from 'styled-components'

const Style = styled.h4`
    font-family: 'Source';
    font-size: 30px;
    font-weight: normal;
    margin-top: 50px;
    color: #8C8C8C;
    margin-bottom:0px ;
    @media only screen and (max-width: 700px) {
        font-size: 16px;
        margin-top: 20px;
    }
`

export const SubHead = ({
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