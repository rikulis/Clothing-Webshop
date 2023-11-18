import React from "react";
import { Box, Flex, Text, Image, Link, VStack, HStack } from "@chakra-ui/react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const Footer = () => {
  return (
    <Box className="footer" py={8} px={4} bg="gray.200">
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify="space-between"
      >
        <VStack
          spacing={2}
          align={["center", "center", "flex-start"]}
          mb={[4, 4, 0]}
        >
          <Text fontSize="2xl" fontWeight="bold">
            WEARIT
          </Text>
          <Link href="#" textDecoration="underline">
            Pre-Sale FAQS
          </Link>
          <Link href="#" textDecoration="underline">
            About Us
          </Link>
          <Link href="#" textDecoration="underline">
            Support
          </Link>
          <Link href="#" textDecoration="underline">
            Resources
          </Link>
        </VStack>
        <HStack spacing={4}>
          <Image src={reactLogo} alt="React Logo" boxSize="30px" />
          <Image src={viteLogo} alt="Vite Logo" boxSize="30px" />
          {/* Add more logos as needed */}
        </HStack>
        <VStack spacing={1} align="center">
          <Text fontSize="sm">Copyright: Riku Remes</Text>
          <Text fontSize="sm">Build with:</Text>
          <HStack spacing={2}>
            <Link href="https://react.dev" isExternal>
              <Image src={reactLogo} alt="React Logo" boxSize="20px" />
            </Link>
            <Link href="https://vite.dev" isExternal>
              <Image src={viteLogo} alt="Vite Logo" boxSize="20px" />
            </Link>
            {/* Add more logos as needed */}
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
