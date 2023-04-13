import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import logoImg from '../../assets/img/nails-logo.jpg'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="nav__header">
      <nav className="nav__navbar">
        <ul>
          <li className="nav__link-item"><NavLink to='/' className='nav__link'>Home<hr /></NavLink></li>
          <li className="nav__link-item"><NavLink to='/consultas' className='nav__link'>Consultas<hr /></NavLink></li>
          <li className="nav__link-item"><NavLink to='/trabajos' className='nav__link'>Trabajos<hr /></NavLink></li>
          <li className="nav__link-item"><NavLink to='/turnos' className='nav__link'>Turno<hr /></NavLink></li>
        </ul>
      </nav>
      <div className="nav__logo-container">
        <img src={ logoImg } alt="" />
      </div>
      <div className="nav__icon-menu">
        <AiOutlineMenu />
      </div>
      <div className="nav__social-group">
        <ul>
          <li className="nav__link-social-item"><NavLink className='nav__social-link'><FaInstagram /></NavLink></li>
          <li className="nav__link-social-item"><NavLink className='nav__social-link'><FaWhatsapp /></NavLink></li>
          <li className="nav__link-social-item"><NavLink className='nav__social-link'><AiOutlineShoppingCart /></NavLink></li>
        </ul>
      </div>
    </header>
  )
}
