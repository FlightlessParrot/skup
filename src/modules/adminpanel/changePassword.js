import { useEffect, useState } from "react";
import changePasswordRequest from "./changePasswordRequest";
export default function ChangePassword(props)
{
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [sendRequest, setSendRequest]= useState(false)
  const [error, setError]=useState('')

  
  useEffect(
    ()=>{
        if(sendRequest)
        {
        setSendRequest(false);
        changePasswordRequest(newPass, props.login, props.password, setError, props.closeWindow, props.logout)
        }

    },[sendRequest]
  )

function submitHandler(e)
  {
    e.preventDefault();
    if(oldPass===props.password)
    {
        setError('')
        setSendRequest(true)
    }
    else{
        setError('Błąd. Sprawdź poprawność hasła.')
    }
  }
  return (
    <div className="changePasswordBackground"><form className="changePassword">
      <h2>Zmień hasło</h2>
        <b style={{color: 'red'}}>{error} </b>
      <label htmlFor="oldPass">Podaj stare hasło:</label>
      <input
      id='oldPass'
        type="password"
        value={oldPass}
        onChange={(e) => setOldPass(e.target.value)}
        required
      ></input>
      <label htmlFor="newPass">Podaj nowe hasło:</label>
      <input
      id="newPass"
        type="password"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
        required
      ></input>
      <div>
        <button
          className="redButton"
          onClick={(e) => {
            e.preventDefault();
            props.closeWindow(false);
          }}
        >
          Wróć
        </button>
        <button className="redButton" onClick={submitHandler}>Zatwierdź</button>
      </div>
    </form></div>
  );
}
