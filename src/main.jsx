import React from 'react';
import { createRoot } from 'react-dom/client';
import { Fuel, ShieldCheck, Gauge, Truck, BarChart3, Droplets, CheckCircle2, ArrowRight, Phone, Mail, MapPin, Menu } from 'lucide-react';
import './styles.css';

const services = [
  { icon: ShieldCheck, title: 'Fuel Theft Prevention', text: 'Secure dispensing, user control, audit trails, and exceptions that help protect every litre.' },
  { icon: Gauge, title: 'Tank & Pump Monitoring', text: 'Live tank levels, pump activity, reconciliations, and practical alerts for site managers.' },
  { icon: Truck, title: 'Bulk Fuel & On-site Refuelling', text: 'A modern customer journey for businesses that need dependable fuel delivered where work happens.' },
  { icon: BarChart3, title: 'Fleet Consumption Analytics', text: 'Vehicle usage, cost-per-kilometre insights, and reports that make wastage visible.' },
];

const stats = [
  ['24/7', 'site visibility'],
  ['100%', 'litre accountability'],
  ['25+', 'years tech heritage*'],
  ['SA', 'local market focus'],
];

function App() {
  return <>
    <header className="nav">
      <a className="brand" href="#top" aria-label="MaxFuel home">
        <span className="brandMark"><Fuel size={24}/></span><span>Max<span>Fuel</span></span>
      </a>
      <nav>
        <a href="#services">Solutions</a><a href="#process">Process</a><a href="#industries">Industries</a><a href="#contact">Contact</a>
      </nav>
      <a className="navCta" href="#contact">Request demo</a>
      <button className="menu" aria-label="Menu"><Menu/></button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow"><span></span>Fuel control • Monitoring • Fleet efficiency</p>
          <h1>Take control of every litre, every vehicle, every site.</h1>
          <p className="lead">A clean demo concept for MaxFuel: a South African fuel management brand focused on theft prevention, tank visibility, on-site refuelling, and simple reporting for operators.</p>
          <div className="actions"><a className="primary" href="#contact">Book a consultation <ArrowRight size={18}/></a><a className="secondary" href="#services">View solutions</a></div>
          <p className="researchNote">*Demo built from public research. maxfuel.co.za did not resolve during lookup, so copy is intentionally conservative.</p>
        </div>
        <div className="heroCard" aria-label="Fuel management dashboard preview">
          <div className="dashboardTop"><span></span><span></span><span></span></div>
          <div className="metric"><p>Diesel tank level</p><strong>78%</strong><div><i style={{width:'78%'}}></i></div></div>
          <div className="metric"><p>Daily dispensed</p><strong>4,820 L</strong><div><i style={{width:'62%'}}></i></div></div>
          <div className="alerts"><span><CheckCircle2/> Pump 02 authorised</span><span><Droplets/> Reconciliation balanced</span><span><ShieldCheck/> No theft alerts</span></div>
        </div>
      </section>

      <section className="statBand">{stats.map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</section>

      <section id="services" className="section">
        <p className="eyebrow"><span></span>Solutions</p><h2>Built for businesses where fuel is mission-critical.</h2>
        <div className="grid">{services.map(({icon:Icon,title,text}) => <article className="service" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="process" className="split">
        <div><p className="eyebrow"><span></span>How it works</p><h2>From tank to report, make the blind spots visible.</h2><p>MaxFuel can be positioned as a practical partner for fuel-heavy operations: install the right controls, capture accurate data at source, and turn it into decisions managers can act on.</p></div>
        <div className="steps"><div><b>01</b><h3>Assess the site</h3><p>Tanks, pumps, vehicles, users, risk points and reporting needs.</p></div><div><b>02</b><h3>Control & monitor</h3><p>Authorised dispensing, level checks, transaction logs and alerts.</p></div><div><b>03</b><h3>Report savings</h3><p>Consumption trends, losses prevented, and operational dashboards.</p></div></div>
      </section>

      <section id="industries" className="industries">
        <p className="eyebrow"><span></span>Industries</p><h2>Designed around real South African operations.</h2>
        <div><span>Agriculture</span><span>Transport & Logistics</span><span>Construction</span><span>Mining Support</span><span>Generators & Backup Power</span><span>Fleet Operators</span></div>
      </section>

      <section id="contact" className="contact">
        <div><p className="eyebrow"><span></span>Ready for launch</p><h2>Demo lead form section</h2><p>This area can connect to WhatsApp, email, CRM, or a quote request form once the client confirms details.</p><ul><li><Phone/> +27 00 000 0000</li><li><Mail/> sales@maxfuel.co.za</li><li><MapPin/> South Africa</li></ul></div>
        <form onSubmit={(e)=>e.preventDefault()}><input placeholder="Name"/><input placeholder="Company"/><input placeholder="Email / phone"/><select defaultValue=""><option value="" disabled>Service interest</option><option>Fuel management</option><option>Bulk fuel</option><option>Tank monitoring</option></select><textarea placeholder="Tell us about your site or fleet"></textarea><button>Send enquiry</button></form>
      </section>
    </main>
    <footer><b>MaxFuel</b><span>Demo website concept • Colours inspired by public MaxiFuel/industry references: deep navy, teal, white, charcoal.</span></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App/>);
