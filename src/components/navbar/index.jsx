import { RocketLaunchIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { contexto } from '../../context'
import NavItem from '../navitem'

function NavBar() {
  const { setBuscar, setBuscarFamilia, setPersonajesFiltrados } = useContext(contexto)
  const activeStyle = 'underline underline-offset-4'
  
  const limpiarFiltro = () => {
    setBuscar('')
    setBuscarFamilia('')
    setPersonajesFiltrados([])
  }

  return (
    <nav className='flex justify-between items-center bg-white fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li onClick={limpiarFiltro}>
          <NavItem to='/' activeStyle={activeStyle}>
            Home
          </NavItem>
        </li>
        <span>|</span>
        <li onClick={() => setBuscarFamilia('frieza')}>
          <NavItem to='/frieza' activeStyle={activeStyle}>
          Army of Frieza
          </NavItem>
        </li>
        <span>|</span>
        <li onClick={() => setBuscarFamilia('beerus')}>
          <NavItem to='/beerus' activeStyle={activeStyle}>
            Assistant of Beerus
          </NavItem>
        </li>
        <span>|</span>
        <li onClick={() => setBuscarFamilia('vermoud')}>
          <NavItem to='/vermoud' activeStyle={activeStyle}>
            Assistant of Vermoud
          </NavItem>
        </li>
        <span>|</span>
        <li onClick={() => setBuscarFamilia('freelancer')}>
          <NavItem to='/freelancer' activeStyle={activeStyle}>
            Freelancer
          </NavItem>
        </li>
        <span>|</span>
        <li onClick={() => setBuscarFamilia('troopers')}>
          <NavItem to='/troopers' activeStyle={activeStyle}>
            Pride Troopers
          </NavItem>
        </li>
        <span>|</span>
        <li onClick={() => setBuscarFamilia('villain')}>
          <NavItem to='/villain' activeStyle={activeStyle}>
            Villain
          </NavItem>
        </li>
        <span>|</span>
        <li onClick={() => setBuscarFamilia('fighter')}>
          <NavItem to='fighter' activeStyle={activeStyle}>
            Z Fighter
          </NavItem>
        </li>
        <span>|</span>
        <li onClick={() => setBuscarFamilia('other')}>
          <NavItem to='/other' activeStyle={activeStyle}>
            Other
          </NavItem>
        </li>
      </ul>

      <RocketLaunchIcon className='h-10 w-10' />
    </nav>
  )
}

export default NavBar
