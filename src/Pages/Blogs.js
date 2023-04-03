import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { logOut } from '../redux/UserLogin';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Categories, BlogsList } from '../Components'
import { Button } from '@mantine/core';
import { Grid } from '@mantine/core';
function Blogs() {
  const [activeCategory, setActiveCategory] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  // console.log(user)
  const { slug } = useParams()
  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [user]);
  // console.log(activeCategory)
  return (
    <>
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <BlogsList slug={activeCategory?.slug} />
     
{user&&<Button size="xs" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick = {()=>dispatch(logOut())}>LogOut</Button>}

    </>
  )
}

export default Blogs