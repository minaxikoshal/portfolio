import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiAmazonaws, SiElasticsearch, SiExpress } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} title="HTML5" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} title="CSS" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} title="React Js" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} title="Javascript" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} title="Figma" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} title="MongoDB" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#FF4438" size={50} title="Express" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiElasticsearch color="FF4438" size={50} title="ElasticSearch" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAmazonaws color="FF4438" size={50} title="AmazonAWS" />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            {/* <FaGoogle color="#4285F4" size={50} /> */}

            <span className="text-white">
              <div className="flex items-center gap-2">
                <a
                  href="https://meetribbon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background with gradient */}
                    <defs>
                      <linearGradient
                        id="bgGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#F8F8F8" />
                        <stop offset="100%" stopColor="#E8E8E8" />
                      </linearGradient>
                    </defs>
                    <rect
                      width="200"
                      height="200"
                      rx="40"
                      ry="40"
                      fill="url(#bgGradient)"
                    />
                    {/* Letter R */}
                    <text
                      x="50%"
                      y="70%"
                      fontSize="140"
                      fontWeight="bold"
                      textAnchor="middle"
                      fill="purple"
                      fontFamily="Georgia, serif"
                    >
                      R
                    </text>
                  </svg>
                </a>
                <h2 className="text-lg font-semibold leading-tight">
                  Full-Stack Developer, ADS
                </h2>
              </div>

              <p className="text-sm leading-tight font-thin">
                Jan 2022 - Present
              </p>
              <ul className="text-sm p-2" style={{ listStyleType: "disc" }}>
                <li>
                  Developed web applications using HTML, CSS, JavaScript,
                  React.js, and MongoDB.
                </li>
                <li>
                  Integrated third-party APIs like Stripe, Google Analytics, and
                  Location APIs.
                </li>
                <li>Built REST and GraphQL APIs for seamless data exchange.</li>
                <li>
                  Optimized search with Elastic Search and managed full-stack
                  development using Node.js and Java.
                </li>
                <li>
                  Deployed scalable applications on AWS and used Git/GitHub for
                  version control.
                </li>
                <li>
                  Analyzed user behavior with Google Analytics to enhance
                  product performance.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
