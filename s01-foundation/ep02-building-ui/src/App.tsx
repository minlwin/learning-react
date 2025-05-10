import { Route, Routes } from 'react-router'
import './App.css'
import FirstComponent from './pages/first/first-component'
import PassingArgs from './pages/passing-args/passing-arguments'
import ConditionalRendering from './pages/conditional/conditional'
import ListItems from './pages/list/list-items'
import { NavLink } from 'react-router'
import ShortCircutAnd from './pages/conditional/conditional-short-and'
import TernaryOperator from './pages/conditional/conditional-ternary'
import ShortCircutOr from './pages/conditional/conditional-short-or'
import ConditionalHome from './pages/conditional/conditional-home'
import Home from './pages/home/home'
import HomeFirstComponent from './pages/home/home-first'
import HomeProperties from './pages/home/home-props'
import HomeListItem from './pages/home/home-list'
import HomeConditional from './pages/home/home-conditional'
import HomeIndex from './pages/home/home-index'

export default function App() {
  return (
    <>
      <NavBar />

      <div className="container mt-4">
        <Routes>
          <Route element={<Home />} >
            <Route index element={<HomeIndex />} />
            <Route path='/home/first' element={<HomeFirstComponent />} />
            <Route path='/home/props' element={<HomeProperties />} />
            <Route path='/home/list' element={<HomeListItem />} />
            <Route path='/home/conditional' element={<HomeConditional />} />
          </Route>
          <Route path='/first' element={<FirstComponent />} />
          <Route path='/args' element={<PassingArgs />} />
          <Route path='/list' element={<ListItems />} />
          <Route path='/conditional' element={<ConditionalRendering />} >
            <Route index element={<ConditionalHome />} />
            <Route path='shortAnd' element={<ShortCircutAnd />} />
            <Route path='ternary' element={<TernaryOperator />} />
            <Route path='shortOr' element={<ShortCircutOr />} />
          </Route>
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