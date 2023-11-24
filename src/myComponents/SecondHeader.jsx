import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

const SecondHeader = () => {
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
          >
            Men
          </Button>
          <Button
            variant="outline"
            color="black"
            size="md"
            mr={2}
            rounded={"none"}
          >
            Women
          </Button>
          <Button variant="outline" color="black" size="md" rounded={"none"}>
            Children
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SecondHeader;
