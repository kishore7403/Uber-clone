import React from "react"
import { useEffect } from "react"
import tw from "tailwind-styled-components"
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2lzaG9yZTc0MDMiLCJhIjoiY2t2bTJvNW1tMGRmbjJ0cWZ0dnFpejI2eiJ9.9PbfrFri4MfKrWOSZnDODw';

const Map=(props)=>{    
    
        useEffect(() => {
          const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011,39.39172],
          zoom: 3
          });
          if(props.pickupCoordinates){
              addToMap(map,props.pickupCoordinates)
          }
          if(props.dropofCoordinates){
              addToMap(map,props.dropofCoordinates)
          }

          if(props.pickupCoordinates && props.dropofCoordinates){
              map.fitBounds([
                  props.pickupCoordinates,
                  props.dropofCoordinates
                ],{padding:60})

          }
          },[props.pickupCoordinates,props.dropofCoordinates]);

         const addToMap=(map,coordinates)=>{
            const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);

         } 
    return (
        <Wrapper id="map">

        </Wrapper>
    )

}
export default Map;

const Wrapper=tw.div`
flex-1 h-1/2
`
