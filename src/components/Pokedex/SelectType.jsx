import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setOptionType, optionType, setPokeSearch,setPage}) => {

  const [listTypes, setListTypes] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => setListTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setOptionType(e.target.value)
    setPokeSearch('')
    setPage('')
  }

  return (
    <select className='btn_selectype' onChange={handleChange} value={optionType}>
      <option value="All">All pokemons</option>
      {
        listTypes?.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType