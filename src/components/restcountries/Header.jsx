import React from 'react'
import './Header.css'

const Header = () => {
  const changeTheme = () => {
    const moon = document.querySelector('.fa-moon');
    const header = document.querySelector('.header');
    const countriespage = document.querySelector('.countriespage');
    const details = document.querySelectorAll('.details');
    const input = document.querySelector('#search');
    const select = document.querySelector('select');
    const filter = document.querySelector('.filter')
    const countryDetails = document.querySelector('.country-details')
      
        moon.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        header.classList.toggle('light-theme');
        countriespage.classList.toggle('light-theme');
        input.classList.toggle('light-theme');
        select.classList.toggle('light-theme');
        filter.classList.toggle('light-theme');

        details.forEach((detail) => {
          detail.classList.toggle('light-theme')
        })
      });
    }

  return (
    <>
        <header className='header'>
            <div>
                <h1>Para onde você quer viajar?</h1>
            </div>

            <div>
                <i className='fas fa-moon' onClick={() => changeTheme()}></i>
            </div>
        </header>
    </>
  )
}

export default Header
