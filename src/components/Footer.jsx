import React from 'react'
import site from '../data/site.js'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-800">
      <div className="container-max py-6 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-2">
        <div>© <span>{new Date().getFullYear()}</span> {site.name}. All rights reserved.</div>
        <div className="flex gap-4">
          <a className="hover:text-neutral-100" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-neutral-100" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-neutral-100" href={site.website} target="_blank" rel="noreferrer">Website</a>
        </div>
      </div>
    </footer>
  )
}
