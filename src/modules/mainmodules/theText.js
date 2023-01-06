import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { useState, useEffect, useRef } from "react";

export default function TheText(props)
{
    const [transition, startTransition]=useState(0)
    const text=[<b>KEEP CALM AND CLEAN EARTH</b>,
    <><h1>HURTOWY SKUP ZŁOMU, METALI ORAZ ODPADÓW</h1>
        <p>KEEP CALM AND CLEAN EARTH</p></>
    ];
    useEffect(()=>{
        const number = transition===0 ? 1:0;
        setTimeout( startTransition, 6000, number)
    },[transition])

    const firstElement=useRef(null)
    return(
       
        <SwitchTransition>
        <CSSTransition
        classNames='theText'
        key={transition}
        timeout={1000}
        nodeRef={firstElement}
        >
        <div className='theText' ref={firstElement}> {text[transition]}</div>
       
        </CSSTransition></SwitchTransition>
       
    )
}