import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import pkedex_logo from '../img/pokedex_logo.png'
import pokebola_fondo from '../img/pokeball.png'
import MovesPokemon from './Pokedex/MovesPokemon'
import Types from './Pokedex/Types'
import Skill from './Pokedex/Skill'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()
  const [itemMove, setItemMove] = useState(0) 

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

  const maxMove = 20;
  const totalItems = pokeInfo?.moves.length;
  const maxMoveTotal = Math.ceil(totalItems / maxMove);

  //creamos dos funciones para aumentar y disminuir las paginas, no los items
  const onNext = () => {
    setItemMove((itemMove + 1) % maxMoveTotal);
  };
  const onPrev = () => {
    setItemMove((itemMove - 1) % maxMoveTotal);
  };

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
      <button className='btn_back'> 
      <Link to='/pokedex'><i className='bx bx-left-arrow-circle'></i></Link>
      </button>
      <article className={`article_card`} >
        <div className={`article_div bg-${pokeInfo?.types[0].type.name}`}>
          <img className='article_img' src={pokeInfo?.sprites.other["official-artwork"]["front_default"]} alt="" />
          <div className='id_and_name'>
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
              <div className='type_total'>
                {
                   pokeInfo?.types.map((type)=>
                   <Types
                   key={type.type.url}
                   type={type}
                    />
                   )

                }
              </div>
            </div>
            <div className='article_abilities_total'>
              <h1 className='article_skill'>skill</h1>
              <div className='article_abilities'>
              {
                   pokeInfo?.abilities.map((ability)=>
                   <Skill
                   key={ability.ability.url}
                   ability={ability}
                    />
                   )

                }
                {/* <h2 className='abiliti_a'>{pokeInfo?.abilities[0].ability.name}</h2>
                <h2 className='abiliti_b'>{pokeInfo?.abilities[1].ability.name}</h2> */}
              </div>
            </div>
          </div>
          <div>
            <h1 className='article_stats'>Stats</h1>
            <img className='pokebola_fondo' src={pokebola_fondo} alt="" />
            <div>
              <div className='stat_1'>
                <h1 className='stat_h1'>{`${pokeInfo?.stats[0].stat.name}`}</h1>
                <h2 className='stat_h2'>{`${pokeInfo?.stats[0].base_stat}`}/150</h2>
              </div>
              <div>
                <progress
                  className={`progress ${pokeInfo?.types[0].type.name}`}
                  min={0}
                  max={150}
                  value={`${pokeInfo?.stats[0].base_stat}`}>
                </progress>
              </div>
            </div>
            <div>
              <div className='stat_1'>
                <h1 className='stat_h1'>{`${pokeInfo?.stats[1].stat.name}`}</h1>
                <h2 className='stat_h2'>{`${pokeInfo?.stats[1].base_stat}`}/150</h2>
              </div>
              <div>
                <progress
                  className={`progress ${pokeInfo?.types[0].type.name}`}
                  min={0}
                  max={150}
                  value={`${pokeInfo?.stats[1].base_stat}`}>
                </progress>
              </div>
            </div>
            <div>
              <div className='stat_1'>
                <h1 className='stat_h1'>{`${pokeInfo?.stats[2].stat.name}`}</h1>
                <h2 className='stat_h2'>{`${pokeInfo?.stats[2].base_stat}`}/150</h2>
              </div>
              <div>
                <progress
                  className={`progress ${pokeInfo?.types[0].type.name}`}
                  min={0}
                  max={150}
                  value={`${pokeInfo?.stats[2].base_stat}`}>
                </progress>
              </div>
            </div>
            <div>
              <div className='stat_1'>
                <h1 className='stat_h1'>{`${pokeInfo?.stats[3].stat.name}`}</h1>
                <h2 className='stat_h2'>{`${pokeInfo?.stats[3].base_stat}`}/150</h2>
              </div>
              <div>
                <progress
                  className={`progress`}
                  min={0}
                  max={150}
                  value={`${pokeInfo?.stats[3].base_stat}`}>
                </progress>
              </div>
            </div>
            <div>
              <div className='stat_1'>
                <h1 className='stat_h1'>{`${pokeInfo?.stats[4].stat.name}`}</h1>
                <h2 className='stat_h2'>{`${pokeInfo?.stats[4].base_stat}`}/150</h2>
              </div>
              <div>
                <progress
                  className={`progress ${pokeInfo?.types[0].type.name}`}
                  min={0}
                  max={150}
                  value={`${pokeInfo?.stats[4].base_stat}`}>
                </progress>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className='article_card_footer'>
        
          <h1 className='movements'>Movements</h1>
          <img className='pokebola_fondo_footer' src={pokebola_fondo} alt="" />
        
        <button className='btn-move-menor' onClick={onPrev} disabled={!itemMove}>&#60;</button>
        <div className='move_total'>
          {
            pokeInfo?.moves.slice(itemMove * maxMove, maxMove * (itemMove + 1)).map((move)=>(
              <MovesPokemon
              key={move.move.url}
              move={move}         
              />

            ))
          }
        </div>
        <button className='btn-move-mayor' onClick={onNext}  disabled={ itemMove === Math.ceil(totalItems / maxMove) - 1}>&#62;</button>
        <p className='move_p'>{itemMove + 1} of {maxMoveTotal}</p>
      </article>
    </div>
  )
}

export default PokemonDetails