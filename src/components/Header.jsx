import Brand from './Brand'

export default function Header({ menuOpen, onMenuToggle, onNavigate }) {
  return <header className={`site-header ${menuOpen ? 'open' : ''}`}><Brand /><button className="menu-button" onClick={onMenuToggle} aria-expanded={menuOpen} aria-controls="nav">Menu</button><nav id="nav" aria-label="Main navigation"><a onClick={onNavigate} href="#services">Services</a><a onClick={onNavigate} href="#why-us">Why us</a><a onClick={onNavigate} href="#process">How it works</a><a onClick={onNavigate} className="nav-cta" href="#contact">Get support</a></nav></header>
}
