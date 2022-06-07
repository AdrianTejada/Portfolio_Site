import Baffle from 'baffle-react'
import TypeIt from 'typeit-react'
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
        <TypeIt 
        getBeforeInit={(instance)=>{
            instance.type(text, {instant: true}).delete()
            return instance
        }}
    />
        }
    </Style>
}