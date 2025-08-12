import React from 'react';
const projects = [
  { title: 'Real-Time Operations Dashboard', desc: 'Built an enterprise-grade real-time dashboard for monitoring device performance with live streams and alerts.', tech: 'React, Node.js, WebSockets, D3.js, PostgreSQL', link:'#' },
  { title: 'Case Management System', desc: 'Full-stack case management platform with role-based access control and secure workflows.', tech: 'React, Redux, Node.js, Azure SQL', link:'#' },
  { title: 'Dynamic Data Visualization Tool', desc: 'Responsive tool for exploring and filtering large datasets with interactive charts.', tech: 'React, TypeScript, Chart.js, REST API', link:'#' }
];
export default function Projects(){
  return (
    <section style={{marginTop:24}}>
      <h2 style={{color:'#dbeafe'}}>Projects</h2>
      <div className="projects">
        {projects.map(p=> (
          <div className="project" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <small style={{color:'#9fb3d6'}}>Tech: {p.tech}</small>
            <div style={{marginTop:10}}><a href={p.link} className="cta">View</a></div>
          </div>
        ))}
      </div>
    </section>
  )
}
