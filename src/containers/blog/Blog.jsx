import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = ( imgUrl ) => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and OpenAI is the future. Let us explore together!" />

        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and OpenAI is the future. Let us explore together!" />
        <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and OpenAI is the future. Let us explore together!" />
        <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and OpenAI is the future. Let us explore together!" />
        <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and OpenAI is the future. Let us explore together!" />

        </div>
      </div>
    </div>
  )
}

export default Blog