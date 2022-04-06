import styled from "styled-components"
import { Menu } from "@/comps/Menu"
import { Header } from "@/comps/Header"
import { Text } from "@/comps/Text"
import { Colon } from "@/comps/Colon"
import { useState } from "react"
import { Footer } from "@/comps/Footer"
import { SubHead } from "@/comps/SubHead"
import Head from "next/head"


const MainCont = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -100vh;
`

const ScaleDiv = styled.div`
  width: 90vw;
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
`

const ListItem = styled.li`
    color: #8c8c8c;
`

const ListTag = styled.ul`
    padding: 0px;
    margin-top: -10px;
    margin-left: 30px;
`


export default function PrivacyPolicy() { 
  const [scale, setScale] = useState(1)
  const [z, setZ] = useState(1)

  return <MainCont>
    <Head>
      <title>Adrian Tejada - Privacy Policy</title>
      <link rel="icon" href="AT.png"/>
      <meta name="description" content="Adrian Tejada&#x27;s privacy policy"/>
    </Head>
      <Menu  OnOpen={(e)=>{
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
                    text="Privacy Policy"
                />

                <Text
                    text="This policy applies to Adrian Tejada’s Web site only. It is designed to inform you of how and why Adrian Tejada gathers personal and non-personal information about you. This policy complies with provisions of the British Columbia Freedom of Information and Protection of Privacy Act.
                    This may be a Web site connected by 'hyperlinks' to other Websites. We are not responsible in any way for the privacy practices on other Websites and suggest that you review the privacy policies on those linked Websites before using them.
                    "
                />
                <Text
                    text="We are accountable for this Privacy Policy and these practices on this Web site, including the Privacy Code set out below. If you have any questions or concerns regarding the privacy practices on this Web site, please email me."
                />
                <SubHead
                    text="What Information Is Collected?"
                />
                <Text
                    text="Adrian Tejada collects two kinds of information from this Web site
                    (A) Your voluntarily provided personal information. (B) Anonymous information about your visit"
                />
                <SubHead
                    text="A. Your Personal Information:"
                />

                <Text
                    text="During normal Web site usage, you can visit this site without communicating any personal information. However, to make use of certain features on this site, such as gift certificates, promotions, subscriptions or newsletters, users may be asked to register with Adrian Tejada’s Web site. As part of this voluntary registration, Adrian Tejada may request contact information (such as name, mailing address, e-mail address, etc.) and other data required for operating these services. The only way we can collect personal information from you is if you voluntarily provide it. By voluntarily providing this personal information to us by sending us a comment or suggestion, by entering a contest that is posted on this Web site, you will be consenting to the collection, use and distribution of your personal information by Adrian Tejada for the purposes set out. You are under no obligation to provide us with personal information and can access and enjoy many parts of Adrian Tejada’s Web site without providing us any personal information. Among other things, the following is a representative list of reasons we may ask for your personal information:"
                />

                <ListTag>
                    <ListItem>
                        <Text
                            text="To run contests, select entrans, and choose prize winners;"
                        />
                    </ListItem>
                    <ListItem>
                        <Text
                            text="To respond to your questions or the comments you email to us;
                            "
                        />
                    </ListItem>
                    <ListItem>
                        <Text
                            text="To provide you with newsletters, bulletins or other information about our design or communication activities;"
                        />
                    </ListItem>
                    <ListItem>
                        <Text
                            text="To keep aggregate information on Web site use;"
                        />
                    </ListItem>
                </ListTag>

                <SubHead
                    text="B. Anonymous Information About Your Visit:"
                />

                <Text
                    text="When you visit this site, information about your visit (e.g. how you navigate the site) may be collected and stored. This information may include the length of your visit, the date and time of your visit, the pages you look at and the sites you visit before and after leaving this site. It does not include personally identifiable information such as your name, mailing or e-mail address or telephone number. We use this non-identifiable and aggregate information to better design this Web site and develop an efficient Web marketing plan. We also may share this information with our Web designer, board of directors and sponsors."
                />

                <Text
                    text="Adrian Tejada may collect the following non-identifiable information when you visit this Web site:"
                />

                <ListTag>
                    <ListItem>
                        <Text
                            text="Your Internet Service Provider (ISP)"
                        />
                    </ListItem>
                    <ListItem>
                        <Text
                            text="Time of your visit"
                        />
                    </ListItem>
                    <ListItem>
                        <Text
                            text="Pages you visited"
                        />
                    </ListItem>
                    <ListItem>
                        <Text
                            text="Web browser used"
                        />
                    </ListItem>
                    <ListItem>
                        <Text
                            text="Web browser used"
                        />
                    </ListItem>
                </ListTag>

                <SubHead
                    text="What If I Do Not Agree With this Privacy Policy?"
                />

                <Text
                    text="By visiting this Web site and voluntarily providing personal information to Adrian Tejada’s Web site, you agree to the terms of this online User Agreement and the Privacy Policy contained herein. However, We welcome your comments and/or suggestions on improving this Web site and policies."
                />

                <Text
                    text="Adrian Tejada"
                />

                <Text
                    text="April 2022"
                />
            </ContentCont>
        </ColonCont>
      </ScaleDiv>
        <Footer/>
  </MainCont>
}