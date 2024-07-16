import React from 'react'

function Button({colors}) {
  const bgColor = ()=>{
    const backgroundElement =document.querySelector('.container')
    backgroundElement.classList.add({color})
  console.log(colorName);
  };
  const generateBtn = () =>{
    for (const color in colors) {
      <button  className='bg-red-500 rounded-2xl ' onClick={bgColor} colorName={color}/>
    }
  }
  return (
   <h1>dont know</h1>
  )
}

export default Button