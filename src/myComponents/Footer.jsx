import React from "react";
import { Container, HStack, VStack, Text, Link } from "@chakra-ui/react";
import "../componentStyles/Footer.css";

const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: "12", md: "16" }}
    maxW="full"
    centerContent
  >
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
        <Link className="footer-link">Your Account</Link>
        <Link className="footer-link">FAQ</Link>
        <Link className="footer-link">Contact Us</Link>
      </VStack>
      <VStack align="start">
        <Text fontWeight="bold" fontSize="lg">
          ABOUT
        </Text>
        <Link className="footer-link">Blog</Link>
        <Link className="footer-link">Our Story</Link>
        <Link className="footer-link">Sitemap</Link>
      </VStack>
      <VStack align="start">
        <Text fontWeight="bold" fontSize="lg">
          PRODUCT
        </Text>
        <Link className="footer-link">Return Policy</Link>
        <Link className="footer-link">Product Care</Link>
        <Link className="footer-link">Distributors</Link>
      </VStack>
      <VStack align="start">
        <Text fontWeight="bold" fontSize="lg">
          SOCIAL
        </Text>
        <Link className="footer-link">Instagram</Link>
        <Link className="footer-link">Facebook</Link>
        <Link className="footer-link">Twitter</Link>
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
