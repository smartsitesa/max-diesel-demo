import React from 'react';
import { createRoot } from 'react-dom/client';
import { Gauge, Wrench, Droplets, ShieldCheck, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Settings, Zap, Menu } from 'lucide-react';
import './styles.css';
import logo from './max-diesel-client-image.jpg';

const services = [
  { icon: Gauge, title: 'Injector Testing', text: 'Bench-style diagnostic positioning for flow, spray pattern, leakage and performance checks.' },
  { icon: Droplets, title: 'Injector Cleaning', text: 'Professional cleaning message focused on restoring correct diesel atomisation and smoother running.' },
  { icon: Wrench, title: 'Repairs & Reconditioning', text: 'Service-page copy for diesel injector repairs, seal replacement, calibration and reconditioning.' },
  { icon: Settings, title: 'Diesel Diagnostics', text: 'Help customers with hard starting, smoke, rough idle, poor power, high fuel use and injector faults.' },
];

const signs = ['Hard starting', 'Black or white smoke', 'Rough idle', 'Loss of power', 'High fuel consumption', 'Diesel knocking', 'Injector warning codes', 'Uneven running'];

function App(){return <>
  <header className="nav">
    <a className="brand" href="#top"><img src={logo} alt="Max Diesel logo"/><span>Max Diesel <b>Fuel Injector Specialist</b></span></a>
    <nav><a href="#services">Services</a><a href="#symptoms">Symptoms</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
    <a className="navCta" href="#contact">Get quote</a><button className="menu" aria-label="Menu"><Menu/></button>
  </header>

  <main id="top">
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow"><span></span>Diesel injector specialists</p>
        <h1>Precision diesel injector testing, cleaning & repairs.</h1>
        <p className="lead">A corrected demo concept for <strong>Max Diesel Fuel Injector Specialist</strong>, based on the Facebook page you sent. Focused on diesel pump repairs, fuel injector recon, vehicles and earth-moving equipment.</p>
        <div className="actions"><a className="primary" href="#contact">Request service <ArrowRight size={18}/></a><a className="secondary" href="https://www.facebook.com/556718934202583" target="_blank" rel="noreferrer">Facebook page</a></div>
        <p className="note">Research note: updated with the higher-quality image supplied directly by Charl; phone number +27 72 749 4437 kept from the public promo graphic.</p>
      </div>
      <div className="heroVisual">
        <div className="promoImage"><img src={logo} alt="Max Diesel Fuel Injector Specialist diesel pump and injector repair advert"/></div>
        <div className="machineCard">
          <div className="scan"><Zap/><span>Injector diagnostic report</span></div>
          <div className="bars"><i style={{height:'82%'}}></i><i style={{height:'68%'}}></i><i style={{height:'91%'}}></i><i style={{height:'74%'}}></i></div>
          <div className="readouts"><span><b>Flow</b> Checked</span><span><b>Leak</b> Tested</span><span><b>Spray</b> Verified</span></div>
        </div>
      </div>
    </section>

    <section className="trust"><div><strong>108</strong><span>Facebook followers found</span></div><div><strong>Diesel</strong><span>injector-focused brand</span></div><div><strong>SA</strong><span>local service positioning</span></div></section>

    <section id="services" className="section">
      <p className="eyebrow"><span></span>Core services</p><h2>Built for bakkies, trucks, fleets and diesel equipment.</h2>
      <div className="grid">{services.map(({icon:Icon,title,text})=><article className="service" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section id="symptoms" className="symptoms">
      <div><p className="eyebrow"><span></span>Warning signs</p><h2>When customers should call Max Diesel.</h2><p>These are common diesel-injector problem signals. Final wording can be tightened once we know exactly what vehicles and injector systems they handle.</p></div>
      <div className="symptomGrid">{signs.map(s=><span key={s}><CheckCircle2/> {s}</span>)}</div>
    </section>

    <section id="process" className="process">
      <p className="eyebrow"><span></span>Simple workshop flow</p><h2>Clear process. Clear quote. Clear repair.</h2>
      <div className="steps"><article><b>01</b><h3>Inspect</h3><p>Capture customer symptoms, vehicle/equipment details and injector condition.</p></article><article><b>02</b><h3>Test</h3><p>Run checks for flow, leakage, spray pattern and injector performance.</p></article><article><b>03</b><h3>Repair</h3><p>Clean, recondition or replace parts where needed, then retest before handover.</p></article></div>
    </section>

    <section id="contact" className="contact">
      <div><p className="eyebrow"><span></span>Contact demo</p><h2>Turn Facebook visitors into quote requests.</h2><p>Phone number pulled from the public Facebook promotional graphic. Location and trading hours still need confirmation.</p><ul><li><Phone/> +27 72 749 4437</li><li><Mail/> Email to confirm</li><li><MapPin/> Location to confirm</li></ul></div>
      <form onSubmit={e=>e.preventDefault()}><input placeholder="Name"/><input placeholder="Phone / WhatsApp"/><input placeholder="Vehicle / engine"/><select defaultValue=""><option value="" disabled>Problem type</option><option>Injector testing</option><option>Injector cleaning</option><option>Injector repair</option><option>Diesel diagnostic</option></select><textarea placeholder="Describe the symptoms"></textarea><button>Send enquiry</button></form>
    </section>
  </main>
  <footer><b>Max Diesel Fuel Injector Specialist</b><span>Demo based on public Facebook page: facebook.com/556718934202583</span></footer>
</>}

createRoot(document.getElementById('root')).render(<App/>);
