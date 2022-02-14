import { useState } from "react"
import { useRouter } from "next/router"

import styled, { isStyledComponent } from "styled-components"

const IconCont = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;                                 
    top: 20px;
    right: 20px;  
    z-index:${props=>props.z};
    transition: z-index .6s;
    width: 50px;
    height: 40px;
`

const Line = styled.div`
    width: 100%;
    height: 6px;
    background-color: ${props=>props.bg};
    transition: background-color .6s;
    border-radius: 3px;

`

const MenuCont = styled.div`
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    backdrop-filter: blur(10px);
    transition: opacity .6s, backdrop-filter .6s, z-index .6s;
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
`

export const Menu =  ({
    currentRoute=""
}) => {
    const [op, setOp] = useState(-1)

    
    const router = useRouter()


    return <>
            <IconCont onClick={()=>setOp(op===-1?1:-1)} z={op===-1?1:2}>
                <Line bg={op===-1?"black":"#8C8C8C"}/>
                <Line bg={op===-1?"black":"#8C8C8C"}/>
                <Line bg={op===-1?"black":"#8C8C8C"}/>
            </IconCont>
            

            <MenuCont op={op} z={op} onClick={()=>setOp(-1)}> 
                <MenuItems onClick={()=>{
                    setOp(-1)
                    if (currentRoute != "index") {
                        setTimeout(()=>{router.push('/')},500)
                    }
                }}>Home</MenuItems>

                <MenuItems onClick={()=>{
                    setOp(-1)
                    if (currentRoute != "skills") {
                        setTimeout(()=>{router.push('/skills')},500)
                    }
                }}>Skills</MenuItems>

                <MenuItems onClick={()=>{
                    setOp(-1)
                    if (currentRoute != "development") {
                        setTimeout(()=>{router.push('/development')},500)
                    }
                }}>Development</MenuItems>

                <MenuItems onClick={()=>{
                    setOp(-1)
                    if (currentRoute != "motion") {
                        setTimeout(()=>{router.push('/motion')},500)
                    }
                }}>Motion</MenuItems>

                <MenuItems onClick={()=>{
                    setOp(-1)
                    if (currentRoute != "about") {
                        setTimeout(()=>{router.push('/about')},500)
                    }
                }}>About</MenuItems>

                <MenuItems onClick={()=>{
                    setOp(-1)
                    if (currentRoute != "contact") {
                        setTimeout(()=>{router.push('/contact')},500)
                    }
                }}>Contact</MenuItems>
        </MenuCont>
    </>
}