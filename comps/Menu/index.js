import { useState } from "react"
import { useRouter } from "next/router"

import styled from "styled-components"

const IconCont = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;                                 
    top: 20px;
    right: 20px;  
    z-index:${props=>props.z};
    transition: z-index .4s;
    width: 50px;
    height: 40px;
    align-self: flex-end;

`

const Line = styled.div`
    width: 100%;
    height: 6px;
    background-color: ${props=>props.bg};
    transition: background-color .4s;
    border-radius: 3px;

`

const MenuCont = styled.div`
    position: sticky;
    top: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    backdrop-filter: blur(10px);
    transition: opacity .4s, backdrop-filter .4s, z-index .4s;
    opacity: ${props=>props.op};
    z-index: ${props=>props.z};
`

const MenuItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 47px;
    font-family: 'gOTHIC';
    background-color: black;
    color: white;
    padding: 15px;
    border-radius: 30px;
    border: 4px solid black;
    &:hover {
        background-color: white;
        color: black;
    }
    -moz-user-select:none;
    -webkit-user-select: none;
    -ms-user-select: none;
    transition: background-color .3s, color .3s;
    @media only screen and (max-width: 700px) {
        font-size: 20px;
        padding: 10px;
        border-radius: 15px;
    }
`

export const Menu =  ({
    currentRoute="",
    OnOpen=()=>{}
}) => {
    const [op, setOp] = useState(-1)
    const [transition, isTransitioning] = useState(false)

    
    const router = useRouter()


    return <>
            <IconCont onClick={()=>{
                if (transition == false) {
                    isTransitioning(true)
                    setOp(op===-1?1:-1)
                    OnOpen(op)
                    setTimeout(()=>{isTransitioning(false)},400)
                }

                }} z={op===-1?1:2}>
                <Line bg={op===-1?"black":"#8C8C8C"}/>
                <Line bg={op===-1?"black":"#8C8C8C"}/>
                <Line bg={op===-1?"black":"#8C8C8C"}/>
            </IconCont>
            

            <MenuCont op={op} z={op} onClick={()=>{

                if (transition == false) {
                    isTransitioning(true)
                    setOp(-1)
                    OnOpen(op)
                    setTimeout(()=>{isTransitioning(false)},600)
                }

                }}> 
                <MenuItems onClick={()=>{
                    if (transition=== false) {
                        setOp(-1)
                        if (currentRoute != "index") {
                            setTimeout(()=>{router.push('/')},500)
                        }
                        OnOpen(op)
                    }
                }}>Home</MenuItems>

                <MenuItems onClick={()=>{
                    if (transition === false) {
                        setOp(-1)
                        if (currentRoute != "development") {
                            setTimeout(()=>{router.push('/development')},500)
                        }
                        OnOpen(op)
                    }
                }}>Development</MenuItems>

                <MenuItems onClick={()=>{
                    if (transition === false) {
                        setOp(-1)
                        if (currentRoute != "motion") {
                            setTimeout(()=>{router.push('/motion')},500)
                        }
                        OnOpen(op)
                    }
                }}>Motion</MenuItems>

                <MenuItems onClick={()=>{
                    if (transition === false) {
                        setOp(-1)
                        if (currentRoute != "about") {
                            setTimeout(()=>{router.push('/about')},500)
                        }
                        OnOpen(op)
                    }
                }}>About</MenuItems>
        </MenuCont>
    </>
}