import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App(){
  return (
    <div className="container">
      <Header />
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
        <div className="grid">
          <About />
          <Skills />
          <div className="card">
            <h3>Top Highlights</h3>
            <p>React & TypeScript • Node.js • D3.js • Azure • Performance, Security</p>
            <div style={{marginTop:12}}>
              <a className="cta" href="#contact">Contact Me</a>
            </div>
          </div>
        </div>

        <Projects />
        <Contact />
      </motion.div>
    </div>
  )
}
