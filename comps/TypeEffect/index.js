import Baffle from 'baffle-react'

export const TypeEffect = ({
    text="hello",
    speed=1000
}) => {
    return <>
            <Baffle
                speed={100}
                obfuscate={false}
                characters="⠓⠑⠇⠇⠕⠊⠍⠁⠙⠗⠊⠁⠝"
                revealDuration={speed}
            >
                {text}
            </Baffle>
    </>
}