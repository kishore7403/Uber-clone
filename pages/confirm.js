import {useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from "next/link"

const Confirm = () => {

    const router =useRouter();
    const {pickup,dropof}=router.query;

    const getPickUpCoordinates=(pickup)=>{

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1Ijoia2lzaG9yZTc0MDMiLCJhIjoiY2t2bTJvNW1tMGRmbjJ0cWZ0dnFpejI2eiJ9.9PbfrFri4MfKrWOSZnDODw",
            limit:1
        }) 
    )
    .then(response => response.json())
    .then(data=> {
        setPickupCoordinates(data.features[0].center)
    })
}

    const getDropofCoordinates=(dropof)=>{

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropof}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1Ijoia2lzaG9yZTc0MDMiLCJhIjoiY2t2bTJvNW1tMGRmbjJ0cWZ0dnFpejI2eiJ9.9PbfrFri4MfKrWOSZnDODw",
            limit:1
        }) 
    )
    .then(response => response.json())
    .then(data=> {
        setDropofCoordinates(data.features[0].center)
    })

    }
useEffect(()=>{
    getPickUpCoordinates(pickup);
    getDropofCoordinates(dropof);

},[pickup,dropof])

const[pickupCoordinates,setPickupCoordinates]=useState()
const[dropofCoordinates,setDropofCoordinates]=useState()

    return (
        <Wrapper>
            <Link href="/search" passHref={true}>
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
            <Map pickupCoordinates={pickupCoordinates}
                dropofCoordinates={dropofCoordinates}/>
            <RideContainer>
                <RideSelector/>
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm
                    </ConfirmButton>
                </ConfirmButtonContainer>

            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper=tw.div`
flex flex-col h-screen
`

const RideContainer=tw.div`
flex flex-col flex-1 h-1/2
`
const BackButton=tw.img`
h-8 w-8 absolute z-10 bg-white rounded-full m-3
`
const ConfirmButton=tw.div`
text-center text-white bg-gray-900 mx-4 my-2 px-4 py-3 cursor-pointer rounded-sm text-xl border-t-2
`
const ConfirmButtonContainer=tw.div`
border-t-2

`