import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";

const Favorites = () => {
  return (
    <Stack
      direction="column"
      align="center"
      spacing={2}
      justify={"center"}
      p={3}
    >
      <Text fontSize="lg" fontWeight="bold">
        Sizes:
      </Text>
      <Stack direction="row" spacing={2}>
        <Button size="sm" rounded="full">
          XS
        </Button>
        <Button size="sm" rounded="full">
          S
        </Button>
        <Button size="sm" rounded="full">
          M
        </Button>
        <Button size="sm" rounded="full">
          L
        </Button>
        <Button size="sm" rounded="full">
          XL
        </Button>
        <Button size="sm" rounded="full">
          XXL
        </Button>
      </Stack>
    </Stack>
  );
};

export default Favorites;
