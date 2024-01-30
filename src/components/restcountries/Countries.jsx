import React, {useState, useEffect} from 'react'
import './Countries.css'
import { Link, NavLink } from 'react-router-dom'

const url = 'https://restcountries.com/v2/all'

const Countries = () => {
  const [countries, setCountries] = useState([])
  
  const fetchCountryData = async() => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
  }

  useEffect(() => {
      fetchCountryData()
  }, [])

  const removeCountry = (numericCode) => {
    const newCountry = countries.filter((country) => country.numericCode !== numericCode)
    setCountries(newCountry)
      }

  return (
    
    <div className='countriespage'>
        <section className="grid">
      {countries.map((country) => {
        const { numericCode, name, population, region, capital, flag } = country

       return  <article key={numericCode}>
          <div>
            <img src={flag} alt={name} />
          <div className="details">
<h3>{name}</h3>
       <h4>População: <span>{population}</span></h4>
       <h4>Região: <span>{region}</span></h4>
       <h4>Capital: <span>{capital}</span></h4>
          <div className="buttons">
          <Link to={`/countries/${name}`} className='btn'>Ver detalhes do país</Link>
       {/* <button className="btn" onClick={() => removeCountry(numericCode)}>Remove Country</button> */}
          </div>
          </div>
          </div>
        </article>   
    })}
      </section>
    </div>
  )
}

export default Countries