import React from 'react'

const MovesPokemon = ({move}) => {

  // console.log(move)
  return (
    <div className='moves_pokemon'>
      <h1 className='move'>{move.move.name}</h1>      
    </div>
  )
}

export default MovesPokemon