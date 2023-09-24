import React from 'react'
import styled from 'styled-components'

export const Login = () => {

const handelClick=()=>{
    // alert('clicked')
    // 7bc7ea7dafe94cab94eaec5d2baf3ab7
    // 7jmZRHjxVcejvlS9ZVvqc9
    const client_id =`7bc7ea7dafe94cab94eaec5d2baf3ab7`
    const redirect_uri = "https://spotify-six-ruddy.vercel.app";
    const api_uri = "https://accounts.spotify.com/authorize";

    const scope = [
        "user-read-private",
        "user-read-email",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-top-read",
      ];
      window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
        " "
      )}&response_type=token&show_dialog=true`;


}

  return (
    <Container>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png'/>
        <button onClick={handelClick}>Connect Spotify</button>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;

  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;