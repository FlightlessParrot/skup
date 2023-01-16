import file_symbol from '../../images/ikonki/file_icon.png'

export default function DownloadFile(props)
{

    return(
        <a href={props.fileLocation} className='downloadLink'>
        <div className='downloadFile'>
            <img src={file_symbol} /><p>{props.fileName}</p>
        </div></a>
    )
}