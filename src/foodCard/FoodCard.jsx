
/* eslint-disable react/prop-types */

import Button from "./Button";




function FoodCard(props) {

    // 
    let {image, name} =props.data;

    // let clickHandler = () => {
    //     props.test()
        
    // }
  return (
    <div className="flex items-center justify-center w-full h-screen bg-red-100">
        <div className="w-4/12 p-4 bg-white rounded-sm shadow-sm">
            <img className="w-full" src={image} alt="" />

            <h2 className="py-3 text-2xl">{name}</h2>

          <Button onClick={props.onClick}/>

          <button onClick={() =>props.onClick2()} className="px-3 py-1 ml-8 font-bold text-white bg-blue-600 rounded-md ">
            previous
          </button>
        </div>
    </div>
  )
}

export default FoodCard