import { Heading, HStack, Image, Text, VStack, Card, CardBody} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
    <Card>
      <Image src={imageSrc.substring(1)} objectFit="cover" borderRadius="lg" alt="title" />
      <CardBody>
        <VStack spacing={3} align="flex-start">
          <Heading size="md">{title}</Heading>
          <Text textColor="#606060">{description}</Text>
          <HStack>
            <Text fontSize="sm">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
          </VStack>
        </CardBody>
      </Card>
      </div>
  );
};

export default ProjectCard;
