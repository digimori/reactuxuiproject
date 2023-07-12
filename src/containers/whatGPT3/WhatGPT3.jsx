import React from 'react';
import './whatgpt3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus distinctio nisi error eum, nihil optio explicabo unde nemo sint accusantium inventore, accusamus voluptates fugit repudiandae molestias ex corrupti vero nulla." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus distinctio nisi error eum, nihil optio explicabo unde nemo sint accusantium inventore, accusamus voluptates fugit repudiandae molestias ex corrupti vero nulla." />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus distinctio nisi error eum, nihil optio explicabo unde nemo sint accusantium inventore, accusamus voluptates fugit repudiandae molestias ex corrupti vero nulla." />
        <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus distinctio nisi error eum, nihil optio explicabo unde nemo sint accusantium inventore, accusamus voluptates fugit repudiandae molestias ex corrupti vero nulla." />
      </div>
    </div>
  )
}


export default WhatGPT3