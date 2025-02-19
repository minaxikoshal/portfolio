import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import Chat from "../../assets/chat-app.png";
import Blog from "../../assets/Blog.png";
import Agenda from "../../assets/agenda.jpeg";
const ProjectCard = ({ title, main, image }) => {
  console.log("image: " + image);
  const imageMap = {
    Chat: Chat,
    Agenda: Agenda,
    Blog: Blog,
  };
  const selectedImage = imageMap[image] || bannerImg;
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={selectedImage} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => {
            alert("Only Chat-App demo is Live!");
            setTimeout(() => {
              window.location.href = "https://chat-app-zkap.onrender.com/login";
            }, 3000); // 3 seconds delay
          }}
        >
          Demo
        </button>
        <button
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() =>
            window.open("https://github.com/minaxikoshal", "_blank")
          }
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
