import React from "react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Favorites = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" color="black" size="md" rounded={"none"}>
          Favorites
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Favorites tab is being updated.</PopoverHeader>
        <PopoverBody>Come back tomorrow or use the shopping cart.</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Favorites;
