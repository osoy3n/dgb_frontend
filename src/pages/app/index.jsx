import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Proveedor } from '../../context'
import Home from '../home'
import NavBar from '../../components/navbar'

const AppRouters = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> }
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
