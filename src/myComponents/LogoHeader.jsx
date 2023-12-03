import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Account from "./Account";
import Favorites from "./Favorites";

const LogoHeader = () => {
  return (
    <Box className="second-header" p={4}>
      <Flex align="center" justify="space-between">
        <Box>
          <Box
            as="h1"
            fontSize="2xl"
            fontWeight="bold"
            color="white"
            bgGradient="linear(to-r, pink.500, purple.500)"
            bgClip="text"
            _focus={{ outline: "none" }}
          >
            WEARIT
          </Box>
        </Box>
        <Box className="buttons-container">
          <Account />
          <Favorites />
        </Box>
      </Flex>
    </Box>
  );
};

export default LogoHeader;
