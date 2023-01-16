import {useState, useEffect} from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function PhotoText(props)
{
    const ref=useRef(null)

    const [image, setImage]=useState(props.photos[0].photo);
    const [counter, setCounter]= useState(0)
   
    useEffect(()=>
    {
        const changer=setTimeout(nextPhoto, 5000)
        return(()=>{clearTimeout(changer)
        })
    },[image])
    
function nextPhoto()
{
    counter<(props.photos.length-1) ? setImage(props.photos[counter+1].photo): setImage(props.photos[0].photo);
   counter<(props.photos.length-1) ? setCounter(()=>counter+1):setCounter(0);
} 

    
    return(
        <SwitchTransition>
        <CSSTransition
        nodeRef={ref}
        classNames='dissappear'
        timeout={600}
        key={image}
        >
        <div className='mainPhotoDiv' style={{flexDirection: props.way}}>
        <div className='placeholder'><img loading='lazy' className='mainPhotos' src={image} alt='Zdjęcie pokazujące działalność skupu' ref={ref} onClick={nextPhoto}/></div>
        <section>
            <h3> {props.describe}</h3>
            <h2>{props.title}</h2>
            {props.text}
        </section></div>
        </CSSTransition>
        </SwitchTransition>
    )
}