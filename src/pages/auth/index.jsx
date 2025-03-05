import { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { contexto } from '../../context'

function Auth() {
  const { usuarios, setHayUsuarioAuth } = useContext(contexto)
  const form = useRef(null)
  const navigate = useNavigate()

  const validarUsuario = (e) => {
    e.preventDefault()
    const valoresForm = new FormData(form.current)
    const data = {
      nombre: valoresForm.get('name'),
      password: valoresForm.get('password'),
    }

    const usuarioValido = usuarios.find(
      (usuario) => usuario.usuario === data.nombre && usuario.contrasena === data.password
    )

    if (usuarioValido) {
      setHayUsuarioAuth(true)
      localStorage.setItem('usuarioAuth', JSON.stringify(usuarioValido))
      navigate('/')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#272b33]'>
      <form ref={form} className='flex flex-col gap-4 w-96'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-amber-50 text-md'>Nombre Usuario</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='gpadilla'
            className='bg-amber-50 rounded-lg border border-amber-50 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='font-light text-amber-50 text-md'>Contraseña</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='********'
            className='bg-amber-50 rounded-lg border border-amber-50 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <Link to={'/'}>
          <button
            className='bg-lime-50 text-center text-black w-full rounded-lg py-1 mt-2 mb-1'
            onClick={validarUsuario}
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Auth
