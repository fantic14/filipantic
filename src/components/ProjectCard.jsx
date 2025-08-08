import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="card h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-neutral-300 flex-1">{project.description}</p>
      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.links.map((l, i) => (
            <a key={i} className="btn btn-outline text-sm" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}
