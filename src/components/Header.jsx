import React from 'react';

export default function Header(){
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">MJ</div>
        <div>
          <div className="title">Madhura Jayaram</div>
          <div className="subtitle">Senior Full Stack / UI Engineer</div>
        </div>
      </div>
      <div>
        <a href="#projects" className="cta" style={{marginRight:12}}>Projects</a>
        <a href="mailto:madhura@example.com" className="cta">Hire Me</a>
      </div>
    </header>
  )
}
