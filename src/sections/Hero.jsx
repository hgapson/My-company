import HeroArt from '../components/HeroArt'

export default function Hero() {
  return <section className="hero"><div className="hero-copy"><p className="eyebrow hero-eyebrow"><span /> Hamilton, NZ · Supporting clients nationwide</p><h1>Technology that <em>moves</em> your work forward.</h1><p className="hero-text">Friendly IT support and practical web development for small businesses, non-profits, community groups and growing teams.</p><div className="hero-actions"><a className="button primary" href="#contact">Start a conversation <span>→</span></a><a className="text-link" href="#services">Explore services <span>↓</span></a></div><div className="trust-row">{[['Local', 'Hamilton-based'], ['Clear', 'Plain-language advice'], ['Flexible', 'Remote or onsite']].map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div></div><HeroArt /></section>
}
