import styled from 'styled-components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const MainCont = styled.div`
    width: 240px;
    height: 240px;
    border-radius: 45px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: ${props=>props.bg};
    margin: 10px;
    border: 2px solid #8c8c8c;
    @media only screen and (max-width: 700px) {
        width: 140px;
        height: 140px;
        border-radius: 25px;
    }
`

const ContentCont = styled.div`
    min-width: 240px;
    min-height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props=>props.op};
    background-color: ${props=>props.bg};
    transition: opacity .6s;
    @media only screen and (max-width: 700px) {
        min-width: 140px;
        min-height: 140px;
        transform: scale(.7);
    }
`

const TextCont = styled.div`
    min-width: 240px;
    min-height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -240px;
    opacity: ${props=>props.op};
    background-color: ${props=>props.bg};
    transition: opacity .6s;
    @media only screen and (max-width: 700px) {
        min-width: 140px;
        min-height: 140px;
        margin-top: -140px;
    }
`

const ProjectText = styled.div`
    font-family: 'Gothic';
    color: ${props=>props.color};
    font-size: 30px;
    text-align: center;
    -moz-user-select:none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 10px;
    @media only screen and (max-width: 700px) {
        font-size: 20px;
    }
`

export const ProjectCont = ({
    bg="",
    txtcolor='white',
    txt="ProjectCont",
    path="/",
    img=null,
    alt=null,
    logowidth=null,
    logoheight=null
}) => {
    const [op, setOp] = useState(0)
    const router = useRouter()

    return <MainCont onMouseOver={()=>setOp(1)} onMouseOut={()=>setOp(0)} onClick={()=>router.push(path)} bg={bg}>
        <ContentCont bg={bg} op={op===1?0:1}>
            <Image
                src={img}
                alt={alt}
                width={logowidth}
                height={logoheight}
            />
        </ContentCont>
        <TextCont op={op} bg={bg}>
            <ProjectText color={txtcolor}>
                {txt}
            </ProjectText>
        </TextCont>
    </MainCont>
}