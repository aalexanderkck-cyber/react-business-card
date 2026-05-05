import headshot from './assets/headshot.jpeg'


export default function Header()  {
    return ( <>
      <header className='header-style'>
        <img src={headshot} className='headshot' alt="Aaron Alexander" />
<nav><ul><li>
  Home</li>
  <li>Portfolio</li>
  <li>Resume</li>
  <li>Contact Me</li>
  </ul></nav>
<h1>Aaron Alexander - Software Engineer</h1>
  <p>I'm a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I'm always looking to learn new technologies and improve my skills.</p>
      </header>
    </> )
}