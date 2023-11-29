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
  Checkbox,
  Select,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { useCart } from "./CartContext";
import ProductAmountInput from "./ProductAmountInput";

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
          <DrawerHeader fontWeight={"bold"}>Shopping Cart</DrawerHeader>
          <DrawerBody>
            <Box mb={4} p={2}>
              <Text fontSize="20px" fontWeight="bold">
                Account
              </Text>
              <Text>Name: {formData.name}</Text>
              <Text>Email: {formData.email}</Text>
              <Text>Phone Number: {formData.phoneNumber}</Text>
              <Text>Address: {formData.address}</Text>
            </Box>

            {cartItems.map((item, index) => (
              <Box key={index} mb={4} p={2} borderBottom="1px solid #ccc">
                <Image
                  src={item.image}
                  alt={item.name}
                  maxWidth="50%"
                  height="auto"
                  borderRadius="5px"
                  mb={2}
                />
                <Text>{item.name}</Text>
                <Flex>
                  <ProductAmountInput />
                  <Select
                    placeholder="Select Size"
                    size={"sm"}
                    maxWidth={"33%"}
                    px={2}
                  >
                    <option value="option1">S</option>
                    <option value="option2">M</option>
                    <option value="option3">L</option>
                  </Select>
                </Flex>
                <Text fontWeight={"bold"} marginTop={3}>
                  ${item.price}
                </Text>
              </Box>
            ))}
            <Stack>
              <Checkbox defaultChecked>Join our mailing list</Checkbox>
              <Button>Cash Out</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ShoppingCart;
