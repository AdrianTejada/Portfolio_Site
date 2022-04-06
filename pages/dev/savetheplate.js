import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { SubHead } from "@/comps/SubHead"
import { Text } from "@/comps/Text"
import { Colon } from "@/comps/Colon"
import { useState } from "react"
import { Footer } from "@/comps/Footer"
import Image from 'next/image'
import listed from '@/public/stp/listed.PNG'
import login from '@/public/stp/login.PNG'
import new_item from '@/public/stp/new_item.PNG'
import orders from '@/public/stp/orders.PNG'
import Head from 'next/head'

const MainCont = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -100vh;
  /* object-fit: cover; */
`

const ScaleDiv = styled.div`
  transform: scale(${props=>props.scale});
  transition-property: transform;
  transition: transform .6s;
  z-index: ${props=>props.z};
`

const ColonCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 90vw;
    align-items: flex-start;
`

const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

const ImagesCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media only screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`

const ScreenCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 348px;
  height: 800px;
`

const imgwidth = 348;
const imgheight = 700;

export default function SaveThePlate() { 
  const [scale, setScale] = useState(1)
  const [z, setZ] = useState(1)

  return <MainCont>
    <Head>
      <title>Adrian Tejada - SaveThePlate</title>
      <link rel="icon" href="../AT.png"/>
      <meta name="description" content="Work on SaveThePlate"/>
    </Head>
      <Menu OnOpen={(e)=>{
        setScale(e)
        if (e === 1) {
          setTimeout(()=>{
            setZ(1)
          },400)
        } else {
          setZ(-2)
        }
      }}/>

      <ScaleDiv scale={scale===1?1:.98} z={z}>
        <ColonCont>
            <Colon/>
            <ContentCont>
                <Header
                    text="SaveThePlate"
                />
                <SubHead
                  text="Role - Full Stack Developer"
                />
                <Text
                  text="An interdisciplinary project developed during one of my terms at BCIT. This project is called SaveThePlate, a business solution designed to reduce food waste while increasing restaurant profits. After extensive research and user testing, I helped to develop this project with my fellow team members. This application was built using React Native, PHP, MySQL, and Firebase."
                />
                <Text
                  text="Here are a few functions I worked on."
                />

                <ImagesCont>
                  <Row>
                    <ScreenCont>
                      <Text
                        text="Login"
                      />
                      <Image
                        src={login}
                        alt={"A screenshot of the login screen"}
                        width={imgwidth}
                        height={imgheight}
                      />
                    </ScreenCont>
                    <ScreenCont>
                      <Text
                        text="Ordered Items"
                      />
                      <Image
                        src={orders}
                        alt={"A screenshot of the orders tab"}
                        width={imgwidth}
                        height={imgheight}
                      />
                    </ScreenCont>
                  </Row>
                  <Row>
                    <ScreenCont>
                      <Text
                        text="Listed Items"
                      />
                      <Image
                        src={listed}
                        alt={"A screenshot of the listed tab"}
                        width={imgwidth}
                        height={imgheight}
                      />
                    </ScreenCont>
                    <ScreenCont>
                      <Text
                        text="Add New Menu Item"
                      />
                      <Image
                        src={new_item}
                        alt={"A screenshot of the add new item model"}
                        width={imgwidth}
                        height={imgheight}
                      />
                    </ScreenCont>
                  </Row>
                </ImagesCont>
            </ContentCont>
        </ColonCont>
      </ScaleDiv>
      <Footer/>
  </MainCont>
}