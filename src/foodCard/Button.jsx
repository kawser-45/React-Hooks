/* eslint-disable react/prop-types */




function Button(props) {
  return (
    <button onClick={() => props.onClick ()} className="px-3 py-1 font-bold text-white bg-green-700 rounded-md ">next</button>
  )
}

export default Button