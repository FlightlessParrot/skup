
import PhotoText from "./mainmodules/photoText"
import TheText from "./mainmodules/theText"
// import puszki from '../images/photo1/puszki.jpg'
// import wozek from '../images/photo1/wozek.jpg'
// import wozki from '../images/photo1/wozki.jpg'
import text from '../text/text_main.js'
// import ph1 from '../images/photo2/ph1.jpg'
// import ph2 from '../images/photo2/ph2.jpg'
// import ph3 from '../images/photo2/ph3.jpg'
import textArrow from '../text/text_main_arrow.js'
import ArrowDiv from "./mainmodules/arrowDiv"
import HowWeWork from "./mainmodules/howWeWork"
import ArrowUpperDiv from "./mainmodules/arrowUpperDiv"
import textUpperArrow from "../text/text_main_upper_arrow"
import { useOutletContext } from "react-router-dom"
export default function Main()
{
    const photosArray=useOutletContext();
    return(
        <>
        <div className="mainImg">
           <TheText />
        </div>
        <ArrowUpperDiv textArray={textUpperArrow} />
       <PhotoText photos={photosArray} way='row' describe={text[0].describe} title={text[0].title} text={text[0].text} />
       <ArrowDiv info={textArrow}/>
       <PhotoText photos={photosArray} way='row-reverse' describe={text[1].describe} title={text[1].title} text={text[1].text} />
       <HowWeWork />
        </>
    )
}