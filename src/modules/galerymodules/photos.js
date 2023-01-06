import { useState, useEffect } from "react";
export default function Photos(props) {
  const [buttonDisplay, setButtonDisplay] = useState("block");
  const [visibleElements, setVisibleElements] = useState(2);
  const photosArray = props.array.map((element) => <img src={element.photo} key={element.id} />);
  let jsxElements = [];

  for (let x = 0; x < visibleElements; x++) {
    const photoNumber = x * 3;
    const divPhotosClass= (x % 2)? ['bigPhoto2','smallPhoto2']:['bigPhoto',"smallPhoto"];
    

    jsxElements.push(
      <div className="threePhotosGrid" key={x}>
        <div className={divPhotosClass[0]}>{photosArray[photoNumber]}</div>
        <div className={divPhotosClass[1]}>{photosArray[photoNumber + 1]}</div>
        <div className={divPhotosClass[1]}>{photosArray[photoNumber + 2]}</div>
      </div>
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
  return (
    <div id="centralPhotoDiv">
      {jsxElements}
      <button onClick={clickHandler} style={{ display: buttonDisplay }}>
       Zobacz więcej
      </button>
    </div>
  );
}
