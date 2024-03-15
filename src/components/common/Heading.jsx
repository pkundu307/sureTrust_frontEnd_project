import React from 'react'

function Heading({title,subtile}) {
  return (
    <>
     <div className='heading'>
     <h1>{title}</h1>
     <p>{subtile}</p>
     </div> 
    </>
  )
}

export default Heading
