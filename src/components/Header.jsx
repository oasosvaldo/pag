import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../imgs/LogoKart.png'

const Navbar = () => {
  return (
    <div className='cssmenu'>      
      <div className='Logo'><Link to="/"><img src={Logo} alt="Logo" /></Link></div>        
      <ul>
        <li className='last'><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li className='last'><Link to="/contato">Contato</Link></li>
      </ul>
    </div>
  )
}

export default Navbar