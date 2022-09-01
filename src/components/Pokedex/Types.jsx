import React from 'react'

const Types = ({type}) => {

    // console.log(type)
  return (
    <div>
        <h2 className={`type_a bg-${type.type.name}`}>{type.type.name}</h2> 
    </div>
  )
}

export default Types