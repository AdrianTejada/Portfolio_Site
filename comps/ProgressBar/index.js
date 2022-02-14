import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 30px;
    border: 4px solid #8C8C8C;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
    margin-bottom: 50px;
    margin-top: 10px;
`

const Bar = styled.div`
    background-color: #8C8C8C;
    height: 10px;
    width: ${props=>props.width};
    border-radius: 3px;
`

export const ProgressBar = ({
    progress="0%"
}) => {
    return <Wrapper>
        <Bar
            width={progress}
        />
    </Wrapper>
}