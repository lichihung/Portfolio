import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AskAgent Website",
    description:
      "The website lets real estate agents to showcase their services through videos, creating a digital billboard for clients.",
    getImageSrc: () => require("../assets/AskAgent.jpg"),
    url: "https://www.askagent.info/",
    isGithub: "false",
  },
  {
    title: "Best20Media Website",
    description:
      "A travel agency website that curates unique travel experiences and offers a seamless booking system for tailored trips.",
    getImageSrc: () => require("../assets/Best20Media.jpg"),
    url: "https://businessbroker.wixstudio.io/my-site-2",
    isGithub: "false",
  },
  {
    title: "Little Lemon Website",
    description:
      "A restaurant website featuring a reserve-a-table function was developed using a React app.",
    getImageSrc: () => require("../assets/Logo.jpg"),
    url: "https://little-lemon-demo.netlify.app",
    isGithub: "true",
    githubLink: "https://github.com/lichihung/little-lemon.git",
  },
  {
    title: "UX/UI Practice",
    description:
      "A full plan including persona, journey map, wireframe, and prototype was created using Figma throughout the design process of Little Lemon website.",
    getImageSrc: () => require("../assets/Figma.jpg"),
    url: "https://www.figma.com/proto/b2jrJr4VoHi2hmjKzHooc6/Project?type=design&node-id=23-1484&t=ehjPwknrLkGBRR5Y-1&scaling=min-zoom&page-id=23%3A1188&starting-point-node-id=23%3A1484&mode=design",
    isGithub: "false",
  },
  {
    title: "Little Kitchen Website",
    description:
      "A website showcasing my sister's handmade desserts, featuring a shopping cart and search functionality, built with HTML, CSS, and JavaScript.",
    getImageSrc: () => require("../assets/Little_Kitchen_logo.jpg"),
    url: "https://littlekitchen-e601a.web.app",
    isGithub: "true",
    githubLink: "https://github.com/lichihung/LittleKitchen.git",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#F0F0F0"
      py={16}
      alignItems="flex-start"
      spacing={8}
    >
      <VStack spacing={{ base: 12, md: 16 }} alignItems="flex-start" px={{ base: 8, md: 16 }}>
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))" }}
        gridGap={12}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
            isGithub={project.isGithub}
            githubLink={project.githubLink}
          />
        ))}
      </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
