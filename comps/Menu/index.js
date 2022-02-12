import { useState } from "react"
import { useRouter } from "next/router"

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
    align-items: center;
    backdrop-filter: blur(10px);
`

const MenuItems = styled.div`
    font-size: 47px;
    font-family: 'Source';
`

export const Menu =  ({
    currentRoute=""
}) => {
    const [menu, setMenu] = useState(false)
    
    const router = useRouter()

    return <>
        {menu===false?<IconCont onClick={()=>setMenu(!menu)}/>:
        <MenuCont>
            <IconCont onClick={()=>setMenu(!menu)}/>

            <MenuItems onClick={()=>{
                if (currentRoute == "index") {
                    setMenu(false)
                } else {
                    router.push('/')
                }
            }}>Home</MenuItems>

            <MenuItems onClick={()=>{
                if (currentRoute == "skills") {
                    setMenu(false)
                } else {
                    router.push('/skills')
                }
            }}>Skills</MenuItems>

            <MenuItems onClick={()=>{
                if (currentRoute == "development") {
                    setMenu(false)
                } else {
                    router.push('/development')
                }
            }}>Development</MenuItems>

            <MenuItems onClick={()=>{
                if (currentRoute == "motion") {
                    setMenu(false)
                } else {
                    router.push('/motion')
                }
            }}>Motion Graphics</MenuItems>

            <MenuItems onClick={()=>{
                if (currentRoute == "about") {
                    setMenu(false)
                } else {
                    router.push('/about')
                }
            }}>About Me</MenuItems>
        </MenuCont>
        }
    </>
}