import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Proveedor } from '../../context'
import Home from '../home'
import NavBar from '../../components/navbar'

const AppRouters = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/frieza', element: <Home /> },
    { path: '/beerus', element: <Home /> },
    { path: '/vermoud', element: <Home /> },
    { path: '/freelancer', element: <Home /> },
    { path: '/troopers', element: <Home /> },
    { path: '/villain', element: <Home /> },
    { path: '/fighter', element: <Home /> },
    { path: '/other', element: <Home /> }
  ])

  return routes
}

function App() {
  return (
    <Proveedor>
      <BrowserRouter>
        <AppRouters />
        <NavBar />
      </BrowserRouter>
    </Proveedor>
  )
}

export default App
