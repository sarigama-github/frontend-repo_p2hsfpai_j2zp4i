import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Podcast from './pages/Podcast'
import InternationalCouples from './pages/services/InternationalCouples'
import DivorceMediation from './pages/services/DivorceMediation'
import PrenuptialAgreements from './pages/services/PrenuptialAgreements'
import NotaryServices from './pages/services/NotaryServices'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="podcast" element={<Podcast />} />
        <Route path="services">
          <Route path="international-couples" element={<InternationalCouples />} />
          <Route path="divorce-mediation" element={<DivorceMediation />} />
          <Route path="prenuptial-agreements" element={<PrenuptialAgreements />} />
          <Route path="notary-services" element={<NotaryServices />} />
        </Route>
      </Route>
    </Routes>
  )
}
