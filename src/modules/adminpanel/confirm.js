
export default function Confirm(props)
{

    const data=props.photosArray.filter(element=>element.id===props.remove)

    return(<>
        {!(props.remove==='') && <div className="background"><div className="confirm">
            <h3>Czy na pewno chcesz usunąć to zdjęcie?</h3>
            <img src={data[0].photo} />
            <div className="divButton">
            <button onClick={()=>props.setRemove('')}>NIE</button><button onClick={()=>props.setConfirmation(true)}>TAK</button>
            </div>
        </div></div>}</>
    )
}