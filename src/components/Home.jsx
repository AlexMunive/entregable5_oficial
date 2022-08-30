import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import pkedex_logo from '../img/pokedex_logo.png'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()

    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ""
  }

  return (
    <div className='home'>
      <img className='img_home' src={pkedex_logo} alt="" />
      <h1 className='home_h1'>¡Hola entrenador!</h1>
      <p className='home_p'>Para poder empezar, dame tu nombre</p>
      <form onSubmit={handleSubmit}>
        <input className='home_input' id='name' type="text" placeholder='Tu nombre..' />
        <button className='btn_home'>Comenzar</button>
      </form>
      <footer className='red-rectangle'>
        <div className='black-rectangle'></div>
        <div className='circle-ext'>
          <div className="circle-int"></div>
        </div>
      </footer>
    </div>
  )
}

export default Home