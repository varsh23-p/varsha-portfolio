import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

import { PROJECTS } from '../data/projects'

const FILTERS = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))]
const hasLink = (url) => url && url !== '#'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = PROJECTS.filter((p) => filter === 'All' || p.category === filter)

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works across data analytics, web and mobile. Tap a category to filter.
        </p>

        <div role="group" aria-label="Filter projects by category" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
          {FILTERS.map((f) => {
            const active = f === filter
            return (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={active}
                whileTap={{ scale: 0.94 }}
                style={{
                  padding: '6px 16px',
                  borderRadius: 999,
                  border: '1px solid ' + (active ? 'transparent' : 'rgba(0,255,255,0.25)'),
                  background: active ? 'linear-gradient(90deg, #06b6d4, #7c3aed)' : 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontSize: 14,
                  cursor: 'pointer',
                }}
              >
                {f}
                <span style={{ opacity: 0.7, marginLeft: 6 }}>
                  {f === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length}
                </span>
              </motion.button>
            )
          })}
        </div>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <AnimatePresence mode="popLayout">
          {visible.map((p, idx) => (
            <motion.div
              key={p.title}
              layout
              className="project-card"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, delay: Math.min(idx, 4) * 0.05 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 2 }}>{p.title}</h3>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8 }}>{p.category}</div>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  {hasLink(p.code) && <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>}
                  {hasLink(p.live) && <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
