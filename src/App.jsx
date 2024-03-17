import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about/about.jsx'
import Vans from './pages/vans/vans.jsx'
import HostVanDetail from './pages/host/HostVanDetail.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import VanDetail from './pages/vans/VanDetail.jsx';
import Reviews from './pages/host/Reviews';
import Income from './pages/host/Income';
import './index.css';
import HostVans from './pages/host/HostVans.jsx';
import HostLayout from './components/HostLayout.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx'
import Details from './pages/host/Details.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path='host' element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="Income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="Reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<Details/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
