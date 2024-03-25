import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile_img from "../assets/profile.jpg";

const greeting = "Hello, I am Li-Chi Hung!";
const bio1 = "A front-end developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    isDarkBackground
    justifyContent="center"
    alignItems="center"
    backgroundColor="#2A384C"
  >

    <VStack spacing={16}>
      <VStack spacing={8}>
        <Avatar src={profile_img} size="1x1" width="170px" height="170px"/>
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
