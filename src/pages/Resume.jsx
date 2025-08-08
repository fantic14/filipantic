import React from 'react'

export default function Resume() {
  return (
    <section className="section pt-12">
      <h2 className="section-title">Resume</h2>
      <div className="card">
        <p className="mb-4 text-neutral-300">Open or download my PDF resume below.</p>
        <div className="aspect-[1/1.414] w-full max-w-3xl mx-auto">
          <iframe title="Filip Antic Resume" src="/Filip_Antic_resume.pdf" className="w-full h-[80vh] rounded-lg border border-neutral-800"></iframe>
        </div>
      </div>
    </section>
  )
}
