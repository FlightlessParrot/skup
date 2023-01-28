import Photos from "./galerymodules/photos";

import { useOutletContext } from "react-router-dom";
export default function Galery(props)
{
  const photosArray=useOutletContext()[0];
 
    return(<>
    
       <div className="navPlaceholder"></div>
       <h1 id='galeryH1'> Zobacz jak pracujemy</h1>
       <h2 id='galeryH2'>Jesteśmy dobrze zorganizowani i posiadamy doświadczony zespół. Zobacz jak pracują fachowcy!</h2>
            <Photos array={photosArray}/></>

    )
}