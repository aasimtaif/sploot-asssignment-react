import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import "../Styles/Categories.css"
import { useNavigate } from 'react-router-dom';

function Categories() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([])
    const APIURL = "https://api-staging-v2.sploot.space/api/v2/cms/post-categories"
    const { token } = useSelector((state) => state.user)
console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(APIURL, config)
                // console.log(response.data.data.data)
                setCategories(response.data.data.data)
            } catch {
                console.log("error")
            }

        }
        fetchCategories()
    }, []);

    return (
        <div className="categories">{categories.map((category, index) => {
            return <div key={index}>
                <p onClick={() => { navigate(`/blogs/${category.slug}`) }}>{category.name}</p>
            </div>
        })}</div>
    )
}

export default Categories