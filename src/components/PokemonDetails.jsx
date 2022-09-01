import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pkedex_logo from '../img/pokedex_logo.png'
import pokebola_fondo from '../img/pokeball.png'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const { name } = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => {
        console.log(res.data)
        setPokeInfo(res.data)
      })
      .catch(err => console.log(err))


  }, [])

  console.log(pokeInfo)
  return (
    <div className='pokemon_details'>
      <header className='red-rectangle-header'>
        <img className='header-img' src={pkedex_logo} alt="" />
        <div className='black-rectangle-header'></div>
        <div className='circle-ext-header'>
          <div className="circle-int-header"></div>
        </div>
      </header>
      <article className={`article_card`} >
        <div className={`article_div bg-${pokeInfo?.types[0].type.name}`}>
          <img className='article_img' src={pokeInfo?.sprites.other["official-artwork"]["front_default"]} alt="" />
          <div>
            <h1 className={`article_id ${pokeInfo?.types[0].type.name}`}>#{pokeInfo?.id}</h1>
            <h1 className={`article_name ${pokeInfo?.types[0].type.name}`}>{pokeInfo?.name}</h1>
          </div>
          <div className='weight_and_height'>
            <h2 className='card_h2_weight'>Weight<p className='weight'>{pokeInfo?.weight}</p></h2>
            <h2 className='card_h2_height'>Height<p className='height'>{pokeInfo?.height}</p></h2>
          </div>
          <div className='article_types_and_skill'>
            <div className='article_types_total'>
              <h1 className='article_types_title'>Type</h1>
              <div>
                <h2 className={`type_a bg-${pokeInfo?.types[0].type.name}`}>{pokeInfo?.types[0].type.name}</h2>
                {/* <h2>{pokeInfo?.types[1].type.name}</h2> */}
              </div>
            </div>
            <div className='article_abilities_total'>
              <h1 className='article_skill'>skill</h1>
              <div className='article_abilities'>
                <h2 className='abiliti_a'>{pokeInfo?.abilities[0].ability.name}</h2>
                <h2 className='abiliti_b'>{pokeInfo?.abilities[1].ability.name}</h2>
              </div>
            </div>
          </div>
          <div>
            <h1 className='article_stats'>Stats</h1>
            <img className='pokebola_fondo' src={pokebola_fondo} alt="" />
            <div>

            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default PokemonDetails