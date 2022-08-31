import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './Pokedex/PokemonCard'
import pkedex_logo from '../img/pokedex_logo.png'
import { useSelector } from 'react-redux'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')


  useEffect(() => {
    if (optionType !=='All') {
      //el usurio filtra por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e=>e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
      }else if(pokeSearch){        
      // logica cuando el usuario busca por el input
        let url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
      
    } else {
      // el usuario quiere a todo los pokemones
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }

  }, [pokeSearch, optionType])


  const nameTrainer = useSelector(state => state.nameTrainer)

  // console.log(pokemons)

  // console.log(optionType)

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
        <div className='search_selectype'>
          <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType} />
          <SelectType setOptionType={setOptionType} optionType={optionType}/>
        </div>
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