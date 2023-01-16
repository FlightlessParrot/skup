import { NavLink } from "react-router-dom"
export default function Links(props)
{
    return(   <ul>
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
        </ul>)
}
 