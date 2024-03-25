import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: lichihun@umich.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/lichihung/Portfolio.git",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/li-chi-hung-b79615152",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      if (!headerElement) {
          return;
      }

      if (prevScrollPos > currScrollPos) {
        headerElement.style.transform = "translateY(0)";
      }
      else {
        headerElement.style.transform = "translateY(-200px)";
      };

      prevScrollPos = currScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#2A384C"
      ref={headerRef}
      zIndex="1000"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 6, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={{ base: 4, md: 8 }}>
              {socials.map(({ icon, url }) => (
                <a
                  href={url}
                  key={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} size="2x" key={url}/>
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={{ base: 4, md: 8 }}>
              {/* Add links to Projects and Contact me section */}
              <a
                href="#projects"
                onClick={handleClick("projects")}
                className="card-title">
              Projects</a>
              <a
                href="#contactme"
                onClick={handleClick("contactme")}
                className="card-title">
              Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
