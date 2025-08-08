import React from 'react'
import site from '../data/site.js'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="section pt-20">
        <div className="flex flex-col items-start gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {site.name}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-neutral-300">{site.role}</p>
          </div>
          <p className="max-w-3xl text-neutral-200 leading-relaxed">
            {site.about}
          </p>
          <div className="flex gap-3">
            <a className="btn btn-primary" href="/Filip_Antic_resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            <Link className="btn btn-outline" to="/projects">View Projects</Link>
            <Link className="btn btn-outline" to="/contact">Contact</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {site.skills.map((s, i) => (
            <span key={i} className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm">{s}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {site.education.map((edu, i) => (
            <div key={i} className="card">
              <div className="font-semibold">{edu.title}</div>
              <div className="text-neutral-300">{edu.school}</div>
              <div className="text-neutral-400 text-sm">{edu.period}{edu.gpa ? ` · GPA ${edu.gpa}` : ''}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
