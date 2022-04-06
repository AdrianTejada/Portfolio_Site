import styled from 'styled-components'
import { useRouter } from 'next/router'

const MainCont = styled.footer`
    width: 100vw;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    bottom: 0px;
    @media only screen and (max-width: 700px) {
        margin-top: 200px;
    }
`

const Title = styled.h4`
    font-size: 30px;
    font-family: 'Gothic';
    color: white;
    font-weight: normal;
    margin: 0px;
    padding: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media only screen and (max-width: 700px) {
        font-size: 15px;
    }
`

const Link = styled.a`
    font-size: 20px;
    font-family: 'Gothic';
    color: white;
    font-weight: normal;
    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
    @media only screen and (max-width: 700px) {
        font-size: 10px;
    }
`

const LinkCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-evenly;
`

const LegalCont = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    position: relative;
    right: 4px;
`

const Legal = styled.div`
    font-family: 'Source';
    font-size: 9px;
    color: white;
    font-weight: normal;
    @media only screen and (max-width: 700px) {
        font-size: 8px;
    }
    padding: 10px;
    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const Div = styled.div`
    width: 2px;
    background-color: white;
    height: 10px;

`
const Emoticon = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    color: 'white';
`

export const Footer = () => {
    const router = useRouter()

 return  <MainCont>
     <Title>
     Let’s get in touch! <Emoticon>(~‾ω‾)~</Emoticon>
     </Title>
     <LinkCont>
        <Link href="mailto:tejrian@gmail.com" >Email</Link>
        <Link onClick={()=>window.open('https://github.com/AdrianTejada')}>Github</Link>
        <Link onClick={()=>windpw.open('https://www.linkedin.com/in/atej/?originalSubdomain=ca')}>LinkedIn</Link>
     </LinkCont>
    
    <LegalCont>
        <Legal onClick={()=>router.push('/termsofuse')}>
            Terms of Use
        </Legal>

        <Div/>

        <Legal onClick={()=>router.push('/privacypolicy')}>
            Privacy Policy
        </Legal>
    </LegalCont>
    



 </MainCont>
}