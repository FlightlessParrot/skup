import ContactData from "./contactmodules/contactData";
import GoogleMaps from "./contactmodules/googleMaps";
export default function contact()
{
    
    return(<><div className="navPlaceholder"></div>
        <div className="contactDiv">
            <ContactData />
            <GoogleMaps />
        </div></>
    )
}