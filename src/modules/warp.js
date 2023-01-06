import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import FooterElement from "./warpmodules/footerElement";
import logo from '../images/logo.png';

export default function Warp(props) {
const location=useLocation();
const navigate=useNavigate();
    
    useEffect(()=>{
    location.pathname==="/" && navigate("/main")},[location.pathname, navigate])

  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <ul>
          <li>
            <NavLink to="main">O{'\u00A0'}NAS</NavLink>
          </li>
          <li>
            <NavLink to="galery">GALERIA</NavLink>
          </li>
          <li>
            <NavLink to="contact">KONTAKT</NavLink>
          </li>
          <li>
            <NavLink to="download">DO POBRANIA</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <div>
          <img src={logo} alt="logo" />
          <p>
            <b>MUSTANG SP. Z O.O.</b>
            <br />
            <br />
            NIP: 6783198397
            <br />
            KRS: 0000977847
            <br />
            REGON: 522382960
          </p>
        </div>
        <FooterElement
          title="Adres KRS:"
          text1="os. Oświecenia 46A/18"
          text2="31-636 Kraków"
        />
      <FooterElement
          title="Adres skupu"
          text1="działka nr ewid.414"
          text2="Zastowie 32-010"
        />
        <FooterElement
          title="Kontakt:"
          text1="tel. 519593956"
          text2="mail: biuro@mustang-jk.pl"
        />
        <FooterElement
          title="Godziny otwarcia:"
          text1="pn-pt: 8:00 - 16:00"
          text2={<br/>}
          />
      </footer>
    </>
  );
}
