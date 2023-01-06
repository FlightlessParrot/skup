import arrow from "../../images/arrow/arrow80.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";
export default function ArrowUpperDiv(props){
    const[currentElement,setCurrentElement]=useState(-1)
    const nodeRef=useRef(null)
    useEffect(()=>
    {
        let interval=setInterval(upElement, 2000)
        return(
            ()=>{clearInterval(interval)}
        )
    },
    [currentElement]
    ) 
    function upElement(){
        setCurrentElement((currentElement+1))
    }   
    const upperDivs=props.textArray.map((element,index)=>
    {
        return(
            <CSSTransition
            key={index}
            timeout={1500}
            classNames='transUpperArrow'
            nodeRef={nodeRef}>
            <div className='upperArrow' ref={nodeRef} >
                <img src={arrow} />
                <b>{element}</b>
            </div></CSSTransition>
        )
    })
    const actualDivs=upperDivs.filter((element,index)=>index<=currentElement)
    return(
        <div id='upperArrowsParent'>
       <TransitionGroup  component={null}>
        {actualDivs}
       </TransitionGroup>
        </div>

    )
}