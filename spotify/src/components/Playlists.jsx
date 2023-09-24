import React, { useEffect } from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/stateProvider'
import { reducerCases } from '../utils/Constants'
import styled from 'styled-components'

export const Playlists = () => {

  const [{token,playlists,selectedPlaylistId},dispatch]=useStateProvider()
 console.log('useStatetoken',token)
  useEffect(() => {
  try {
    const getPlaylistData = async () => {
        const response = await axios.get(
          `
          https://api.spotify.com/v1/me/playlists`,
          {
            headers: {
              Authorization: "Bearer "+ token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log('res',response.data.items)
        const { items } = response.data;
        const playlists = items.map(({ name, id }) => {
          return { name, id };
        });
        dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
      };
      getPlaylistData();
  
      console.log('token-playlist',token)
    } catch (error) {
        console.log("Error fetching playlists:", error);
      }

    }, [token,dispatch]);
    
  const changeCurrentPlaylist=(selectedPlaylistId)=>{
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId});
  }

    
    

console.log('playlist-data',playlists)

  return (
    <Container>
        playlist
        <ul>
            {playlists?.map((ele)=>{
                return (
                    <li key={ele.id} onClick={()=> changeCurrentPlaylist(ele.id)}>{ele.name}</li>
                )
            })}
            {/* {playlists?.map((ele)=>{
                return (
                    <li key={ele.id}>{ele.name}</li>
                )
            })}
            {playlists?.map((ele)=>{
                return (
                    <li key={ele.id}>{ele.name}</li>
                )
            })}
             {playlists?.map((ele)=>{
                return (
                    <li key={ele.id}>{ele.name}</li>
                )
            })}
             {playlists?.map((ele)=>{
                return (
                    <li key={ele.id}>{ele.name}</li>
                )
            })} */}
        </ul>
    </Container>
  )
}


const Container=styled.div`
color: #b3b3b3;
height: 100%;
overflow: hidden;

ul {
    color:white;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
`;
