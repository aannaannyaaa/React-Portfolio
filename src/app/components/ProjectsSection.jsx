"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E Commerce Website",
    description: "E-commerce website built using HTML, CSS, and JavaScript",
    image: "public/images/projects/Image1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aannaannyaaa/E-commerce",
    previewUrl: "https://e-commerce-five-lac-42.vercel.app/",
  },
  {
    id: 2,
    title: "Product Service SpringBoot",
    description: "Spring Boot Application for Fakestore Product Service",
    image: "", alt: "Product Service",
    tag: ["All"],
    gitUrl: "https://github.com/aannaannyaaa/ProductService",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "TicTacTe Game",
    description: "TicTacToe game built Spring Boot",
    image: "", alt: "TicTacToe Game",
    tag: ["All"],
    gitUrl: "https://github.com/aannaannyaaa/TicTacToe",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Quiz Game",
    description: "Quiz game built using Javascript",
    image: "", alt: "Quiz Game",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aannaannyaaa/Quiz-Game",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio",
    description: "Portfolio website built using React",
    image: "public/images/projects/image2.png", alt: "React Portfolio",
    tag: ["All"],
    gitUrl: "https://github.com/aannaannyaaa/React-Portfolio",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;