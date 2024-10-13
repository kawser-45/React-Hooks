/* eslint-disable no-undef */

import { useState } from "react"
import FoodCard from "./foodCard/FoodCard"
import { foodData } from "./foodCard/data";



function App() {


  

  

  // 
  let [index, setIndex] =useState(0)

  let clickHandler = () => {
    
    setIndex((old => {

      if (foodData.length -1 > old ) {
        
        return old +1;
      }

      else {
        return old;
      }
      

    }));
    
}

let clickHandler2 = () => {
    
  setIndex((old => {

    if (foodData.length -1 > old ) {
      
      return old -1;
    }

    else {
      return old;
    }
    

  }));
  
}

  return (
    <>
  <FoodCard onClick2={clickHandler2} onClick
  ={clickHandler} data={foodData[index]}/>
    </>
  )
}

export default App
