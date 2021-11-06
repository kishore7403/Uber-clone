import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

const search = () => {

        const[pickup,setPickup]=useState();
        const[dropof,setdropof]=useState();
    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/" passHref={true}>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
                </FromToIcons>
                <InputBoxes>
                    <Input placeholder="Pick up location?"
                            value={pickup}
                            onChange={(e)=>setPickup(e.target.value)}
                    />
                    <Input placeholder="where to?"
                            value={dropof}
                            onChange={(e)=>setdropof(e.target.value)}
                    />
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>

            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                SavedPlaces
            </SavedPlaces>
            <Link href={{pathname:"/confirm",query:{pickup:pickup,dropof:dropof}}} passHref={true}>
            <ConfirmButton>
                Confirm location
            </ConfirmButton>
            </Link>
        </Wrapper>
    )
}

export default search

const Wrapper=tw.div`
bg-gray-200 h-screen
`

const ButtonContainer=tw.div`
bg-white px-4 
`

const BackButton=tw.img`
h-12 cursor-pointer
`

const FromToIcons=tw.div`
flex flex-col items-center w-10
`
const InputContainer=tw.div`
flex bg-white items-center px-3
`

const Circle=tw.img`
h-2.5 w-2.5
`
const Line=tw.img`
h-10 
`

const Square=tw.img`
h-3
`
const InputBoxes=tw.div`
flex flex-col flex-1

`

const Input=tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none rounded-lg
`

const PlusIcon=tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-2
`
const SavedPlaces=tw.div`
flex items-center bg-white px-4 py-2 mt-2
`
const StarIcon=tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmButton=tw.div`
text-center text-white bg-gray-900 mx-4 mt-2 px-4 py-3 cursor-pointer rounded-sm text-xl
`