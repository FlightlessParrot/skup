import arrow from "../../images/arrow/arrow80.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";
export default function ArrowUpperDiv(props){
    const[currentElement,setCurrentElement]=useState(-1)
    const[remaker, remake]= useState(0)

    useEffect(()=>
    {let interval=setInterval(upElement, 2000)
        if(currentElement>=2)
        {
            clearInterval(interval)
        }
        return(
            ()=>{clearInterval(interval)}
        )
    },
    [currentElement, remaker]
    ) 
    function upElement(){
        setCurrentElement(()=>currentElement+1) 
    }   
    const upperDivs=props.textArray.map((element,index)=>
    {
        return(
            <CSSTransition
            key={remaker?index+3:index}
            timeout={1500}
            classNames='transUpperArrow'
            >
            <div className='upperArrow' onClick={newArrows}>
                <img src={arrow} />
                <b>{remaker===0 ? element: 'Atrakcyjne ceny'}</b>
            </div></CSSTransition>
        )
    })
    const actualDivs=upperDivs.filter((element,index)=>index<=currentElement)
    function newArrows(){
        
        setCurrentElement(2)
        remake(()=>remaker===0?1:0)

    }
   
    return(
        <div id='upperArrowsParent' >
       <TransitionGroup  component={null}>
        {actualDivs}
       </TransitionGroup>
        </div>

    )
}