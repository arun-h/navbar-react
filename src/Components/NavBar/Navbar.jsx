import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_l from '../../assets/search-w.png'
import search_icon_b from '../../assets/search-b.png'
import toggle_dark from '../../assets/day.png'
import toggle_light from '../../assets/night.png'

const Navbar = ({theme, setTheme}) => {
  const toggle_mode = ()=>{
      theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>

      <img src={ theme == 'light' ? logo_light : logo_dark} alt='' className='logo'/>
      
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Features</li>
      </ul>

    <div className='search-box'>
      <input type='text' placeholder='Search'></input>
      <img src={ theme == 'light' ? search_icon_l : search_icon_b} alt='' />
    </div>

    <img onClick={()=>{toggle_mode()}} src={ theme == 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar
