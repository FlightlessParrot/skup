import { useEffect, useState } from "react";
import Confirm from "./confirm";
import deletePhoto from "./deletePhoto"
import AddPhoto from "./addPhoto";
export default function Panel(props)
{
    const [remove, setRemove]= useState('')
    const [confirm, setConfirmation]= useState(false)
    const [info, setInfo]=useState('')
    useEffect(
        ()=>{
            if(confirm)
           {
           deletePhoto(remove, props.login, props.password, setInfo);
            setRemove('');
            setConfirmation(false);}
        },[confirm]
    )
    useEffect(
        ()=>setInfo(''),[remove]
    )
    const jsxElements=props.photosArray.map(
        (element)=><div key={element.id} className='removerDiv'>
           <div className='containerRemoverDiv'> <img src={element.photo}></img></div><button onClick={()=>{setRemove(element.id)}}>Usuń zdjęcie</button>
        </div>
    )
    return(<>
        <Confirm remove={remove} setRemove={setRemove} setConfirmation={setConfirmation} photosArray={props.photosArray} />
        
        <div className="panelInfo">{info===true &&<b style={{color:'green'}}>Operacja zakończona sukcesem</b>}
        {(info!=='' && info !==true) && <b style={{color:'red'}}>Wystąpił błąd</b>}</div>
        <AddPhoto setInfo={setInfo} login={props.login} password={props.password}/>
        <div>
            {jsxElements}
        </div>
</>
    )
}