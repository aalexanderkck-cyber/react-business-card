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
  <li><a href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8DbAiGvMThqN8M8WS2hK7A%3D%3D" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
  </ul></nav></header>
  <main><h1>Aaron Alexander - Software Engineer</h1>
  <p>I'm a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I'm always looking to learn new technologies and improve my skills. A musician with a knack for creative solutions to everyday problems, and wine scholar.</p></main>

      
    </> )
}