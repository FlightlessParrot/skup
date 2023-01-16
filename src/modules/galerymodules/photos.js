import { useState, useEffect} from "react";
import { CSSTransition } from "react-transition-group";
import DisplayedElements from "./displayedElements";
export default function Photos(props) {
  const [buttonDisplay, setButtonDisplay] = useState("block");
  const [visibleElements, setVisibleElements] = useState(2);
  const [referemce,setReference]=useState(null)
  const photosArray = props.array.map((element) => <img src={element.photo} key={element.id} />);
  let jsxElements = [];
 const length = photosArray.length;
  for(let  x=0; x<(length);x+=3)
  {
    
    const divPhotosClass= (x % 2)? ['bigPhoto2','smallPhoto2']:['bigPhoto',"smallPhoto"];
    jsxElements.push(
      <CSSTransition
      key={x} 
      classNames='dissappear2'
      timeout={1000}
      nodeRef={referemce}
      >
      <div className="threePhotosGrid" key={x} ref={newReference}> 
        <div loading='lazy' className={divPhotosClass[0]}>{photosArray[x]}</div>
        <div loading='lazy' className={divPhotosClass[1]}>{photosArray[x + 1]}</div>
        <div loading='lazy' className={divPhotosClass[1]}>{photosArray[x + 2]}</div>
      </div></CSSTransition>
    );
  }
   

  useEffect(() => {
    if (visibleElements * 3 >= photosArray.length) {
      setButtonDisplay("none");
    }
  }, [buttonDisplay, visibleElements]);

  function clickHandler() {
    if (visibleElements * 3 < photosArray.length) {
      setVisibleElements(() => visibleElements + 1);
    }
  }
function newReference(ref){
  setReference(ref)

}
  return (
    <div id="centralPhotoDiv">
       <DisplayedElements JSXElements={jsxElements} visibleElements={visibleElements} /> 
      <button className="redButton" onClick={clickHandler} style={{ display: buttonDisplay }}>
       Zobacz więcej
      </button>
    </div>
  );
}

