import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Little Lemon Website",
    description:
      "A restaurant website featuring a reserve-a-table function was developed using a React app.",
    getImageSrc: () => require("../assets/little_lemon_website.jpg"),
  },
  {
    title: "HouseofPresales Website",
    description:
      "A branding website for a real estate client was developed using WIX, and the website has been maintained and optimized since.",
    getImageSrc: () => require("../assets/houseofpresales_website.jpg"),
  },
  {
    title: "UX/UI Practice",
    description:
      "A full plan including persona, journey map, wireframe, and prototype was created using Figma throughout the design process of Little Lemon reserve-a-table web app.",
    getImageSrc: () => require("../assets/figma.jpg"),
  },
  {
    title: "Little Kitchen Website",
    description:
      "The first website I built with HTML, CSS, and JavaScript showcases my sister's handmade desserts and demonstrates the shopping cart and searching feature. ",
    getImageSrc: () => require("../assets/little_kitchen_website.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#F0F0F0"
      p={16}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={12}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
