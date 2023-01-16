

export default async function getPhotosArray(link, setFunction)
{
    try{
    const response= await fetch(link,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json'
            },
            //body: JSON.stringify('photos_array')
        });
    if(!response.ok)
    {throw Error('Nie udało się połączyć z serwerem')}
    else{
     const data= await response.json()
     console.log(data)
     setFunction(data);
    }
    }catch(error)
    {
        console.log(error.message)
    }
    
}