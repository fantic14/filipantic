import React from 'react'
import site from '../data/site.js'

export default function Contact() {
  return (
    <section className="section pt-12">
      <h2 className="section-title">Contact</h2>
      <div className="card space-y-2 text-neutral-300">
        <div><span className="text-neutral-400">Email:</span> <a className="hover:text-neutral-100" href={`mailto:${site.email}`}>{site.email}</a></div>
        <div><span className="text-neutral-400">Phone:</span> <a className="hover:text-neutral-100" href={`tel:${site.phone.replace(' ', '')}`}>{site.phone}</a></div>
        <div className="flex gap-4 pt-2">
          <a className="btn btn-outline" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-outline" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-outline" href={site.website} target="_blank" rel="noreferrer">Website</a>
        </div>
      </div>
    </section>
  )
}
