import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './Pokedex/PokemonCard'
import pkedex_logo from '../img/pokedex_logo.png'
import { useSelector } from 'react-redux'
import SearchInput from './Pokedex/SearchInput'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()

  useEffect(() => {
    let URL
    if (pokeSearch) {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [
          {
            url
          }
        ]
      }
      setPokemons(obj)

    } else {
      URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }

  }, [pokeSearch])


  const nameTrainer = useSelector(state => state.nameTrainer)

  // console.log(pokemons)

  return (
    <div className='pokedex'>

      <header className='red-rectangle-header'>
        <img className='header-img' src={pkedex_logo} alt="" />
        <div className='black-rectangle-header'></div>
        <div className='circle-ext-header'>
          <div className="circle-int-header"></div>
        </div>
      </header>

      <div className='pokedex_div'>
        <p className='pokedex_p'>
          <strong className='pokedex_strong'>Bienvenido {nameTrainer},
          </strong> aqui podras encontrar tu pokemón favorito
        </p>
        <SearchInput setPokeSearch={setPokeSearch} />
        <div className='cards-container'>
          {
            pokemons?.results.map(pokemon => (
              <PokemonCard
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Pokedex