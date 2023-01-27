import mustang from "../images/logo.png";
import React, { Suspense, useState } from "react";
import { Form, useActionData,  useNavigate,  useOutletContext } from "react-router-dom";
import { useEffect, useReducer } from "react";
import ChangePassword from "./adminpanel/changePassword";
const Panel=React.lazy(()=>import('./adminpanel/panel'))
export default function Login() {
  const navigate= useNavigate();
    const photosArray = useOutletContext();
    const [password, setPassword]=useState(false)
  const initValue = {
    login: "",
    password: "",
    sendLogin: "",
    sendPassword: "",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return { ...state, login: action.value };
      case "password":
        return { ...state, password: action.value };
      case "send":
        
        return {
          login: "",
          password: "",
          sendLogin: state.login,
          sendPassword: state.password,
        };
        default:
          return(initValue)
    }
  }
  const [value, dispatch] = useReducer(reducer, initValue);
  const data = useActionData();

  useEffect(() => {
     dispatch({type: 'send'})
  }, [data]);

  function logout()
  {
    dispatch({type:''})
    navigate('/admin')
  }

  return (
    <>
      <div className="navPlaceholder"></div>
      <div id="loginDiv">
        {!(data?.answer===true) ? (
          <>
            <div >
              <img src={mustang} />
              <h1>Panel administratora</h1>
            </div>
            {!(data===undefined)  && <p style={{color: 'red'}}>Wystąpił błąd. Logowanie nie udane</p>}
            <Form method="post">
              <label htmlFor="login">Login:</label>
              <input
                type="text"
                value={value.login}
                name="login"
                id="login"
                placeholder="login"
                required
                onChange={(e) =>
                  dispatch({ type: "login", value: e.target.value })
                }
              ></input>
              <label htmlFor="password">Hasło:</label>
              <input
                type="password"
                value={value.password}
                name="password"
                id="password"
                placeholder="hasło"
                required
                onChange={(e) =>
                  dispatch({ type: "password", value: e.target.value })
                }
              ></input>
              <input type="submit" value="Zaloguj"  ></input>
            </Form>
          </>
        ):
        <><h1>Witaj administratorze</h1>
        <button className='redButton' onClick={logout}>Wyloguj</button><button className="redButton" onClick={()=>setPassword(true)}>Zmień hasło</button></>
    }
      </div>
      {password && <ChangePassword login={value.sendLogin} password={value.sendPassword} closeWindow={setPassword} logout={logout}/>}
      {data?.answer===true &&<Suspense fallback={<div>Loading...</div>}>   <Panel login={value.sendLogin} password={value.sendPassword} photosArray={photosArray} /> </Suspense>}
    </>
  );
}
