import Baffle from 'baffle-react'
import TypeIt from 'typeit-react'

export const TypeEffect = ({
    erase=false,
    text="hello",
    speed=1000
}) => {
    return <>
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
    </>
}