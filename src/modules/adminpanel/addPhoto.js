import { useRef, useState} from "react"
import plusik from "../../images/ikonki/plus.png"
import sendPhoto from "./sendPhoto"
export default function AddPhoto(props)
{
    const [upload, setUpload]= useState(false)
    const[file, setFile]=useState('')
    const ref=useRef(0)
    function clickHandler()
    {
        props.setInfo('')
        setUpload(true)
    }
    function clickSubmitHandler(e)
    {
        e.preventDefault();
        props.setInfo('')
        sendPhoto(props.login,props.password,props.setInfo,file);
        ref.current.reset();
        setFile('');
        setUpload(false);

    }
    function fileHandler(e)
    {
        e.target.files && setFile(e.target.files[0])
    }

    console.log(file)
    return(
        <div className="addPhotoContainer"><div onClick={clickHandler}>
            {
            upload?
            <form ref={ref}>
            <input type="file" name="fileToUpload" id="fileToUpload" onChange={fileHandler} ></input>
            <input type="submit" onClick={clickSubmitHandler}></input>
            </form>
            :<img src={plusik} alt='ilustracja przedstawiająca zielony plus' />}
            </div></div>
    )
}