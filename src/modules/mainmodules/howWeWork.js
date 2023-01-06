
export default function HowWeWork(props)
{
    const phase=['Skup i przetwarzanie na surowce wtórne', 'Demontaż i segregacja', 'Odzysk i sprzedaż']
    let i=0;
    const jsxElements=phase.map((element)=>{
        i++;
    return(
        <div className="workDiv" key={i}>
            <div className='number'>{i}</div>
            <p>{element}</p>
        </div>
    )
}
    )
    return(
        <div className="howWeWorks">
        <h2>Jak działamy</h2>
        <p>Działalność naszej firmy opiera się na następujących krokach: </p>
       <div id='procedure'> {jsxElements}</div>
        </div>
    )

}