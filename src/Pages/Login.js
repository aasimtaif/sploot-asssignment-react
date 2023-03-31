import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { storeToken, storeUser } from '../redux/UserLogin';
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css"

function Login() {
  const BASE_URL = 'https://api-staging-v2.sploot.space/api/v2/'
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user)
  console.log(token)
  const [input, setInput] = useState();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    if (token) {
      axios.get(BASE_URL + "user", config)
        .then((response) => {
          console.log(response.data.data.data)
          dispatch(storeUser(response.data.data.data))
          navigate("/blogs/weekend-reads")
        })
        .catch((error) => console.log(error))
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

      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="email" name="username" placeholder="Email" onChange={(e) => { handleInput(e) }} />

            <input type="password" placeholder="Password" name="password" onChange={(e) => { handleInput(e) }} />
            <button type="button" onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>

      {/* 
      <input type="email" name="username" onChange={(e) => { handleInput(e) }} />
   
      <input type="password" name="password" onChange={(e) => { handleInput(e) }} />
      <br />
      <button type="button" onClick={handleSubmit}>Login</button> */}

    </div>
  )
}

export default Login