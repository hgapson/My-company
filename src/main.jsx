import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Audience from './sections/Audience'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Introduction from './sections/Introduction'
import Process from './sections/Process'
import Services from './sections/Services'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset() }

  return <>
    <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} onNavigate={closeMenu} />
    <main id="top"><Hero /><Introduction /><Services /><Audience /><Process /><Contact sent={sent} onSubmit={submit} /></main>
    <Footer />
  </>
}

createRoot(document.getElementById('root')).render(<App />)
