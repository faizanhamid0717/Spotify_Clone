import React ,{useEffect} from 'react'
import { Login } from './components/Login'
import { useStateProvider } from './utils/stateProvider'
import { reducerCases } from './utils/Constants'
import { Spotify } from './components/Spotify'

export const App = () => {
const [{token},dispatch]=useStateProvider()


useEffect(()=>{
  const hash=window.location.hash
  // console.log('hash',hash)

  if(hash){
   const token = hash.substring(1).split("&")[0].split("=")[1]
  //  console.log('token-1 :-',token)
  if(token){
    dispatch({type:reducerCases.SET_TOKEN, token})
  }
  }
  document.title=("Spotify_Clone")

},[token,dispatch])
console.log('login',token)

  return  <div>{ token ? <Spotify/> :<Login/> }</div>
  
}

// BQBOF-fsNbod5VnQ_Ah1tMfiSnqx1K5EBafXIEtOrhtkltww6
// OOAyXuQO-yj7_9tkyiarbWB3RH6RPbNlXQAnH3vgkKboNPY7rN8
// iZH8k6WA7niBZTag1NXqvSvwWXC6DOH7Hnv3EEnrsfqT-Yyhsgg_3IXGuQvjlfDLauRkw9E6OZD-XISqBar1-x1uE-jw_jZe8ePUC8yT0
// OLgrxgKmcp59ifKOOtG4Q