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
          <Route path='/list' element={<ListItems />} />
          <Route path='/conditional' element={<ConditionalRendering />} />
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
          <NavItem path='/args' name='Properties' />
          <NavItem path='/list' name='Rendering List' />
          <NavItem path='/conditional' name='Conditional' />
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