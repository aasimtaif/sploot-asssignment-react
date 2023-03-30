import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { storeToken,storeUser } from '../redux/UserLogin';

function Login() {
  const BASE_URL = 'https://api-staging-v2.sploot.space/api/v2/'
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user)
  const {token,user} = state 
  console.log(token,user)
  const [input, setInput] = useState();


  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    if(token){
      axios.get(BASE_URL + "user", config)
      .then((response) =>{
        console.log(response.data.data.data)
        dispatch(storeUser(response.data.data.data))
      })
      .catch((error) =>console.log(error))
    }
  }, [token]);

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInput({ ...input, [name]: value })

  }
  const handleSubmit = async () => {
    try {
      console.log('sending')
      const response = await axios.post(`${BASE_URL}auth/signin`,
        { "username": input.username, "password": input.password })
      dispatch(storeToken(response.data.data.data.authToken))
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(input)
  return (
    <div>



      Email:
      <input type="email" name="username" onChange={(e) => { handleInput(e) }} />
      <br />
      Password:
      <input type="password" name="password" onChange={(e) => { handleInput(e) }} />
      <br />
      <button type="button" onClick={handleSubmit}>Login</button>

    </div>
  )
}

export default Login