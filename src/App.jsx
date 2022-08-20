import React, {useEffect, useState} from 'react'
import Recipe from './components/Recipe'

import {motion} from 'framer-motion'
import './App.css'


const App = () => {
    const APP_ID = '8945cc81';
    const APP_KEY = '177fcfd35915236bfc75c90ebb77634d';
    
    const [recipe, setRecipe] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(()=>{
        getRecipe()
    },[query])

    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipe(data.hits)
        console.log(data.hits);
    }

    const updateSearch =e=>{
        setSearch(e.target.value);
        console.log(search);
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
    }

    return (
    <div className="app">
        <div className="mainNavBar">
            <h3>Recipe App</h3>
            <form onSubmit={getSearch} className="navBar">
                <input type = "text" value={search} onChange={updateSearch}/>
                <motion.button type="submit"
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }} 
                >Search</motion.button>
            </form>
        </div>
        
        <div className="maincontent">
            {recipe.map(recipe => (
            <Recipe 
            key={recipe.index}
            title={recipe.recipe.label}   
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            healthLabel={recipe.recipe.healthLabels}  
            mealType={recipe.recipe.mealType}
            />
        ))}
        </div>
        
    </div>
  )
}

export default App