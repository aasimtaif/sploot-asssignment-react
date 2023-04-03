import React from 'react';
import { Grid } from '@mantine/core';
import "../Styles/Blog.css"
function BlogCard({ blog }) {
console.log(blog.description)
    return (

        <div className="blog-card">
            <Grid.Col md={3} xs={6} sm={4} lg={1}>
            
            <a href={blog.redirectUrl}>
                <div className="blog-img">
                    <img style={{ width: 340, margin: 'auto' }}
                        src={blog.imageUrl}
                        alt='blog img'
                    />
                </div>
                <div className="blog-details">
                    <h5 >
                        {blog.title}
                    </h5>
                    <p>
                        {blog.description}
                    </p>
                </div>

            </a>
            
        </Grid.Col>
        </div >

    )
}

export default BlogCard