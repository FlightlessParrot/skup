
import DownloadFile from './downloadmodules/downloadFile'
export default function Download()
{
    const decisions=[
        {link: '/documents/decyzja_na_zbieranie_odpadow.pdf', nazwa: 'Decyzja na zbieranie odpadów', key: 1},
        {link: '/documents/decyzja_uzupelniajaca.pdf', nazwa: 'Decyzja uzupełniająca na zbieranie odpadów', key: 2},
        {link:'/documents/KRS.pdf', nazwa: 'KRS spółki Mustang Sp. z o.o.', key: 3}
    ]
    const jsxElements =decisions.map((element)=><DownloadFile fileLocation={element.link} fileName={element.nazwa} key={element.key}/>)
    return(<>
   
    <div className="navPlaceholder"></div> 
    <div className='downloadTitleDiv'><h1 >Pliki do pobrania</h1>
    <h2> Pobierz dokumenty prawne związane z naszą działalnością.</h2></div>
    <div className='downloads'>{jsxElements}</div>
       </>)
}