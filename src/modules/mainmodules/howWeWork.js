
export default function HowWeWork(props)
{
    const phase=['Skup surowców wtórnych', 'Klasyfikacja oraz segregacja ', 'Przekazanie odpadów do dalszego procesu recyclingu']
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
        <p>Nasza firma działa z powodzeniem na terenie województw : małopolskiego , podkarpackiego oraz śląskiego. <br />
        Obsługujemy klientów indywidualnych jak również podmioty gospodarcze z różnych branż. <br />
        Naszym celem jest pozyskanie kontrahenta celem dalszej owocnej współpracy.</p>
       <div id='procedure'> {jsxElements}</div>
        </div>
    )

}