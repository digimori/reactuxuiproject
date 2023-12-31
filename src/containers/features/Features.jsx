import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus doloremque nulla nihil. In cumque quisquam tempora tempore error nemo labore, quod fugit minima fugiat voluptatibus optio harum voluptas, nostrum pariatur?',
  },
  {
    title: 'Become the Tended active',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus doloremque nulla nihil. In cumque quisquam tempora tempore error nemo labore, quod fugit minima fugiat voluptatibus optio harum voluptas, nostrum pariatur?',
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus doloremque nulla nihil. In cumque quisquam tempora tempore error nemo labore, quod fugit minima fugiat voluptatibus optio harum voluptas, nostrum pariatur?',
  },
  {
    title: 'Really bylaw County',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus doloremque nulla nihil. In cumque quisquam tempora tempore error nemo labore, quod fugit minima fugiat voluptatibus optio harum voluptas, nostrum pariatur?',
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}



export default Features