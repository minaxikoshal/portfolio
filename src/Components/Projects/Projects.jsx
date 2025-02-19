import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Blogging Website"
          main="A blog website built with Next.js, Node.js, and Express.js, offering seamless content management, dynamic rendering, and efficient server-side processing."
          image="Blog"
        />
        <ProjectCard
          title="Real-time Chat App"
          main="A real-time chat app built with React and Socket.io, featuring JWT authentication, online status, Zustand state management, and TailwindCSS + Daisy UI styling."
          image="Chat"
        />
        <ProjectCard
          title="Agenda"
          main="An event management app built with HTML, CSS, Bootstrap, and PHP, enabling event organizers to create, manage, and track events efficiently."
          image="Agenda"
        />
      </div>
    </div>
  );
};

export default Projects;
