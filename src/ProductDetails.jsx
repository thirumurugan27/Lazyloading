import React, { useEffect, useState } from 'react'

const ProductDetails = () => {


  let [c,setc] = useState(0)

 

  return (
    <div>
        
        <h1>ProductDetails - {c}</h1>
        <button onClick={()=>setc(c+1)}>c increment</button>


    </div>
  )
}

export default ProductDetails
