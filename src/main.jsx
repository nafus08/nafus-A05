import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import technologies from './data/technologies.json';
import './styles.css';
import './about.css';
import './about-reachable.css';
import './section-theme.css';
import './card-theme.css';
import './about-layout.css';
import './contrast-theme.css';
import './visibility-fix.css';
import './search-theme.css';
import './font-theme.css';
import './micro-font-theme.css';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'DevOps', 'Tools'];
const principles = [
  { label: 'Clarity', number: '01', copy: 'Choose tools that make the next decision easier, not louder.' },
  { label: 'Momentum', number: '02', copy: 'Keep the workflow light so good ideas can move quickly.' },
  { label: 'Craft', number: '03', copy: 'Make room for the small details that turn working into remarkable.' }
];

function Logo() {
  return <a className="logo" href="#home" aria-label="Dev Stack home"><span className="logo-mark">&lt;/&gt;</span><span>dev<span>stack</span></span></a>;
}

function Header({ isMenuOpen, setIsMenuOpen }) {
  return <header className="site-header"><div className="header-inner"><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}><span /><span /><span /></button><Logo /><nav className={isMenuOpen ? 'nav-links open' : 'nav-links'}><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a><a href="#technologies" onClick={() => setIsMenuOpen(false)}>Technologies</a><a href="#stack" onClick={() => setIsMenuOpen(false)}>Projects</a><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></nav><div className="auth-actions"><button className="sign-in">Sign in</button><button className="sign-up">Sign up <span>↗</span></button></div></div></header>;
}

function TechCard({ tech, selected, onAdd }) {
  return <article className="tech-card"><div className="card-top"><div className="tech-icon"><img src={tech.icon} alt="" /></div><span className="badge">{tech.badge}</span></div><div><h3>{tech.name}</h3><p>{tech.description}</p></div><div className="card-meta"><span className="category-chip">{tech.category}</span><span className="difficulty">{tech.difficulty}</span></div><div className="card-footer"><span className="rating"><span>★</span> {tech.rating}</span><button className={selected ? 'add-button added' : 'add-button'} onClick={() => onAdd(tech)} disabled={selected}>{selected ? '✓ Added to stack' : '+ Add to stack'}</button></div></article>;
}

function StackPanel({ stack, onRemove, onClear }) {
  return <aside className="stack-panel" id="stack"><div className="stack-heading"><div><span className="eyebrow">Your workspace</span><h2>Your stack <span>{stack.length}</span></h2></div><span className="stack-count">{String(stack.length).padStart(2, '0')}</span></div>{stack.length === 0 ? <div className="empty-stack"><div className="empty-icon">✦</div><h3>Your stack is empty</h3><p>Pick the tools you trust. Your personal toolkit will appear here.</p><a href="#technologies">Browse technologies <span>→</span></a></div> : <><div className="stack-list">{stack.map(tech => <div className="stack-item" key={tech.id}><div className="stack-item-icon"><img src={tech.icon} alt="" /></div><div><strong>{tech.name}</strong><small>{tech.category}</small></div><button aria-label={`Remove ${tech.name}`} onClick={() => onRemove(tech)}>×</button></div>)}</div><button className="clear-button" onClick={onClear}>Clear all <span>↗</span></button></>}</aside>;
}

function App() {
  const [items, setItems] = useState([]);
  const [stack, setStack] = useState([]);
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(0);

  useEffect(() => { const timer = setTimeout(() => { setItems(technologies); setLoading(false); }, 450); return () => clearTimeout(timer); }, []);
  const filteredItems = items.filter(item => (category === 'All' || item.category === category) && `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase()));
  const addToStack = (tech) => { if (stack.some(item => item.id === tech.id)) { toast.warning(`${tech.name} is already in your stack.`); return; } setStack([...stack, tech]); toast.success(`${tech.name} added to your stack.`); };
  const removeFromStack = (tech) => { setStack(stack.filter(item => item.id !== tech.id)); toast.info(`${tech.name} removed.`); };
  const clearStack = () => { if (!stack.length) return; setStack([]); toast.info('Your stack has been cleared.'); };

  return <><Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /><main><section className="hero" id="home"><div className="hero-copy"><span className="eyebrow">The developer toolkit, curated</span><h1>Build your<br /><em>dream stack.</em></h1><p>Discover the tools, frameworks, and technologies that turn ambitious ideas into remarkable digital products.</p><div className="hero-actions"><a className="primary-button" href="#technologies">Explore technologies <span>↗</span></a><a className="secondary-button" href="#about">Learn more <span>→</span></a></div><div className="hero-proof"><div className="avatar-row"><span>R</span><span>M</span><span>A</span><span>+</span></div><strong>Built by developers</strong><small>for developers</small></div></div><div className="hero-art"><div className="art-grid" /><img src="/assets/banner-stack.png" alt="A glowing layered developer technology stack" /><div className="floating-label label-one"><span>✦</span> your ideas</div><div className="floating-label label-two">12 tools <span>selected</span></div></div></section><section className="catalog-section" id="technologies"><div className="section-intro"><div><span className="eyebrow">Explore the ecosystem</span><h2>Find your next<br /><span>favorite tool.</span></h2></div><p>From first commit to final deploy, choose tools that make your workflow feel like yours.</p></div><div className="catalog-toolbar"><div className="category-tabs">{categories.map(item => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-box"><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search tools..." /></label></div><div className="catalog-layout"><div className="technology-grid">{loading ? <div className="loading-state"><div className="spinner" /><p>Loading your toolkit...</p></div> : filteredItems.length ? filteredItems.map(tech => <TechCard key={tech.id} tech={tech} selected={stack.some(item => item.id === tech.id)} onAdd={addToStack} />) : <div className="no-results"><span>⌕</span><h3>No tools found</h3><p>Try another search or category.</p></div>}</div><StackPanel stack={stack} onRemove={removeFromStack} onClear={clearStack} /></div></section><section className="about-section" id="about"><div className="about-heading"><span className="eyebrow">A better way to choose</span><h2>Your stack says a lot<br />about how you <em>build.</em></h2><div className="principle-tabs" role="tablist" aria-label="Dev Stack principles">{principles.map((principle, index) => <button key={principle.label} className={activePrinciple === index ? 'active' : ''} onClick={() => setActivePrinciple(index)} role="tab" aria-selected={activePrinciple === index}><span>{principle.number}</span>{principle.label}</button>)}</div></div><div className="about-story"><div className="story-orbit"><span className="orbit-core">{principles[activePrinciple].number}</span><i className="orbit-dot dot-one" /><i className="orbit-dot dot-two" /><i className="orbit-dot dot-three" /></div><p key={activePrinciple} className="story-copy">{principles[activePrinciple].copy}</p><span className="story-caption">A principle worth shipping with <b>↗</b></span></div></section></main><footer id="contact"><div className="footer-main"><div><Logo /><p>A considered collection of tools<br />for the modern maker.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#technologies">Technologies</a><a href="#stack">Your stack</a></div><div><strong>Connect</strong><a href="#contact">GitHub ↗</a><a href="#contact">LinkedIn ↗</a></div><div><strong>About</strong><a href="#about">Our story</a><a href="#contact">Contact</a></div></div></div><div className="footer-bottom"><span>© 2026 Dev Stack. Made for builders.</span><span>Privacy &nbsp;&nbsp; Terms</span></div></footer><ToastContainer position="bottom-right" theme="dark" autoClose={2200} /></>;
}

createRoot(document.getElementById('root')).render(<App />);
