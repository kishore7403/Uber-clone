import Head from 'next/head'
import Image from 'next/image'
import { useEffect,useState } from 'react';
import { onAuthStateChanged,signOut} from 'firebase/auth'
import { auth} from '../firebase'
import { useRouter } from 'next/router'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import Link from "next/link"



export default function Home(){

  const[user,setUser]=useState(null)
  const router =useRouter()
  useEffect(()=>{
    return onAuthStateChanged(auth,user=>{
      if(user){
        setUser({
          name: user.displayName,
          photoUrl:user.photoURL,
        })
  
      }
      else{
        setUser(null)
        router.push('/login')
      }
    })
  })
  return (
    <Wrapper>
    <Map></Map>
    <ActionItems>
      <Header>
        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></UberLogo>
        <Profile>
          <Name>{user && user.name}</Name>
          <UserImage src={user && user.photoUrl} onClick={()=> signOut(auth)}/>

        </Profile>
      </Header>
      <ActionButtons>
        <Link href="/search" passHref={true}>
        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
          Ride
        </ActionButton>
        </Link>
        <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
          Wheels
        </ActionButton>
        <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
          reserve
        </ActionButton>
      </ActionButtons>
      <InputButton>
        Where to?
      </InputButton>
    </ActionItems>
    </Wrapper>
  )
}

const Wrapper=tw.div`
flex flex-col h-screen
`
const Header=tw.div`
flex justify-between items-center m
`
const ActionItems=tw.div`
flex-1 p-4
`

const UberLogo=tw.img`
h-28
`

const Profile=tw.div`
flex items-center

`
const Name=tw.div`
mr-4
`

const UserImage=tw.img`
h-12 w-12 rounded-full border border-gray-300 p-px cursor-pointer
` 

const ActionButtons=tw.div`
flex
`
const ActionButton=tw.div`
flex flex-col flex-1 justify-center items-center bg-gray-200 flex-1 m-1 h-32 rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`

const ActionButtonImage=tw.img`
h-3/5
`
const InputButton=tw.div`
flex h-20 bg-gray-200 text-xl p-4 mt-4 items-center rounded-lg
`