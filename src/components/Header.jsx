import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../imgs/LogoKart.png'

const Navbar = () => {
  return (
    <header>      
      <div className='Logo'><Link to="/"><img src={Logo} alt="Logo" /></Link></div>        
      <ul>
        <li className='last'><Link to="/">Home</Link></li>
        <li className='last'><Link to="/empresa">Empresa</Link></li>
        <li className='last'><Link to="/contato">Contato</Link></li>
        <li className='last'><Link to="/media">Media</Link></li>
        <li className='last'><Link to="/cadastro">Cadastro</Link></li>
      </ul>
    </header>
  )
}

export default Navbar