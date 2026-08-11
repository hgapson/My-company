const process = [
  ['Listen', 'We learn about your goals, current setup and what is getting in the way.'],
  ['Make a plan', 'You receive clear options, a practical scope and transparent pricing.'],
  ['Get it done', 'We build, fix or set up what you need — with clear updates along the way.'],
  ['Keep moving', 'Stay supported with training, maintenance or a flexible monthly plan.'],
]

export default function Process() {
  return <section className="process section" id="process"><p className="eyebrow">A straightforward process</p><h2>From “we need help” to <span>“it’s working.”</span></h2><div className="process-grid">{process.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
}
