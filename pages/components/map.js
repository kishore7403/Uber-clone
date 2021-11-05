import React from "react"
import { useEffect } from "react"
import tw from "tailwind-styled-components"
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2lzaG9yZTc0MDMiLCJhIjoiY2t2bTJvNW1tMGRmbjJ0cWZ0dnFpejI2eiJ9.9PbfrFri4MfKrWOSZnDODw';

const Map=()=>{
    
        useEffect(() => {
          map.current = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [80.270721,13.082680],
          zoom: 10
          });
          });
    return (
        <Wrapper id="map">

        </Wrapper>
    )

}
export default Map;

const Wrapper=tw.div`
flex-1
`
