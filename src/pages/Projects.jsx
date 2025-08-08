import React from 'react'
import site from '../data/site.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  return (
    <section className="section pt-12">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {site.projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}
