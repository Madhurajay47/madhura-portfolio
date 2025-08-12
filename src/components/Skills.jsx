import React from 'react';
const skills = [
  'React.js', 'TypeScript', 'Node.js', 'D3.js', 'Chart.js',
  'HTML5', 'CSS3', 'Performance Profiling', 'XSS Prevention', 'Azure'
];
export default function Skills(){
  return (
    <div className="card">
      <h3>Skills</h3>
      <div className="skills">
        {skills.map(s=> <div className="chip" key={s}>{s}</div>)}
      </div>
    </div>
  )
}
