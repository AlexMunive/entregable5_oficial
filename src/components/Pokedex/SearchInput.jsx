import React from 'react'

const SearchInput = ({setPokeSearch,setOptionType, setPage}) => {

    const handleSubmit=e=>{
        e.preventDefault()
        setPokeSearch(e.target.searchTex.value.trim().toLowerCase())
        setOptionType('All')
        setPage('')
        e.target.searchTex.value=""
    }

  return (
    <form onSubmit={handleSubmit}>
        <input className='search_input' id='searchTex' type="text" placeholder='Busca un pokemón'/>
        <button className='btn_search'>Search</button>
    </form>
  )
}

export default SearchInput