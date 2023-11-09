import React from 'react'
import Teams from './miniComponents/Teams'
import Events from './miniComponents/Events'
import Leagues from './miniComponents/Leagues'

const Favourites = () => {
  return (
    <>
    <p className='text-center mt-[1.6rem] mb-[1rem] text-[1.25rem] font-bold leading-3'>Teams</p>
    <Teams />
    <p className='text-center mt-[1.6rem] mb-[1rem] text-[1.25rem] font-bold leading-3'>Events</p>
    <Events />
    <p className='text-center mt-[1.6rem] mb-[1rem] text-[1.25rem] font-bold leading-3'>Leagues</p>
    <Leagues />
    
    
    </>
  )
}

export default Favourites