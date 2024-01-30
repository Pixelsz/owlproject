import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './Country.css'

const Country = () => {
  const [country, setCountry] = useState([])
  const {name} = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/name/${name}`)
      const country = await response.json()
      setCountry(country)
    }

    fetchCountryData()
  }, [])

  return (
    <>
    <section className="country">
    <Link to="/Home" className='btn btn-light'><i className='fas fa-arrow-left'></i> Voltar</Link>
      {country.map((c) => {
        const {numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = c

        return (
          <article key={numericCode}>
            <div className="country-inner">
            <div className="flag">
              <img src={flag} alt={name} />
            </div>

            <div className='country-details'>
              <div>
                <h2>{name}</h2>
                <h5>Nome Nativo: <span>{nativeName}</span></h5>
                <h5>População: <span>{population}</span></h5>
                <h5>Região: <span>{region}</span></h5>
                <h5>Sub Região: <span>{subregion}</span></h5>
                <h5>Capital: <span>{capital}</span></h5>
              </div>
              <div>
                <h5>Domínio de Nível Superior: <span>{topLevelDomain}</span></h5>
                <h5>Moedas: <span>{currencies[0].name}</span></h5>
                <h5>Idiomas: <span>{languages[0].name}</span></h5>
              <Link to={`/form`} className='btn-passagem'>Comprar Passagem</Link>
              </div>
            </div> 
            </div>

            <div>
            <h3>Países que fazem Fronteira: </h3>
                <div className="borders">
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    )
              })}
              </div>
            </div>
          </article>
        )
      })}
    </section>
    </>
  )
}

export default Country