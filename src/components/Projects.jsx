import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import chatapp from "../assets/projects/chatapp.png";
import chatappGIF from "../assets/projects/chatapp.gif";
import rockpaperscissors from "../assets/projects/rockpaperscissors.png";
import agecalculator from "../assets/projects/agecalculator.png";
import cardmaker from "../assets/projects/cardmaker.png";
import newsletter from "../assets/projects/newsletter.png";
import advicegenerator from "../assets/projects/advicegenerator.png";
import todolist from "../assets/projects/todolist.png";
import moviezhub from "../assets/projects/moviezhub.png";
import rudrasignages from "../assets/projects/rudrasignages.png";

const ProjectCard = ({ project }) => {
  return (
    <div id="projects" className="flex flex-col bg-base-200 rounded-lg p-4 shadow-md">
      <div className="relative group w-full h-48 mb-2 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        {project.gif && (
          <img
            src={project.gif}
            alt={`${project.title} GIF`}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {project.live && (
            <a href={project.live} className="btn btn-primary btn-sm mr-2">
              <FaExternalLinkAlt className="mr-1" /> Live
            </a>
          )}
          {project.github && (
            <a href={project.github} className="btn btn-sm">
              <FaGithub className="mr-1" /> GitHub
            </a>
          )}
        </div>
      </div>
      <p className="font-medium">{project.title}</p>
      <div className="flex flex-wrap gap-1 mt-3">
        {(project.technologies ?? []).map((tech, index) => (
          <div key={index} className="badge badge-neutral">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "ChatApp - MERN",
      image: chatapp,
      gif: chatappGIF,
      live: "https://chatapp.adaptable.app",
      github: "https://github.com/rohanvron/ChatApp-MERN",
      technologies: ["MERN", "Socket.io", "tailwindcss","API"],
    },
    {
      title: "Rock Paper Scissors",
      image: rockpaperscissors,
      live: "https://rohanvron.github.io/Rock-Paper-Scissors/",
      github: "https://github.com/rohanvron/Rock-Paper-Scissors",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Age Calculator",
      image: agecalculator,
      live: "https://rohanvron.github.io/Age-Calculator-App/",
      github: "https://github.com/rohanvron/Age-Calculator-App",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Card Maker",
      image: cardmaker,
      live: "https://rohanvron.github.io/CardMaker/",
      github: "https://github.com/rohanvron/CardMaker",
      technologies: ["React", "tailwindcss", "JavaScript", "spring"],
    },
    {
      title: "Newsletter Signup",
      image: newsletter,
      live: "https://rohanvron.github.io/Newsletter-sign-up/",
      github: "https://github.com/rohanvron/Newsletter-sign-up",
      technologies: ["React", "tailwindcss", "JavaScript"],
    },
    {
      title: "Advice Generator",
      image: advicegenerator,
      live: "https://rohanvron.github.io/Advice-Generator-App/",
      github: "https://github.com/rohanvron/Advice-Generator-App",
      technologies: ["react", "api", "tailwindcss", "Jsx"],
    },
    {
      title: "To Do List",
      image: todolist,
      live: "https://rohanvron.github.io/To-Do-List/",
      github: "https://github.com/rohanvron/To-Do-List",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "MoviezHub",
      image: moviezhub,
      github: "https://github.com/rohanvron/MoviezHub---Online-Movie-Ticket-Booking-App",
      technologies: ["Java", "Android-Studio", "Firebase"],
    },
    { 
        title: "Rudra Signages", 
        image: rudrasignages, 
        live: "https://rudrasignages.co.in/",
        technologies: ["Wordpress", "Elementor", "Photoshop"],
    },
  ];

  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full p-4">
          <h1 className="text-2xl mb-8 font-semibold">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
