
import DownloadFile from './downloadmodules/downloadFile'
export default function Download()
{
    const decisions=[
        {link: '/documents/zezwolenie.pdf', nazwa: 'Zezwolenie na zbieranie odpadów', key: 1},
        {link:'/documents/KRS.pdf', nazwa: 'KRS spółki Mustang Sp. z o.o.', key: 2}
    ]
    const jsxElements =decisions.map((element)=><DownloadFile fileLocation={element.link} fileName={element.nazwa} key={element.key}/>)
    return(<>
   
    <div className="navPlaceholder"></div> 
    <div className='downloadTitleDiv'><h1 >Pliki do pobrania</h1>
    <h2> Pobierz dokumenty prawne związane z naszą działalnością.</h2></div>
    <div className='downloads'>{jsxElements}</div>
       </>)
}