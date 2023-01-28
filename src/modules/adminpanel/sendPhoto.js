export default async function sendPhoto(login, password, setInfo, file)
{
    const cred='basic '+btoa(login+':'+ password);
    let formData= new FormData();

    formData.append("file",file)
    try{
    const response = await fetch('/server/sendPhoto.php',
    {
        
        method: "post",
        mode: "cors",
        credentials: "include",

        headers:{
            
            'Authorization': cred,
        },
        body: formData,
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