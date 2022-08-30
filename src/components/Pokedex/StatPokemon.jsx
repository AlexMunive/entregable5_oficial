import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StatPokemon = ({ infoStat, pokemons }) => {

  // console.log(pokemons)

  const [pokemonA, setPokemonA] = useState()



  useEffect(() => {

    const url = 'https://pokeapi.co/api/v2/pokemon'
    axios.get(url)
      .then(res => setPokemonA(res.data))
      .catch(err => console.log(err))
  }, [])



  // console.log(pokemonA)



  return (
    <div className='infostat_div'>
       {/* <div >
          {
            pokemonA?.types.map(type => (
              <h3 key={type.type.url}></h3>
            ))
            
          }
        </div> */}

      <h4 className='infostat_h4'>{infoStat.stat.name}</h4>
      <p className='infostat_p'>{infoStat.base_stat}</p>
    </div>
  )
}

export default StatPokemon