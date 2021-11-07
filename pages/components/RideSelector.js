import React,{useEffect,useState} from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../../data/carList'

const RideSelector = ({pickupCoordinates,dropofCoordinates}) => {
    
    useEffect(()=>{
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropofCoordinates[0]},${dropofCoordinates[1]}?access_token=pk.eyJ1Ijoia2lzaG9yZTc0MDMiLCJhIjoiY2t2bTJvNW1tMGRmbjJ0cWZ0dnFpejI2eiJ9.9PbfrFri4MfKrWOSZnDODw`)
        .then(res=>res.json())
        .then(data=>{
            if(data.routes.length>0){
                setRideDuration(data.routes[0].duration/100)
            }
            else{
                setRideDuration(0);
            }
        })
        .catch((e)=>{
            console.log(e);
        });
        //data=>setRideDuration(data.routes[0].duration/100)
    },[pickupCoordinates,dropofCoordinates])

    const [rideDuration,setRideDuration]=useState(0);
    return (
        <Wrapper>
            <Title>Choose a ride,or swipe up for more</Title> 
            <CarList>
                {carList.map((car,index)=>(
                    <Car key={index}>
                    <CarImage src={car.imgUrl}/>
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>5 Mins away </Time>
                    </CarDetails>
                    <Price>{"$"+(rideDuration*car.multiplier).toFixed(2)}</Price>
                </Car>

                ))}
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper=tw.div`
flex flex-col flex-1 overflow-y-scroll
`

const Title=tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const Car=tw.div`
flex p-4 items-center
`
const CarImage=tw.img`
h-14 mr-2
`
const CarList=tw.div`
overflow-y-scroll
`

const CarDetails=tw.div`
flex-1
`
const Service=tw.div`
font-medium 
`
const Time=tw.div`
text-blue-500 text-xs
`
const Price=tw.div`
text-xs
`
/*Map Style: mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph

- Uber X: https://i.ibb.co/cyvcpfF/uberx.png
- Uber XL: https://i.ibb.co/YDYMKny/uberxl.png
- Uber Black: https://i.ibb.co/Xx4G91m/uberblack.png
- Uber Black SUV: https://i.ibb.co/1nStPWT/uberblacksuv.png

- Uber Logo (index.js): https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg
- Uber Logo (Login.js): https://i.ibb.co/n6LWQM4/Post.png
- Login Image: https://i.ibb.co/CsV9RYZ/login-image.png

- Bike Image: https://i.ibb.co/n776JLm/bike.png
- Schedule Image: https://i.ibb.co/5RjchBg/uberschedule.png

- Back Button: https://img.icons8.com/ios-filled/50/000000/left.png
- Circle Icon: https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png
- Line: https://img.icons8.com/ios/50/9CA3AF/vertical-line.png
- Square Icon: https://img.icons8.com/windows/50/000000/square-full.png

- Plus Icon: https://img.icons8.com/ios/50/000000/plus-math.png
- Star Icon: https://img.icons8.com/ios-filled/50/ffffff/star--v1.png
*/