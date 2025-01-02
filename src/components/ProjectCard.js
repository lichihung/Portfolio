import { Heading, HStack, Image, Text, VStack, Card, CardBody, Box} from "@chakra-ui/react";
import React from "react";
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectCard = ({ title, description, imageSrc, url, isGithub, githubLink }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const handleClick = () => {
    console.log(url);
  }
  return (
    <div>
    <Card>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Link href={url} _hover={{ textDecoration: "none" }} target="_blank">
          <Image
          src={imageSrc.substring(1)}
          objectFit="cover"
          borderRadius="lg"
          alt="title"
          transition="0.8s"
          _hover={{
            transform: "scale(1.05)"}}/>
        </Link>
      </Box>
      <CardBody>
        <VStack spacing={3} align="flex-start">
          <Link href={url} _hover={{ textDecoration: "none" }}>
            <Heading size="md">{title}</Heading>
          </Link>
          <Text textColor="#606060">{description}</Text>
          <HStack>
            <a href={url} style={{color:"#BDB2A7", fontWeight: 500}} target="_blank">
              Go to website <ExternalLinkIcon mx='2px' />
            </a>
          </HStack>
          <HStack>
            {isGithub === "true" ?
              <a href={githubLink} style={{color:"#BDB2A7", fontWeight: 500}} target="_blank">
                Github <ExternalLinkIcon mx='2px' />
              </a>
            :<Box><br/></Box>}
          </HStack>
          </VStack>
        </CardBody>
      </Card>
      </div>
  );
};

export default ProjectCard;
