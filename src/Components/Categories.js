import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../Styles/Categories.css"
function Categories() {
    const [categories, setCategories] = useState([])
    const APIURL = "https://api-staging-v2.sploot.space/api/v2/cms/post-categories"
    const token = " eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDE1YzNlMmVjMTBiZjgyNTRmZjkyYWUiLCJ1c2VyUm9sZSI6IlVTRVIiLCJpYXQiOjE2ODAxMjY4OTIsImV4cCI6MTY4MDk5MDg5Mn0.SY7tDbyxd52bZNBEtIxULnZFdSe5ElyGA3sNc9MscUNw4fpNl-STE2ZsCyKfr01ncIvf1MGehGPQOMa7TgeH5w"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        const fetchCategories = async() => {
const response = await axios.get(APIURL, config)
console.log(response.data.data.data)
setCategories(response.data.data.data)
        }
        fetchCategories()
    }, []);

    return (
        <div className="categories">{categories.map((category,index)=>{
            return <div key={index}>
                <p>{category.name}</p>
            </div>
        })}</div>
    )
}

export default Categories