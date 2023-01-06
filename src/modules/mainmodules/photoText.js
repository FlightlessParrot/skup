import {useState, useEffect} from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function PhotoText(props)
{
    const ref=useRef(null)
    const [image, setImage]=useState(props.photo1);
   
    useEffect(()=>
    {
        const photo=choosePhoto(image)
        let changer=setTimeout(setImage, 8000, photo )
        return(()=>{clearTimeout(changer)
         console.log(changer)
        })
    },[image])
    
function choosePhoto(image)
{
    switch(image){
        case props.photo1:
        return props.photo2;
        case props.photo2:
        return props.photo3;
        case props.photo3:
        return props.photo1;
        default:
        console.log('błąd')
    }
   
} 
function switcher()
    {
        const change=choosePhoto(image)
        setImage(change)
    }
    
    return(
        <SwitchTransition>
        <CSSTransition
        nodeRef={ref}
        classNames='dissappear'
        timeout={1200}
        key={image}
        >
        <div className='mainPhotoDiv' style={{flexDirection: props.way}}>
        <div className='placeholder'><img className='mainPhotos' src={image} alt='Zdjęcie pokazujące działalność skupu' ref={ref} onClick={switcher}/></div>
        <section>
            <h3> {props.describe}</h3>
            <h2>{props.title}</h2>
            {props.text}
        </section></div>
        </CSSTransition>
        </SwitchTransition>
    )
}