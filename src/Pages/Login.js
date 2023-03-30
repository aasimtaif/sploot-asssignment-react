import React, { useState } from 'react'
import axios from 'axios';
function Login() {
  const BASE_URL = 'https://api-staging-v2.sploot.space/api/v2/'
  const [input, setInput] = useState();

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInput({ ...input, [name]: value })

  }
  const handleSubmit = () => {

    axios.post(`${BASE_URL}auth/signin`,
      { "username": input.username, "password": input.password })
      .then(res => console.log(res.data.data.data.authToken))
      .catch(err => console.log(err))
  }
  console.log(input)
  return (
    <div>
      <form>

      
      Email:
      <input type="email" name="username" onChange={(e) => { handleInput(e) }} />
      <br />
      Password:
      <input type="password" name="password" onChange={(e) => { handleInput(e) }} />
      <br />
      <button type="button" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login