

export default async function deletePhoto(id, login, password, setInfo)
{
    const cred='basic '+btoa(login+':'+ password);
    console.log(id)
    try{
    const response = await fetch('/server/deletePhoto.php?id='+id,
    {
        
        method: "delete",
        mode: "cors",
        credentials: "include",

        headers:{
            'Content-Type': 'application/json',
            'Authorization': cred,
        },
     })  
     if (!response.ok) {
      console.log(response);
      throw new Error(`Błąd status: ${response.status}`);
    }
     const answer= await response.json();
    console.log(answer)
    setInfo(answer)
    return answer;
    }
     catch(e)
     {
      console.log(e)
      console.log(e.message)
      setInfo(e)
      return e.message;
     }
}