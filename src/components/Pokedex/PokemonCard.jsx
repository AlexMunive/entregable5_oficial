import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'


const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  const navigate=useNavigate()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleClick=()=>navigate(`/pokedex/${pokemon.name}`)

  // console.log(pokemon)

  return (
    <article onClick={handleClick} className={`card border-${pokemon?.types[0].type.name}`}>
      <header className={`card_header ${pokemon?.types[0].type.name} bg-${pokemon?.types[0].type.name}`}>
        <img className='card_img' src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
      </header>
      <section className='card_body'>
        <h1 className={`card_h1 ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h1>
        <div className='card_type'>
          {
            pokemon?.types.map(slot => (
              <h3 className='card_h3' key={slot.type.url}>{slot.type.name}</h3>
            ))
            
          }
        </div>
      </section>
      <hr className='card_hr'/>
      <footer className='card__footer'>
        <div className='card__list-stats' >
          {
            pokemon?.stats.map(stat => (
              <StatPokemon 
                key={stat.stat.url}
                infoStat={stat}
                color={pokemon?.types[0].type.name}
              />
            ))
          }
        </div>
      </footer>
    </article>
  )
}

export default PokemonCard