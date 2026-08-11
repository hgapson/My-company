import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  { number: '01', icon: '⌘', title: 'Websites that work', text: 'Professional, mobile-friendly websites that clearly tell your story and turn visitors into enquiries.', items: ['Business & organisation websites', 'Website care and updates', 'Forms, bookings & digital tools'], cta: 'Discuss your website', featured: true },
  { number: '02', icon: '◌', title: 'Everyday IT support', text: 'Fast, approachable help for the technology issues that interrupt your day.', items: ['Computer setup & troubleshooting', 'Email, printers & software support', 'Remote and onsite assistance'], cta: 'Get IT support' },
  { number: '03', icon: '⌁', title: 'Connected & secure', text: 'Build stronger foundations for work, communication and peace of mind.', items: ['Wi-Fi & small-office networks', 'Microsoft 365 & Google Workspace', 'Cybersecurity awareness'], cta: 'Improve your setup' },
]

const audiences = [
  ['Small businesses', 'Reliable systems and a confident online presence.'],
  ['Non-profits & community groups', 'Affordable digital tools that help you reach people.'],
  ['Churches & faith groups', 'Websites, communication tools and practical support.'],
  ['Start-ups & individuals', 'A solid, friendly foundation from day one.'],
]

const process = [
  ['Listen', 'We learn about your goals, current setup and what is getting in the way.'],
  ['Make a plan', 'You receive clear options, a practical scope and transparent pricing.'],
  ['Get it done', 'We build, fix or set up what you need — with clear updates along the way.'],
  ['Keep moving', 'Stay supported with training, maintenance or a flexible monthly plan.'],
]

function Brand() { return <a className="brand" href="#top" aria-label="Gapson Tech Solutions home"><span className="brand-mark">G</span><span>Gapson <b>Tech</b></span></a> }

function HeroArt() { return <div className="hero-art" aria-label="Abstract technology illustration"><div className="orb orb-one" /><div className="orb orb-two" /><div className="grid" /><div className="device-window"><div className="window-top"><i /><i /><i /><span>your-business.co.nz</span></div><div className="window-body"><div className="window-label">A better digital presence</div><div className="window-title">Built for the people you serve.</div><div className="fake-button" /><div className="bars"><b /><b /><b /></div></div></div><div className="floating-card card-support"><span className="icon">✦</span><div><small>IT support</small><strong>Here when you need us</strong></div></div><div className="floating-card card-secure"><span className="icon">✓</span><div><small>Security first</small><strong>Protected & prepared</strong></div></div></div> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <>
    <header className={`site-header ${menuOpen ? 'open' : ''}`}><Brand /><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="nav">Menu</button><nav id="nav" aria-label="Main navigation"><a onClick={closeMenu} href="#services">Services</a><a onClick={closeMenu} href="#why-us">Why us</a><a onClick={closeMenu} href="#process">How it works</a><a onClick={closeMenu} className="nav-cta" href="#contact">Get support</a></nav></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><p className="eyebrow hero-eyebrow"><span /> Hamilton, NZ · Supporting clients nationwide</p><h1>Technology that <em>moves</em> your work forward.</h1><p className="hero-text">Friendly IT support and practical web development for small businesses, non-profits, community groups and growing teams.</p><div className="hero-actions"><a className="button primary" href="#contact">Start a conversation <span>→</span></a><a className="text-link" href="#services">Explore services <span>↓</span></a></div><div className="trust-row">{[['Local', 'Hamilton-based'], ['Clear', 'Plain-language advice'], ['Flexible', 'Remote or onsite']].map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div></div><HeroArt /></section>
      <section className="intro" id="why-us"><p className="eyebrow">A technology partner, not just a technician</p><h2>We make tech feel <span>simple, useful and human.</span></h2><p>Whether you need a website that earns trust, a reliable Wi-Fi network, help with Microsoft 365, or a frustrating computer problem fixed, we focus on the solution that makes everyday work easier.</p></section>
      <section className="services section" id="services"><div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Support for your systems and your next big idea.</h2></div><p>Choose one service or combine them into a plan that fits your organisation.</p></div><div className="service-grid">{services.map((service) => <article className={`service-card ${service.featured ? 'featured' : ''}`} key={service.number}><span className="service-number">{service.number}</span><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><a href="#contact">{service.cta} <span>→</span></a></article>)}</div></section>
      <section className="audience section"><div className="audience-copy"><p className="eyebrow">Built around your needs</p><h2>Big-company care for organisations doing important work.</h2><p>We understand that not every team has an IT department. You deserve responsive support, sensible advice and a partner who takes time to understand your goals.</p><a className="button dark" href="#contact">Tell us what you need <span>→</span></a></div><div className="audience-list">{audiences.map(([title, copy], index) => <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{copy}</p></div>)}</div></section>
      <section className="process section" id="process"><p className="eyebrow">A straightforward process</p><h2>From “we need help” to <span>“it’s working.”</span></h2><div className="process-grid">{process.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="contact" id="contact"><div className="contact-copy"><p className="eyebrow">Let’s solve it together</p><h2>Ready for technology that works better for you?</h2><p>Tell us a little about what you need. We’ll get back to you with a clear next step.</p><div className="contact-detail"><span>Based in Hamilton, New Zealand</span><span>Available remotely across New Zealand</span></div></div><form onSubmit={submit}><label>Your name<input required name="name" type="text" placeholder="Name" /></label><label>Email address<input required name="email" type="email" placeholder="you@example.com" /></label><label>What can we help with?<select name="service"><option>Website development</option><option>IT support</option><option>Wi-Fi, networking or email</option><option>Microsoft 365 / Google Workspace</option><option>Something else</option></select></label><label>Tell us a little more<textarea required name="message" rows="3" placeholder="What would you like to improve or fix?" /></label><button className="button primary" type="submit">Send enquiry <span>→</span></button><p className="form-note" role="status">{sent && 'Thanks — your enquiry is ready to send. Connect this form to an email or form service when you launch.'}</p></form></section>
    </main>
    <footer className="site-footer">
      <div className="footer-brand"><Brand /><p>Practical technology. Personal service.</p></div>
      <div className="footer-links" aria-label="Footer navigation">
        <div><strong>Explore</strong><a href="#services">Services</a><a href="#why-us">Why us</a><a href="#process">How it works</a></div>
        <div><strong>Get in touch</strong><a href="#contact">Start a conversation</a><a href="#contact">Request IT support</a><a href="#contact">Website enquiries</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Gapson Tech Solutions</span><a href="#top">Back to top ↑</a></div>
    </footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
