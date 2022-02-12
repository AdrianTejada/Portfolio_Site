import { useState } from "react"

import styled, { isStyledComponent } from "styled-components"

const IconCont = styled.div`
    position: absolute;
    background-color: red;
    width: 40px;
    height: 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;                                 
    top: 20px;
    right: 20px;                         
`

const MenuCont = styled.div`
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`

const MenuItems = styled.div`
    font-size: 47px;
    font-family: 'Source';
`

export const Menu =  ({
    onHome=()=>{},
    onSkills=()=>{},
    onDev=()=>{},
    onMotion=()=>{},
    onAbout=()=>{},
}) => {
    const [menu, setMenu] = useState(false)
    return <>
        {menu===false?<IconCont onClick={()=>setMenu(!menu)}/>:
        <MenuCont>
            <IconCont onClick={()=>setMenu(!menu)}/>

            <MenuItems>Home</MenuItems>
            <MenuItems>Skills</MenuItems>
            <MenuItems>Development</MenuItems>
            <MenuItems>Motion Graphics</MenuItems>
            <MenuItems>About Me</MenuItems>
        </MenuCont>
        }
    </>
}