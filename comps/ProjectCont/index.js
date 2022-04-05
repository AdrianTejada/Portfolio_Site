import styled from 'styled-components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const MainCont = styled.div`
    min-width: 240px;
    min-height: 240px;
    border-radius: 45px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: ${props=>props.bg};
    margin: 10px;
`

const ContentCont = styled.div`
    min-width: 240px;
    min-height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props=>props.margintop};
    opacity: ${props=>props.op};
    background-color: ${props=>props.bg};
    transition: opacity .6s;
`

const ProjectText = styled.div`
    font-family: 'Gothic';
    color: ${props=>props.color};
    font-size: 30px;
    -moz-user-select:none;
    -webkit-user-select: none;
    -ms-user-select: none;
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
        <ContentCont margintop={"-240px"} op={op} bg={bg}>
            <ProjectText color={txtcolor}>
                {txt}
            </ProjectText>
        </ContentCont>
    </MainCont>
}