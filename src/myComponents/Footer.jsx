import React from "react";
import {
  Container,
  Stack,
  IconButton,
  Text,
  Link,
  HStack,
  Image,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: "12", md: "16" }}
    bg="gray.200"
    maxW="full"
    centerContent
  >
    <Stack spacing={{ base: "4", md: "5" }} align="center" w="full">
      {/* Social Media Icons */}
      <HStack spacing={4}>
        <IconButton
          as={Link}
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
        />
        <IconButton
          as={Link}
          href="#"
          aria-label="GitHub"
          icon={<FaGithub />}
        />
        <IconButton
          as={Link}
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter />}
        />
      </HStack>

      {/* Texts */}
      <Stack spacing={2} align="center">
        <Text fontSize="sm" color="gray.600">
          Follow us on social media for updates
        </Text>
        <Text fontSize="sm" color="gray.600">
          Info | Support | Marketing
        </Text>
      </Stack>

      {/* Copyright and Logos */}
      <Stack spacing={2} align="center">
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} WEARIT, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Stack>
  </Container>
);

export default Footer;
