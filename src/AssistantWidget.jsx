import React, { useMemo, useState } from 'react';
import { Bot, MessageCircle, X, Send, RotateCcw } from 'lucide-react';

const services = ['Diesel injector issue', 'Diesel pump issue', 'Turbo / power loss', 'Not sure - need diagnostics'];
const symptoms = ['Hard starting', 'Smoke', 'Loss of power', 'High fuel use', 'Rough idle', 'Noise/knocking'];

export default function AssistantWidget({ whatsappUrlBase }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState('service');
  const [data, setData] = useState({ service: '', symptoms: [], vehicle: '', name: '' });

  const summary = useMemo(() => {
    return `Hi Max Diesel, I need help.\nService: ${data.service || 'Not selected'}\nSymptoms: ${data.symptoms.join(', ') || 'Not selected'}\nVehicle/engine: ${data.vehicle || 'Not supplied'}\nName: ${data.name || 'Not supplied'}`;
  }, [data]);

  const wa = `${whatsappUrlBase}?text=${encodeURIComponent(summary)}`;
  const toggleSymptom = (s) => setData(d => ({ ...d, symptoms: d.symptoms.includes(s) ? d.symptoms.filter(x => x !== s) : [...d.symptoms, s] }));
  const reset = () => { setStep('service'); setData({ service: '', symptoms: [], vehicle: '', name: '' }); };

  return <>
    <button className="aiFab" onClick={() => setOpen(true)} aria-label="Open AI assistant"><Bot/><span>AI Help</span></button>
    {open && <div className="aiPanel" role="dialog" aria-label="AI diesel assistant">
      <div className="aiHead"><div><Bot/><span><b>Diesel AI Assistant</b><small>Quick fault triage → WhatsApp</small></span></div><button onClick={() => setOpen(false)} aria-label="Close"><X/></button></div>
      <div className="aiBody">
        <div className="aiMsg bot">Hi 👋 I can help prepare your enquiry for Max Diesel. What do you need help with?</div>

        {step === 'service' && <div className="aiChoices">{services.map(s => <button key={s} onClick={() => { setData(d => ({...d, service:s})); setStep('symptoms'); }}>{s}</button>)}</div>}

        {step === 'symptoms' && <>
          <div className="aiMsg bot">Select the symptoms you notice.</div>
          <div className="aiChoices multi">{symptoms.map(s => <button className={data.symptoms.includes(s) ? 'selected' : ''} key={s} onClick={() => toggleSymptom(s)}>{s}</button>)}</div>
          <button className="aiNext" onClick={() => setStep('vehicle')}>Next</button>
        </>}

        {step === 'vehicle' && <>
          <div className="aiMsg bot">What vehicle or engine is it?</div>
          <input className="aiInput" value={data.vehicle} onChange={e => setData(d => ({...d, vehicle:e.target.value}))} placeholder="e.g. Ford Ranger 2.2 / Toyota Hilux" />
          <button className="aiNext" onClick={() => setStep('name')}>Next</button>
        </>}

        {step === 'name' && <>
          <div className="aiMsg bot">Your name?</div>
          <input className="aiInput" value={data.name} onChange={e => setData(d => ({...d, name:e.target.value}))} placeholder="Your name" />
          <button className="aiNext" onClick={() => setStep('done')}>Create WhatsApp enquiry</button>
        </>}

        {step === 'done' && <>
          <div className="aiMsg bot">Ready. I’ll open WhatsApp with this message:</div>
          <pre className="aiSummary">{summary}</pre>
          <div className="aiActions"><a href={wa} target="_blank" rel="noreferrer"><Send size={16}/> Open WhatsApp</a><button onClick={reset}><RotateCcw size={16}/> Start over</button></div>
        </>}
      </div>
    </div>}
  </>;
}
