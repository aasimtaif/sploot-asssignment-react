import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "../Styles/Blog.css"
function BlogCard({ blog }) {

    return (
        <div className="blog-card">
            
            <a href={blog.redirectUrl} target="_blank">
                <div className="blog-img">
                    <img
                        src={blog.imageUrl}
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

        </div >
    )
}

export default BlogCard