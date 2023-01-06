import Photos from "./galerymodules/photos"
export default function Galery(props)
{
    const trainArray=[
        {
            photo: './images/puszki.jpg',
            title: 'Title',
            id: '1'
        },
        {
            photo: './images/puszki.jpg',
            title: 'Title',
            id: '2'
        },
        {
            photo: './images/puszki.jpg',
            title: 'Title',
            id: '3'
        },
        {
            photo: './images/puszki.jpg',
            title: 'Title',
            id: '4'
        },
        {
            photo: './images/puszki.jpg',
            title: 'Title',
            id: '5'
        },
        {
            photo: './images/puszki.jpg',
            title: 'Title',
            id: '6'
        },
        {
            photo: './images/puszki.jpg',
            title: 'Title',
            id: '7'
        }
    ]
    return(<>
       <div className="navPlaceholder"></div>
            <Photos array={trainArray}/></>

    )
}