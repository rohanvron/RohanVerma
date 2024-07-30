import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-2xl mb-4 font-semibold">About Me</h1>
          <p>I am a passionate Web developer. 
              I graduated from VPM's R. Z. Shah College of Arts, 
              Science & Commerce, majoring in Computer Science. 
              I continuously enhance my skills in designing and developing 
              applications and websites using various programming languages 
              and technologies such as HTML, CSS, JavaScript, ReactJS, Node.js,
               and more. With a portfolio of diverse projects, 
               I have demonstrated my ability to deliver innovative and 
               effective solutions. Explore my work on GitHub and connect 
               with me on LinkedIn to learn more about my journey and expertise.</p>
        </div>

        <div className="w-80 ml-4 lg:w-60 p-4">
          <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzUwcXBjZ3Fqcnl5YjRwdGd3bTAzMDlkdnB4b2Vmc2h4NGVyZjd6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif" alt="gif" className="rounded-full w-full" />
        </div>
      </div>
    </div>
  )
}

export default About
