import React from 'react'
import { useSelector } from 'react-redux';





const Wish = () => {
  const data  = useSelector((state)=>state.wishlistreduces.data)



  return (
   <div className="wish">
    <h1>heelo</h1>

    {
      data.map(item=>
        <>
  <li>
    {item.title}</li>      
        <li>{item.price}</li>
        </>
      )

      
      }





   </div>
  )
}

export default Wish