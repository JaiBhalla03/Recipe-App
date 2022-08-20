import React,{useState} from 'react'
import {motion} from 'framer-motion'

const Recipe = ({title, calories, image, ingredients, healthLabel, mealType}) => {
  const vis =()=>{
    document.querySelector('.overlay').style.display='block';
  }
  return (
    <motion.div 
    key={title}
    className="recipeCard"
    whileHover={{
      scale: 1.1
    }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <h1>{title}</h1>
        <img src={image} alt=""/>
        <div style={{display: 'flex',width:'100%'}}>
          <p style={{marginRight: 135}}>Calories: {Math.round(calories)}</p>
          <motion.button style={{
            backgroundColor:'transparent',
            color: 'white',
            border: 'none', 
            cursor: 'pointer'
            }}
            whileHover={{
              scale: 1.2
            }}
            onClick ={vis}
            >Learn More!</motion.button>
        </div>
    <div className="overlay" style={{display: 'none',
     position: 'absolute',
     width: 330,
     color: 'white'
     }}>
        <div className="overlayHeader">
          <h3>Ingredients</h3>
        </div>
        <ul style={{listStyle:'none'}}>
          {ingredients.map((i)=>(<li key={i}>{i}</li>))}
        </ul>
        <h3>Health Label</h3>
        <ul style={{listStyle:'none'}}>
        {healthLabel.slice(0,5).map((hl)=>(<li key={hl}>{hl}</li>))}
        </ul>
        <p><i style={{fontWeight: 'bold'}}>Type:</i> {mealType}</p>
    </div>
    </motion.div>
    
  )
}

export default Recipe