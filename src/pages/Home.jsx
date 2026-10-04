import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { PROJECTS } from '../data/projects'
import photo from '../../public/photo.jpg'
import '../CSS/Home.css'

// Colours taken from the rest of the site: teal + cyan (Contact/Projects), purple (--accent), pink (page glow).
const DOMAINS = [
  { name: 'Data & BI', color: '#00ffe0' },
  { name: 'Web', color: '#00b4ff' },
  { name: 'Mobile', color: '#a78bfa' },
  { name: 'Machine Learning', color: '#ff5ca1' },
]
const colorOf = (d) => DOMAINS.find((x) => x.name === d)?.color
const real = (u) => u && u !== '#'
const cleanTitle = (t) => t.replace(/^\p{Extended_Pictographic}\uFE0F?\s*/u, '')

// Number that counts to its new value when filters change.
function Count({ value }) {
  const [shown, setShown] = useState(value)
  const from = useRef(value)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      from.current = value
      return setShown(value)
    }
    const start = performance.now(), a = from.current
    let raf
    const tick = (now) => {
      const t = Math.min((now - start) / 450, 1)
      setShown(Math.round(a + (value - a) * t))
      if (t < 1) raf = requestAnimationFrame(tick)
      else from.current = value
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value])
  return <>{shown}</>
}

export default function Home() {
  const [domain, setDomain] = useState(null)
  const [tool, setTool] = useState(null)
  const [open, setOpen] = useState(null)

  const byDomain = useMemo(() => PROJECTS.filter((p) => !domain || p.category === domain), [domain])
  const shown = useMemo(() => byDomain.filter((p) => !tool || p.tech.includes(tool)), [byDomain, tool])

  const bars = useMemo(() => {
    const m = {}
    byDomain.forEach((p) =>
      p.tech.forEach((t) => {
        m[t] = m[t] || { tool: t, total: 0, by: {} }
        m[t].total++
        m[t].by[p.category] = (m[t].by[p.category] || 0) + 1
      })
    )
    return Object.values(m).sort((a, b) => b.total - a.total || a.tool.localeCompare(b.tool)).slice(0, 9)
  }, [byDomain])
  const max = Math.max(1, ...bars.map((b) => b.total))
  const toolCount = new Set(shown.flatMap((p) => p.tech)).size
  const dashboards = shown.filter((p) => p.category === 'Data & BI').length

  const pickDomain = (d) => { setDomain(d); setTool(null); setOpen(null) }

  return (
    <div className="rp">
      <header className="rp-head">
        <img src={photo} alt="Varsha Patil" className="rp-photo" />
        <div>
          <h1 className="rp-name">Varsha Patil</h1>
          <p className="rp-sub">
            Data analyst in training. I build Power BI dashboards, small machine learning models and the web apps around them.
          </p>
          <p className="rp-links">
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://github.com/varsh23-p" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/varsha-patil-a84a512aa/" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </header>

      <p className="rp-hint">This page is a report on my work. Pick a domain or click a tool bar and everything below recalculates.</p>

      <div className="rp-slicer" role="group" aria-label="Filter by domain">
        <button className={!domain ? 'on' : ''} aria-pressed={!domain} onClick={() => pickDomain(null)}>All work</button>
        {DOMAINS.map((d) => (
          <button
            key={d.name}
            className={domain === d.name ? 'on' : ''}
            aria-pressed={domain === d.name}
            style={{ '--c': d.color }}
            onClick={() => pickDomain(domain === d.name ? null : d.name)}
          >
            <i style={{ background: d.color }} />{d.name}
          </button>
        ))}
      </div>

      <section className="rp-grid">
        <div className="rp-kpis">
          <div><b><Count value={shown.length} /></b><span>projects shown</span></div>
          <div><b><Count value={toolCount} /></b><span>tools and languages</span></div>
          <div><b><Count value={dashboards} /></b><span>dashboards</span></div>
        </div>

        <div className="rp-chart">
          <h2>Where each tool gets used</h2>
          <p className="rp-note">Bar length is projects. Colour is domain. {tool ? <button className="rp-clear" onClick={() => setTool(null)}>Clear “{tool}”</button> : 'Click a bar to filter.'}</p>
          {bars.map((b) => (
            <button
              key={b.tool}
              className={'rp-bar' + (tool && tool !== b.tool ? ' dim' : '')}
              aria-pressed={tool === b.tool}
              onClick={() => { setTool(tool === b.tool ? null : b.tool); setOpen(null) }}
            >
              <span className="rp-bar-label">{b.tool}</span>
              <span className="rp-bar-track">
                <span className="rp-bar-fill" style={{ width: `${(b.total / max) * 100}%` }}>
                  {DOMAINS.filter((d) => b.by[d.name]).map((d) => (
                    <span key={d.name} style={{ flex: b.by[d.name], background: d.color }} title={`${d.name}: ${b.by[d.name]}`} />
                  ))}
                </span>
              </span>
              <span className="rp-bar-n">{b.total}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="rp-list" aria-live="polite">
        <h2>Projects</h2>
        {shown.length === 0 && <p className="rp-note">Nothing matches that combination. Clear the tool filter to see more.</p>}
        {shown.map((p) => {
          const isOpen = open === p.title
          return (
            <div key={p.title} className="rp-row" style={{ '--c': colorOf(p.category) }}>
              <button className="rp-row-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : p.title)}>
                <span className="rp-row-title">{cleanTitle(p.title)}</span>
                <span className="rp-row-cat">{p.category}</span>
                <span className="rp-row-tech">{p.tech.slice(0, 4).join(', ')}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="rp-row-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="rp-row-inner">
                      <img src={p.ss} alt={`${cleanTitle(p.title)} screenshot`} loading="lazy" />
                      <div>
                        <p>{p.desc}</p>
                        <p className="rp-chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</p>
                        <p className="rp-links">
                          {real(p.code) && <a href={p.code} target="_blank" rel="noreferrer"><Github size={14} /> Code</a>}
                          {real(p.live) && <a href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live</a>}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </section>
    </div>
  )
}
