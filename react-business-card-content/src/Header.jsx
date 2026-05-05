import headshot from './assets/headshot.jpeg'


export default function Header()  {
    return ( <>
      <header className='header-styles'>
        <img src={headshot} className='headshot' alt="Aaron Alexander" />
<nav><ul className='list-style'><li>
  Home</li>
  <li>Portfolio</li>
  <li>Resume</li>
  <li>Contact Me</li>
  </ul></nav></header>
  <main><h1>Aaron Alexander - Software Engineer</h1>
  <p>I'm a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I'm always looking to learn new technologies and improve my skills. A musician with a knack for creative solutions to everyday problems, and wine scholar.</p></main>

      
    </> )
}