import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home'
import FirstComponent from './pages/first-component'
import PassingArgs from './pages/passing-arguments'
import ConditionalRendering from './pages/conditional-rendering'
import ListItems from './pages/list-items'
import { NavLink } from 'react-router'

export default function App() {
  return (
    <>
      <NavBar />

      <div className="container mt-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/first' element={<FirstComponent />} />
          <Route path='/args' element={<PassingArgs />} />
          <Route path='/conditional' element={<ConditionalRendering />} />
          <Route path='/list' element={<ListItems />} />
        </Routes>
      </div>
    </>
  )
}

function NavBar() {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-black'>
      <div className="container">
        <NavLink to={'/'} className='navbar-brand'>Building UI</NavLink>

        <ul className="navbar-nav">
          <NavItem path='/first' name='First Component' />
          <NavItem path='/args' name='Arguments' />
          <NavItem path='/conditional' name='Conditional' />
          <NavItem path='/list' name='Rendering List' />
        </ul>
      </div>
    </nav>
  )
}

function NavItem({path, name} : {path: string, name : string}) {
  return (
    <li className='nav-item'>
      <NavLink to={path} className={'nav-link'}>{name}</NavLink>
    </li>
  )
}