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

const skills0 = ["HTML", "CSS", "JavaScript", "React", "Version control", "UX", "UI"];
const skills1 = ["Python", "Perl", "TCL"];
const skills2 = ["Linux operating system", "EDA tools"];
const resume_url = "https://docs.google.com/document/d/18Ayu_2dnRL1iy2oi4hfqhUxAKW8opgurpfILwFmuKvs/edit?usp=sharing";

const experiences = [
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
        p={24}
        alignItems="flex-start"
        spacing={8}
        >
          <Heading as="h1" id="about-section">
          About Me
          </Heading>
        <section className="about-section">
            <div className="about-box1">
              <p className="about-year lead">{experiences[0].year}</p>
              <p className="about-title card-title">{experiences[0].title}</p>
              <p className="about-company lead">{experiences[0].company}</p>
              <p className="about-skill">
                {skills0.map((skill)=>(
                  <Badge colorScheme='facebook' ml='1'>{skill}</Badge>
                ))}
              </p>
            </div>
            <div className="about-box2">
              <p className="about-year lead">{experiences[1].year}</p>
              <p className="about-title card-title">{experiences[1].title}</p>
              <p className="about-company lead">{experiences[1].company}</p>
              <p className="about-skill">
                {skills1.map((skill)=>(
                  <Badge colorScheme='facebook' ml='1'>{skill}</Badge>
                ))}
              </p>
            </div>
            <div className="about-box3">
              <p className="about-year lead">{experiences[2].year}</p>
              <p className="about-title card-title">{experiences[2].title}</p>
              <p className="about-company lead">{experiences[2].company}</p>
              <p className="about-skill">
                {skills2.map((skill)=>(
                  <Badge colorScheme='facebook' ml='1'>{skill}</Badge>
                ))}
              </p>
            </div>
            <div className="about-box4">
              <p className="about-year lead">{experiences[3].year}</p>
              <p className="about-title card-title">{experiences[3].title}</p>
              <p className="about-company lead">{experiences[3].company}</p>
            </div>
            <Center height='650px' className="divide-line">
              <Divider orientation='vertical' borderWidth="3px" borderStyle="solid" borderColor="#A0B2C2"/>
            </Center>
            <div className="resume_link">
              <button className="btn highlight"><a href={resume_url}>Resume</a></button>
            </div>
        </section>
        </FullScreenSection>
        </>
    )
};

export default AboutMeSection;