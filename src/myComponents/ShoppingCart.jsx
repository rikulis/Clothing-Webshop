import React, { useState, useEffect } from "react";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function ShoppingCart({ formData }) {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xl"];

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          variant="outline"
          color="black"
          size="md"
          rounded={"none"}
          key={size}
          m={1}
        >
          Shopping Cart
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            {/* Display the form data here */}
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phoneNumber}</p>
            <p>Address: {formData.address}</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ShoppingCart;
