import styled from "styled-components";
import Baffle from 'baffle-react'
import TypeIt from "typeit-react";

const TextStyle = styled.div`
    font-size: 30px;
    font-family: 'Source';
    color: #8C8C8C;
`

export const Text = ({
    erase=false,
    text="",
}) => {
    return <div>
        {erase === false?
            <TextStyle>
                <Baffle
                    speed={100}
                    obfuscate={false}
                    characters="░▒█▒▓▒▓█▓▒░█▒█▒▒▒░░░▒▓▒"
                    revealDuration={3000}
                >
                    {text}
                </Baffle>
            </TextStyle>
        :<TextStyle>
            <TypeIt>
                {text}
            </TypeIt>
        </TextStyle>}
    </div>
}