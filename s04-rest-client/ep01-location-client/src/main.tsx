import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './app'
import Home from './pages/home'
import Regions from './pages/region/list'
import RegionDetails from './pages/region/details'
import States from './pages/state/list'
import StateDetails from './pages/state/details'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='regions' element={<Regions />} />
        <Route path='regions/:id' element={<RegionDetails />} />
        <Route path='states' element={<States />} />
        <Route path='states/:id' element={<StateDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
