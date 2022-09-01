import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StatPokemon = ({ infoStat, color }) => {

  // console.log(infoStat)

   

  return (
    <div className='infostat_div'>
      <h4 className='infostat_h4'>{infoStat.stat.name}</h4>
      <p className={`infostat_p ${color}`}>{infoStat.base_stat}</p>
    </div>
  )
}

export default StatPokemon