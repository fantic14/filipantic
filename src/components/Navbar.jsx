import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import site from '../data/site.js'

const linkClass = ({ isActive }) =>
  'px-3 py-2 rounded-md hover:bg-neutral-800 ' + (isActive ? 'bg-neutral-800' : '')

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="container-max flex items-center justify-between py-3">
        <Link to="/" className="font-bold tracking-tight text-lg">
          {site.name.split(' ')[0]}
          <span className="text-teal-400">.</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
