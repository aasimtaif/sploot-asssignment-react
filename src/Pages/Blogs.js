import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Categories, BlogsList } from '../Components'
function Blogs() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  console.log(user)
  const { slug } = useParams()
  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [user]);

  return (
    <div>
      <Categories />
      <BlogsList slug={slug} />
    </div>
  )
}

export default Blogs