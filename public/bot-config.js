window.SmartSiteBotConfig = {
  businessName: 'Max Diesel Fuel Injector Specialist',
  title: 'Max Diesel',
  subtitle: 'How can we help with your diesel issue?',
  botTitle: 'Max Diesel Bot',
  botSubtitle: 'No-API site assistant',
  whatsappNumber: '27727494437',
  genericMessage: 'Hi Max Diesel, I would like to enquire about diesel injector or pump repairs.',
  fallback: 'I am not sure about that. Do you want to speak to someone on WhatsApp?',
  emailSubject: 'Max Diesel enquiry',
  callHref: 'https://wa.me/27727494437',
  introMessage: 'Hi 👋 I can help with injector testing, injector cleaning, repairs, diesel diagnostics, common symptoms, quote requests and WhatsApp handoff. Choose an option or type your question.',
  quickReplies: ['What can you help with?', 'I need a quote', 'Injector testing', 'Injector cleaning', 'Repairs', 'Diesel symptoms', 'Vehicle details', 'WhatsApp Max Diesel'],
  parameters: [
    { keywords: ['hello','hi','hey','good morning','good afternoon'], reply: 'Hello 👋 How can I assist with your diesel injector or pump enquiry?' },
    { keywords: ['what can you help with','services','help','options'], reply: 'I can help with injector testing, injector cleaning, injector repairs/reconditioning, diesel diagnostics, common symptoms, quote requests and WhatsApp handoff.' },
    { keywords: ['injector testing','testing','test','flow','leak','spray'], reply: 'Max Diesel can position injector testing around flow, leakage, spray pattern and performance checks. Please share your vehicle/engine and symptoms.' },
    { keywords: ['injector cleaning','cleaning','clean','atomisation','atomization'], reply: 'Injector cleaning is relevant when diesel atomisation or injector performance may be causing rough running, smoke, hard starting or poor fuel use.' },
    { keywords: ['repair','repairs','reconditioning','recondition','seal','calibration'], reply: 'Max Diesel focuses on diesel injector repairs and reconditioning. Please send the injector issue, vehicle/engine details, and any fault symptoms.' },
    { keywords: ['diagnostics','diagnostic','fault','problem','warning code','codes'], reply: 'Diesel diagnostics can help with hard starting, smoke, rough idle, poor power, high fuel use and injector-related faults.' },
    { keywords: ['hard starting','smoke','rough idle','loss of power','high fuel','knocking','uneven running','symptoms'], reply: 'Those are common diesel injector warning signs. Send your vehicle/engine, symptom list and when it happens, then the team can advise next steps.' },
    { keywords: ['diesel pump','pump'], reply: 'The public promo image mentions diesel pump repairs. Please send pump details, vehicle/equipment type and symptoms for follow-up.' },
    { keywords: ['vehicle','engine','bakkie','truck','fleet','earth moving','earth-moving','equipment'], reply: 'Please share the vehicle or engine details, for example model, engine size, injector type if known, and what symptoms you notice.' },
    { keywords: ['quote','price','cost','quotation','estimate'], reply: 'For a quote, send your name, contact number, vehicle/engine, symptoms, and whether you need testing, cleaning or repair.' },
    { keywords: ['phone','number','contact','whatsapp','agent','person'], reply: 'You can WhatsApp Max Diesel on +27 72 749 4437. Include your vehicle/engine, symptoms and what service you need.' }
  ],
  autoUpdateFromSite: true,
  sitePages: [{ label: 'Home', href: 'index.html' }],
  siteAnswers: [
    { keywords: ['facebook','public page','social'], reply: 'The demo references the public Facebook page and promotional image used for Max Diesel details.', links: [{ label: 'Open Facebook page', href: 'https://www.facebook.com/556718934202583' }] },
    { keywords: ['contact section','contact page','how to contact'], reply: 'The contact section lists the WhatsApp number and enquiry form for diesel injector/pump repairs.', links: [{ label: 'Go to contact', href: 'index.html#contact' }] },
    { keywords: ['warning signs','symptom list','when should i call'], reply: 'The site lists warning signs such as hard starting, smoke, rough idle, loss of power, high fuel use, diesel knocking and uneven running.', links: [{ label: 'View symptoms', href: 'index.html#symptoms' }] }
  ]
};
