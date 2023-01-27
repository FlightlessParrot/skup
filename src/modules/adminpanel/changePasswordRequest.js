import { redirect } from "react-router-dom";

export default async function changePasswordRequest(newPassword, login, password, setError, closeWindow, logout)
{
    const cred='basic '+btoa(login+':'+ password);
    try{
    const response = await fetch('/skupServer/change_password.php',
    {
        
        method: "put",
        mode: "cors",
        credentials: "include",

        headers:{
            'Content-Type': 'application/json',
            'Authorization': cred,
        },
        body: JSON.stringify(btoa(newPassword))
     })  
     if (!response.ok) {
      console.log(response);
      throw new Error(`Błąd status: ${response.status}`);
    }
     const answer= await response.text();
    console.log(answer)
    setError('Zmieniono hasło. Okno zostanie za chwilę zamknięte')
    setTimeout(closeWindow,4500, false)
    setTimeout(logout,4550, false)
    return answer;
    }
     catch(e)
     {
      console.log(e.message)
      setError(e.message)
      return e.message;
     }
}