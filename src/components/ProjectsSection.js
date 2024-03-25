import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Little Lemon Website",
    description:
      "A restaurant website featuring a reserve-a-table function was developed using a React app.",
    getImageSrc: () => require("../assets/restauranfood.jpg"),
    url: "https://little-lemon-demo.netlify.app",
    isGithub: "true",
    githubLink: "https://github.com/lichihung/little-lemon.git",
  },
  {
    title: "HouseofPresales Website",
    description:
      "A branding website for a real estate client was developed using WIX, and the website has been maintained and optimized since.",
    getImageSrc: () => require("../assets/houseofpresales_website.jpg"),
    url: "https://www.wix.com/website-template/view/html/3344",
    isGithub: "false",
  },
  {
    title: "UX/UI Practice",
    description:
      "A full plan including persona, journey map, wireframe, and prototype was created using Figma throughout the design process of Little Lemon reserve-a-table web app.",
    getImageSrc: () => require("../assets/Logo.jpg"),
    url: "https://www.figma.com/file/b2jrJr4VoHi2hmjKzHooc6/Project?type=design&node-id=23%3A1188&mode=design&t=RHc2r6MlfwNmHVQy-1",
    isGithub: "false",
  },
  {
    title: "Little Kitchen Website",
    description:
      "The first website I built with HTML, CSS, and JavaScript showcases my sister's handmade desserts and demonstrates the shopping cart and searching feature. ",
    getImageSrc: () => require("../assets/little_kitchen_website.jpg"),
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
        gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(2,minmax(0,1fr))" }}
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
