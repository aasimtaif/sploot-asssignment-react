import React from 'react'

import { useParams } from 'react-router-dom'
import { Categories,BlogsList } from '../Components'
function Blogs() {
  const {slug} = useParams()
  return (
    <div>
      <Categories/>
<BlogsList slug = {slug}/>
    </div>
  )
}

export default Blogs