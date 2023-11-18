import React from "react";
import { Box, Image, Flex, Button } from "@chakra-ui/react";

import logo from "/Logo.png"; // Replace 'Logo.png' with the path to your logo file

const SecondHeader = () => {
  return (
    <Box className="second-header">
      <Flex align="center" justify="space-between" px={4} py={2}>
        <Box className="logo-container">
          <Image src={logo} alt="Logo" className="logo" />
        </Box>
        <Box className="buttons-container">
          <Button variant="outline" color="black" size="md" mr={2}>
            Men
          </Button>
          <Button variant="outline" color="black" size="md" mr={2}>
            Women
          </Button>
          <Button variant="outline" color="black" size="md">
            Children
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SecondHeader;
