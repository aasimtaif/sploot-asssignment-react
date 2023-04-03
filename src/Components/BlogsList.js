import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlogCard from './BlogCard'
import { Grid } from '@mantine/core';
import "../Styles/Blog.css"
function BlogsList({ slug }) {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIslaoding] = useState(true)


  const APIURL = `https://api-staging-v2.sploot.space/api/v2/public/cms/post-categories/${slug}`
  // console.log(slug)
  useEffect(() => {

    axios.get(APIURL)
      .then(res => {
        setBlogs(res.data.data.data)
        setIslaoding(false)
      })
      .catch(err => console.log(err))
  }, [slug]);
  // console.log(blogs)
  if (isLoading) { 
    return "Wait"
  }

  return (
    <Grid>{blogs?.map((blog, index) => {
      return <div className="blogs-list" key={index}>
        <BlogCard blog={blog} />
      </div>
    })}</Grid>
  )
}

export default BlogsList