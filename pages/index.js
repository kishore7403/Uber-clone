import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from "./components/Map"

export default function Home(){
  return (
    <Wrapper>
    <Map></Map>
    <ActionItems>
      <Header>
        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></UberLogo>
        <Profile>
          <Name>Kishoreganesh</Name>
          <UserImage src="https://media-exp1.licdn.com/dms/image/C5603AQEtGAKac2Gq5g/profile-displayphoto-shrink_400_400/0/1628967556792?e=1641427200&v=beta&t=d-ePJN8yOBEaHF-AiP6GnnnfugUe72TRt22jM1jASLc"/>

        </Profile>
      </Header>
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
h-12 w-12 rounded-full border border-gray-300 p-px
` 