// Emmet equivelent = rafce  - Needs ES7 React snippets installed

import React from 'react'
import './App.css';
// This is a way to import everything from the index.js compiled components
import { Article, Brand, Cta, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App