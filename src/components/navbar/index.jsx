import { useContext } from 'react'
import { contexto } from '../../context'
import CarritoCompra from '../cart'
import NavItem from '../navitem'

function NavBar() {
  const {
    cerrarCheckout,
    hayUsuarioAuth,
    setBuscar,
    setBuscarFamilia,
    setHayUsuarioAuth,
    setPersonajesFiltrados
  } = useContext(contexto)
  const activeStyle = 'underline underline-offset-4 text-[#e68f01] font-semibold'
  
  const limpiarFiltro = () => {
    setBuscar('')
    setBuscarFamilia('')
    setPersonajesFiltrados([])
  }

  const cerrarSesion = () => {
    setHayUsuarioAuth(false)
    localStorage.removeItem('usuarioAuth')
  }

  const mostrarOpccion = () => {
    if (hayUsuarioAuth) {
      return (
        <>
          <li onClick={cerrarCheckout}>
            <NavItem to='/compras' activeStyle={activeStyle}>
              Mis Compras
            </NavItem>
          </li>
          <span>|</span>
          
          <li onClick={cerrarSesion} className='cursor-pointer'>
            Cerrar Sesión
          </li>
          <span>|</span>
        </>
      )
    }
    else {
      return (
        <>
          <li onClick={cerrarCheckout}>
            <NavItem to='/auth' activeStyle={activeStyle}>
              Login
            </NavItem>
          </li>
          <span>|</span>
        </>
      )
    }
  }

  return (
    <nav className='flex justify-between items-center bg-lime-50 fixed z-10 top-0 w-full py-2.5 px-8 text-sm font-light'>
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

      <ul className='flex items-center gap-3'>
        {mostrarOpccion()}
        <li>
          <CarritoCompra />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
