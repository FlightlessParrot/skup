import { GoogleMap,useLoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";
import googleMapsApiKey from "../../confidential/googleMapsApiKey";
import { useMemo, useCallback } from "react";
import { useState, useEffect } from "react";
import React from 'react'
import mustang from '../../images/ikonki/logo_pin100.png'

import { DirectionsService } from "@react-google-maps/api";

export default function GoogleMaps()
{
   const [results, setResults]=useState(null)
  const {isLoaded} = useLoadScript(googleMapsApiKey)
const route= useCallback((result, status)=>{
   !results && setResults(result)
},[])

  if(!isLoaded) return <div className="mapParent"><div className='map'>Loading...</div></div>
    
         return(
            <div className="mapParent"><Map route={route} results={results} /></div>
         )





}
function Map(props)
{
   const center= useMemo(()=>({lat:50.112922, lng: 20.046882}),[props])
   const origin =useMemo(()=>({lat: 50.104039, lng: 20.072456}),[])
    return(<GoogleMap zoom={14} center={center} mapContainerClassName='map'>
     { (!props.results) && <DirectionsService callback={props.route} options={{origin: origin,
    destination: center, travelMode: 'WALKING'}}/>}
     {props.results && <DirectionsRenderer directions={props.results} options={{preserveViewport: true}}/>}
       <Marker position={center} icon={mustang}></Marker>
        </GoogleMap>)
}

