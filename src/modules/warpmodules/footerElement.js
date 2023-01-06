
export default function FooterElement(props)
{
    return(
        <div>
            <p className="footP">{props.title}</p>
            <p>
                {props.text1}<br/>
                {props.text2}
            </p>


        </div>
    )
}