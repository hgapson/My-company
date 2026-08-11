const services = [
  { number: '01', icon: '⌘', title: 'Websites that work', text: 'Professional, mobile-friendly websites that clearly tell your story and turn visitors into enquiries.', items: ['Business & organisation websites', 'Website care and updates', 'Forms, bookings & digital tools'], cta: 'Discuss your website', featured: true },
  { number: '02', icon: '◌', title: 'Everyday IT support', text: 'Fast, approachable help for the technology issues that interrupt your day.', items: ['Computer setup & troubleshooting', 'Email, printers & software support', 'Remote and onsite assistance'], cta: 'Get IT support' },
  { number: '03', icon: '⌁', title: 'Connected & secure', text: 'Build stronger foundations for work, communication and peace of mind.', items: ['Wi-Fi & small-office networks', 'Microsoft 365 & Google Workspace', 'Cybersecurity awareness'], cta: 'Improve your setup' },
]

export default function Services() {
  return <section className="services section" id="services"><div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Support for your systems and your next big idea.</h2></div><p>Choose one service or combine them into a plan that fits your organisation.</p></div><div className="service-grid">{services.map((service) => <article className={`service-card ${service.featured ? 'featured' : ''}`} key={service.number}><span className="service-number">{service.number}</span><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><a href="#contact">{service.cta} <span>→</span></a></article>)}</div></section>
}
