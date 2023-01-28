

export default async function action({params,request})
{
    try{
    const data= await request.formData()
   
    const cred= 'basic '+btoa(data.get('login')+':'+ data.get('password'))
      console.log(data.get('login')+':'+ data.get('password'))
    const eventData={login: data.get('login'), password: data.get('password')}
    const response = await fetch('/server/login.php',
    {
        
        method: request.method,
        mode: "cors",
        credentials: "include",

        headers:{
            'Content-Type': 'application/json',
            'Authorization': cred,
        },
        body: JSON.stringify(eventData),
     })  
     if (!response.ok) {
      console.log(response);
      throw new Error(`Błąd status: ${response.status}`);
    }
     const answer= await response.json()
  
    console.log(answer)
    return {answer: answer};
    }
     catch(e)
     {
      console.log(e)
      console.log(e.message)
      return e;
     }

   
}