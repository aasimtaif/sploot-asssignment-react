import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "../Styles/Blog.css"
function BlogCard({ blog }) {

    return (
        <div className="blog-card">
            <Card sx={{ maxWidth: 345 }}>
                <a>
                <CardMedia
                    sx={{ height: 140 }}
                    image={blog.imageUrl}
                    title="green iguana"
                />
                </a>
               
                <CardContent>
                    <Typography gutterBottom variant="h8" component="div">
                        {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {blog.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default BlogCard