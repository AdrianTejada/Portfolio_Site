import styled from 'styled-components'

const Style = styled.div`
    font-family: 'Gothic';
    font-size: 72px;
    font-weight: normal;
    margin-top: 0px;
    margin-right: 2px;
    @media only screen and (max-width: 700px) {
        font-size: 20px;
    }
`

export const Colon = () => {
    return <Style>
        ::
    </Style>
}