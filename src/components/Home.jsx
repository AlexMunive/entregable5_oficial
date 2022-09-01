import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import pkedex_logo from '../img/pokedex_logo.png'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./modo_dark/Theme";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const StyleB = styled.div`
  color: ${(props) => props.theme.fontColorB};
`;

const Home = () => {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


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
      <div className='switch_header'>
      <label className="switch" >
        <input type="checkbox" onClick={() => themeToggler()}/>
        <span className="slider round">
          <i className='bx bxs-sun' ></i>
          <i className='bx bxs-moon'></i>
        </span>        
      </label>
      </div>
      

      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <img className='img_home' src={pkedex_logo} alt="" />
          <h1 className='home_h1'>Hi Trainer!</h1>
        </StyledApp>
        <StyleB>
          <p className='home_p'>To Start give me your trainer name</p>
        </StyleB>
        <form onSubmit={handleSubmit}>
          <input className='home_input' id='name' type="text" placeholder='your name' />
          <button className='btn_home'>Comenzar</button>
        </form>
        <footer className='red-rectangle'>
          <div className='black-rectangle'></div>
          <div className='circle-ext'>
            <div className="circle-int"></div>
          </div>
        </footer>

      </ThemeProvider>
    </div>
  )
}

export default Home