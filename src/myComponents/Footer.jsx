import React from "react";
import {
  Container,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
} from "@chakra-ui/react";
import "../componentStyles/Footer.css";

const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: "12", md: "16" }}
    maxW="full"
    centerContent
  >
    <Divider></Divider>
    <HStack
      spacing={{ base: "4", md: "5" }}
      align="center"
      w="full"
      justify={"space-around"}
    >
      <VStack align="start">
        <Text fontWeight="bold" fontSize="lg">
          HELP
        </Text>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Your Account
        </Link>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          FAQ
        </Link>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Contact Us
        </Link>
      </VStack>
      <VStack align="start">
        <Text fontWeight="bold" fontSize="lg">
          ABOUT
        </Text>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Blog
        </Link>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Our Story
        </Link>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Sitemap
        </Link>
      </VStack>
      <VStack align="start">
        <Text fontWeight="bold" fontSize="lg">
          PRODUCT
        </Text>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Return Policy
        </Link>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Product Care
        </Link>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Distributors
        </Link>
      </VStack>
      <VStack align="start">
        <Text fontWeight="bold" fontSize="lg">
          SOCIAL
        </Text>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Instagram
        </Link>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Facebook
        </Link>
        <Link className="footer-link" _hover={{ textDecor: "underline white" }}>
          Twitter
        </Link>
      </VStack>
    </HStack>

    {/* Copyright Section */}
    <VStack align="center" mt={4} py={10}>
      <Text fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} WEARIT. All rights reserved.
      </Text>
    </VStack>
  </Container>
);

export default Footer;
