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
    image: "https://tse3.mm.bing.net/th?id=OIP.eU_RawpVBwjXdCm_rZZjrAHaE8&pid=Api&P=0&h=180",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aannaannyaaa/E-commerce",
    previewUrl: "https://e-commerce-five-lac-42.vercel.app/",
  },
  {
    id: 2,
    title: "Product Service SpringBoot",
    description: "Spring Boot Application for Fakestore Product Service",
    image: "https://tse4.mm.bing.net/th?id=OIP.Z2Cagzfsbs5dAC6M2-IpsAHaEV&pid=Api&P=0&h=180", alt: "Product Service",
    tag: ["All"],
    gitUrl: "https://github.com/aannaannyaaa/ProductService",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "TicTacTe Game",
    description: "TicTacToe game built Spring Boot",
    image: "https://tse1.explicit.bing.net/th?id=OIP.0KDgqNvZivf8A3r0ByBEvgHaEK&pid=Api&P=0&h=180", alt: "TicTacToe Game",
    tag: ["All"],
    gitUrl: "https://github.com/aannaannyaaa/TicTacToe",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Quiz Game",
    description: "Quiz game built using Javascript",
    image: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKC1PLKW9mhVwalI29HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzc4YzNlMjkwYjczOGM5ZjczODQyYzc3Y2U0ZjZkMmMyBGdwb3MDMTcEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dquiz%2Bgame%2Bimage%26ei%3DUTF-8%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D17&w=1600&h=2560&imgurl=image.winudf.com%2Fv2%2Fimage%2FY29tLmdlbmVyYWwua25vd2xlZGdlLnF1aXouZ2FtZTFfc2NyZWVuXzRfMTUyODI3NzMxMF8wODA%2Fscreen-4.jpg%3Ffakeurl%3D1%26type%3D.jpg&rurl=https%3A%2F%2Fapkpure.com%2Fgeneral-knowledge-quiz-game%2Fcom.general.knowledge.quiz.game1&size=302.2KB&p=quiz+game+image&oid=78c3e290b738c9f73842c77ce4f6d2c2&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=General+Knowledge+Quiz+Game+APK+for+Android+Download&b=0&ni=100&no=17&ts=&tab=organic&sigr=QEhMEC5rBrVA&sigb=xTJ4W9hgSHPw&sigi=RrMwvZ9y8Gy0&sigt=_s7MyvXnsQqb&.crumb=ajYdqBpVlOG&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN885G0", alt: "Quiz Game",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aannaannyaaa/Quiz-Game",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio",
    description: "Portfolio website built using React",
    image: "https://tse1.mm.bing.net/th?id=OIP.iE9vDw5D2a-JCAC5WpIxKwHaFj&pid=Api&P=0&h=180g", alt: "React Portfolio",
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
