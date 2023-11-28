import React, { useState } from "react";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useCart } from "./CartContext";

function ShoppingCart({ formData }) {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = useCart();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["md"];

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
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            <Box mb={4}>
              <Text fontSize="20px" fontWeight="bold">
                Account
              </Text>
              <Text>Name: {formData.name}</Text>
              <Text>Email: {formData.email}</Text>
              <Text>Phone Number: {formData.phoneNumber}</Text>
              <Text>Address: {formData.address}</Text>
            </Box>

            {cartItems.map((item, index) => (
              <Flex
                key={index}
                mb={4}
                py={0}
                borderBottom="1px solid darkgrey"
                align="center"
                style={{
                  backgroundColor: "rgb(240, 240, 240)",
                  borderRadius: "5px",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  maxWidth="50%"
                  height="auto"
                  borderRadius="5px"
                  mr={2}
                />
                <Box>
                  <Text>{item.name}</Text>
                  <Text fontWeight={"bold"}>${item.price}</Text>
                </Box>
              </Flex>
            ))}
            <Button>Cash Out</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ShoppingCart;
