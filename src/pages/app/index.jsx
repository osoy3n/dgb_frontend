import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { contexto, Proveedor } from '../../context'
import Auth from '../auth'
import DetallesDelCheckout from '../../components/checkout'
import Home from '../home'
import NavBar from '../../components/navbar'
import OrdenDeCompra from '../order'
import OrdenesHechas from '../orders'
import { useContext } from 'react'

const AppRouters = () => {
  const { hayUsuarioAuth } = useContext(contexto)

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Auth /> },
    { path: '/frieza', element: <Home /> },
    { path: '/beerus', element: <Home /> },
    { path: '/vermoud', element: <Home /> },
    { path: '/freelancer', element: <Home /> },
    { path: '/troopers', element: <Home /> },
    { path: '/villain', element: <Home /> },
    { path: '/fighter', element: <Home /> },
    { path: '/other', element: <Home /> },
    { path: '/orden', element: hayUsuarioAuth ? <OrdenDeCompra /> : <Navigate to='/auth' /> },
    { path: '/compras', element: hayUsuarioAuth ? <OrdenesHechas /> : <Navigate to='/auth' /> }
  ])

  return routes
}

function App() {
  return (
    <Proveedor>
      <BrowserRouter>
        <AppRouters />
        <NavBar />
        <DetallesDelCheckout />
      </BrowserRouter>
    </Proveedor>
  )
}

export default App
