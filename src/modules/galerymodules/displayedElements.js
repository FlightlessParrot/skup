import { useEffect, useReducer} from "react"
import { TransitionGroup } from "react-transition-group"


export default function DisplayedElements(props)
{
    const initialState={currentElement: 0, displayedElements: [props.JSXElements[0], props.JSXElements[1]]  }
    
    const [displayedElements, setDisplayedElements] = useReducer(reducer, initialState)
    useEffect(()=>{ 
        const timer = setTimeout(setDisplayedElements, 4500)
        if(props.visibleElements>=props.JSXElements.length){
            clearTimeout(timer)
    }
        return (()=>{
            clearTimeout(timer)}
        )
    },[displayedElements,setDisplayedElements])
    useEffect(()=>{
        setDisplayedElements();
    },[props.visibleElements])
    function reducer(state, action)
    {

        let length= props.JSXElements.length;
        let elements=[];
        let y= state.currentElement< (length-1) ? state.currentElement+1: 0;
        for(let x= 0; x<props.visibleElements; x++)
        {
            let z=y+x
            if(z>=(length))
            (
                z=(z-(length))
            )
            elements.push(props.JSXElements[z])
        }
        return({currentElement: y, displayedElements: elements})
        
    }
    return(<TransitionGroup>
        {displayedElements.displayedElements}
        </ TransitionGroup>
    )
}