import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Center,
  Divider,
  Heading,
  Button,
  Badge,
  VStack,
  Box,
 } from "@chakra-ui/react";

const skills0 = ["WIX", "CMS", "JavaScript", "API", "SEO", "Design"];
const skills1 = ["HTML", "CSS", "JavaScript", "React", "UX", "UI", "Version control"];
const skills2 = ["Python", "Perl", "TCL"];
const skills3 = ["Linux operating system", "EDA tools"];
const resume_url = "https://drive.google.com/file/d/1ShdoiZReO95s2MvK91pS8kKwzmIc0zxS/view?usp=sharing";
const portfolio_url = "https://drive.google.com/file/d/1jzBLke6vM6s9gLNG2IKN7PgR-uTqjv77/view?usp=sharing";

const experiences = [
  {
    title: "Web Designer and Web Developer",
    year: "2024",
    company: "Pinpoint Listings Marketing Group"
  },
  {
    title: "Meta Front-End Developer Certificate",
    year: "2024",
    company: "Coursera",
  },
  {
    title: "CAD Engineer",
    year: "2023",
    company: "Macronix",
  },
  {
    title: "OPC Engineer",
    year: "2020",
    company: "TSMC",
  },
  {
    title: "Master of Electrical and Computer Engineering",
    year: "2019",
    company: "University of Michigan",
  },
];

function AboutMeSection(){
    return(
        <>
        <FullScreenSection
        backgroundColor="white"
        alignItems="flex-start"
        py={16}
        spacing={8}
        >
          <Heading as="h1" id="about-section" px={{ base: 8, md: 16 }}>
          About Me
          </Heading>
        <Box className="about-section">
            <div className="about-box1">
              <p className="about-year lead">{experiences[0].year}</p>
              <p className="about-title card-title">{experiences[0].title}</p>
              <p className="about-company lead">{experiences[0].company}</p>
              <p className="about-skill">
                {skills0.map((skill) => (
                  <Badge key={skill} colorScheme='facebook' ml='1'>{skill}</Badge>
                ))}
              </p>
            </div>
            <div className="about-box2">
              <p className="about-year lead">{experiences[1].year}</p>
              <p className="about-title card-title">{experiences[1].title}</p>
              <p className="about-company lead">{experiences[1].company}</p>
              <p className="about-skill">
                {skills1.map((skill)=>(
                  <Badge key={skill} colorScheme='facebook' ml='1'>{skill}</Badge>
                ))}
              </p>
            </div>
            <div className="about-box3">
              <p className="about-year lead">{experiences[2].year}</p>
              <p className="about-title card-title">{experiences[2].title}</p>
              <p className="about-company lead">{experiences[2].company}</p>
              <p className="about-skill">
                {skills2.map((skill)=>(
                  <Badge key={skill} colorScheme='facebook' ml='1'>{skill}</Badge>
                ))}
              </p>
            </div>
            <div className="about-box4">
              <p className="about-year lead">{experiences[3].year}</p>
              <p className="about-title card-title">{experiences[3].title}</p>
              <p className="about-company lead">{experiences[3].company}</p>
              <p className="about-skill">
                {skills3.map((skill)=>(
                  <Badge key={skill} colorScheme='facebook' ml='1'>{skill}</Badge>
                ))}
              </p>
            </div>
            <div className="about-box5">
              <p className="about-year lead">{experiences[4].year}</p>
              <p className="about-title card-title">{experiences[4].title}</p>
              <p className="about-company lead">{experiences[4].company}</p>
            </div>
            <Center height="auto" className="divide-line">
              <Divider orientation='vertical' borderWidth="3px" borderStyle="solid" borderColor="#A0B2C2"/>
            </Center>
            <div className="resume_link">
              <button className="btn highlight"><a href={resume_url} target="_blank">Resume</a></button>
              <button className="btn highlight"><a href={portfolio_url} target="_blank">Portfolio</a></button>
            </div>
        </Box>
        </FullScreenSection>
        </>
    )
};

export default AboutMeSection;