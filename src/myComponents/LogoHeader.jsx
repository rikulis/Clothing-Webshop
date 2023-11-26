import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

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
          <Button
            variant="outline"
            color="black"
            size="md"
            mr={2}
            rounded={"none"}
            _focus={{ outline: "none" }}
          >
            Account
          </Button>
          <Button
            variant="outline"
            color="black"
            size="md"
            mr={2}
            rounded={"none"}
            _focus={{ outline: "none" }}
          >
            Shopping Cart
          </Button>
          <Button variant="outline" color="black" size="md" rounded={"none"}>
            Favorites
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default LogoHeader;
