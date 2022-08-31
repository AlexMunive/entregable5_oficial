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
  const [page, setPage] = useState(0)   // estado para la pagina


  useEffect(() => {
    if (optionType !== 'All') {
      //el usurio filtra por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({ results: arr })
        })
        .catch(err => console.log(err))
    } else if (pokeSearch) {
      // logica cuando el usuario busca por el input
      let url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [{ url }]
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

  // paginación

  const maxItem = 16;
  const totalItems = pokemons?.results.length;
  const maxPage = Math.ceil(totalItems / maxItem);

  //creamos dos funciones para aumentar y disminuir las paginas, no los items
  const onNextPage = () => {
    setPage((page + 1) % maxPage);
  };
  const onPrevPage = () => {
    setPage((page - 1) % maxPage);
  };


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
          <SelectType setOptionType={setOptionType} optionType={optionType} setPokeSearch={setPokeSearch} />
        </div>
        <div className='cards-container'>
          {
            pokemons?.results.slice(page * maxItem, maxItem * (page + 1)).map(pokemon => (
              <PokemonCard
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </div>
      <div className='footer--footer'>
        <button
          className='btn-footer-a'
          onClick={onPrevPage}
          disabled={
            // si page viene en 0 lo desactivamos
            !page
          }
        >
          Prev
        </button>
        <p className='footer-p'>
          {page + 1} of {maxPage}
        </p>
        <button
          className='btn-footer-b'
          onClick={onNextPage}
          disabled={
            // si page es igual al ultimo se desactiva el boton
            page === Math.ceil(totalItems / maxItem) - 1
          }
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pokedex