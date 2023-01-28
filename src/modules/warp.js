import { useEffect, useState } from "react";
import { Link,  Outlet, useLocation, useNavigate } from "react-router-dom";
import FooterElement from "./warpmodules/footerElement";
import logo from '../images/logo.png';
import hamburger from '../images/ikonki/hamburger48.png'
import Links from './warpmodules/links'
import trainArray from './../additionalData/exPhotosArray'
import getPhotosArray from "../getFromServer/getPhotosArray";
export default function Warp(props) {
const [photosArray, setPhotosArray]=useState(trainArray)
    const [display, setDisplay]=useState('none');
  const location=useLocation();
  const navigate=useNavigate();
  const[downloadPhotos, setDownloadPhotos] = useState(0)
    useEffect(()=>{
        getPhotosArray('./server/getJSON.php', setPhotosArray);
        console.log('download photos array')
    },[downloadPhotos])

    useEffect(()=>{
    location.pathname==="/" && navigate("/main")},[location.pathname, navigate])
      function clickHandler()
      {
        display==='none'?setDisplay('flex'): setDisplay('none')
      }
      
  return (
    <>
      <nav id='classicNav'>
        <div>
          <Link to='main'><img src={logo} alt="logo"/></Link>
        </div>
        <Link to='contact' className="mapsNav">
        <button>
          Zobacz dojazd
        </button></Link>
        <Links />
        <button id='hamburgerButton' onClick={clickHandler}><img id='hamburger'src={hamburger} alt='menu'/></button>
      </nav>
      <div id='mobileNav' style={{display:display}} onClick={clickHandler}><Links/></div>
      <Outlet context={[photosArray, setDownloadPhotos ]}/>
      {props.children}
      <footer>
        <div>
          <img src={logo} alt="logo" />
          <p>
            <b>MUSTANG SP. Z O.O.</b>
            <br />
            NIP: 6783198397
            <br />
            KRS: 0000977847
            <br />
            REGON: 522382960
            <br />
            Numer rejestrowy BDO: 000585637
          </p>
        </div>
        <FooterElement
          title="Siedziba i adres korespondencyjny:"
          text1="os. Oświecenia 46A/18"
          text2="31-636 Kraków"
        />
      <FooterElement
          title="Adres skupu/magazyn"
          text1="Zastów 32-010"
          text2="działka nr ewid.414"
        />
        <FooterElement
          title="Kontakt:"
          text1="tel. 519 593 956, 505 999 001"
          text2="mail: biuro@mustang-jk.pl"
        />
        <FooterElement
          title="Godziny otwarcia:"
          text1="pn-pt: 7:00 - 15:00"
          text2={<br/>}
          />
      </footer>
    </>
  );
}
