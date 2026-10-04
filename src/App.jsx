import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SkillNetwork from './pages/Skills'

export default function App() {
  const location = useLocation()

  // Start every new page at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/skills" element={<SkillNetwork />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Varsha Patil — Built with React
      </footer>
    </div>
  )
}
