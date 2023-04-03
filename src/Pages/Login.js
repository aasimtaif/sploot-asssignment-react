import React, { useState, useEffect } from 'react'
import { Alert } from '@mui/material';
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
  // console.log(token)
  const [input, setInput] = useState();
  const [message, setMessage] = useState({ success: null, error: null })
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

          setMessage({ success: "you are successfully logged in" })

          setTimeout(() => {
            dispatch(storeUser(response.data.data.data))
            navigate("/blogs");
          }, 2000);
        })
        .catch((error) => {
          console.log(error)
          setMessage({ error: "Incorrect Email/password" })

        })


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
      // console.log(response)
    } catch (err) {
      console.log(err)
      setMessage({ error: "Incorrect Email/password" })
    }
    setInput(null)
  }
  // console.log(input)
  if (!user) {
    return (
      <div>
        {(message.error || message.success) && <Alert sx={{
          minWidth: 30, 
          maxWidth: 190,
          fontSize: 10,
        }} variant="filled" severity={message.error ? "error" : "success"}>
          {message.error ? message.error : message.success}
        </Alert>}
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <input  type="email" name="username" placeholder="Email" onChange={(e) => { handleInput(e) }} />
              <input  type="password" placeholder="Password" name="password" onChange={(e) => { handleInput(e) }} />
              <button type="button" onClick={handleSubmit}>Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  } else {
    return "You are already logged in"
  }
}


export default Login