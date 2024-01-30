import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <section className='filter'>
        <form className="form-control">
            <input type="search" name="search" id="search" placeholder='Procurar por País' />
        </form>

        <div className='region-filter'>
            <select name="select" id="select" className="select">
                <option value="Filtrar por Região">Filtrar por Região</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europa">Europa</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter