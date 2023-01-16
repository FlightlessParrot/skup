import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { useState, useEffect, useRef } from "react";

export default function TheText(props)
{
    const [transition, startTransition]=useState(0)
    const [chosenText, setText]=useState(0)
    const text=[<b>KEEP CALM AND CLEAN EARTH</b>,
    <><h1>HURTOWY SKUP ZŁOMU, METALI ORAZ ODPADÓW</h1>
        <p>KEEP CALM AND CLEAN EARTH</p></>,<b> ATRAKCYJNE CENY </b>
    ];
    useEffect(()=>{
        
        setTimeout( set, 6000)
    },[transition])

    function set()
    {
        const number = transition===0 ? 1:0;
        startTransition(number)
        chosenText-2? setText(()=>chosenText+1):setText(0)
    }

    const firstElement=useRef(null)
    return(
       
        <SwitchTransition>
        <CSSTransition
        classNames='theText'
        key={transition}
        timeout={1000}
        nodeRef={firstElement}
        >
        <div className='theText' ref={firstElement}> {text[chosenText]}</div>
       
        </CSSTransition></SwitchTransition>
       
    )
}