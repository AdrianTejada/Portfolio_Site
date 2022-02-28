import styled from "styled-components"
import { useState } from "react"

const EmptyCont = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DADADA;
    border: 4px solid #DADADA;
    border-radius: 40px;
`

const Blur = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.width};
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${props=>props.positon};
    align-self: center;
    top: 0px;
    right: 0px;
    backdrop-filter: blur(10px);
`


const Cont = styled.div`
    min-width: 300px;
    min-height: 300px;
    border: 4px solid #8C8C8C;
    background-color: white;
    border-radius: 40px;
    position: ${props=>props.positon};
`

export const DevProjectCont= ({}) => {
    const [open, setOpen] = useState(false)

    return <EmptyCont>
        <Blur
            width={open===false?'300px':'100vw'}
            height={open===false?'300px':'500px'}
            positon={open===false?'relative':'absolute'}
        >
            <Cont onClick={()=>setOpen(!open)}>


            </Cont>
        </Blur>
    </EmptyCont>
}