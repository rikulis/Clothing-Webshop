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
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useCart } from "./CartContext";
import ProductAmountInput from "./ProductAmountInput";

function ShoppingCart({ formData }) {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { cartItems, clearCart } = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const handleCashOut = () => {
    onClose();

    // Check if the cart has items and email is provided
    if (cartItems.length > 0 && formData.email.trim() !== "") {
      toast({
        title: "Order successfully placed!",
        status: "success",
        duration: 2000,
        position: "top",
      });
      clearCart(); // Clear the cart
    } else {
      // Display an error toast if the cart is empty or email is missing
      toast({
        title:
          cartItems.length === 0
            ? "Add items to the cart before ordering!"
            : "Provide your email address before ordering!",
        status: "error",
        duration: 2000,
        position: "top",
      });
    }

    // Check if required user information is provided
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phoneNumber.trim() === "" ||
      formData.address.trim() === ""
    ) {
      // Display an error toast
      toast({
        position: "top",
        title: "You must sign up properly before ordering!",
        status: "error",
        duration: 3000,
      });
    }
  };

  return (
    <>
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

      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"bold"}>Shopping Cart</DrawerHeader>
          <DrawerBody>
            <Box mb={4} p={2} border={"1px gray solid"}>
              <Text fontSize="20px" fontWeight="bold">
                Account
              </Text>
              <Divider />
              <Text>Name: {formData.name}</Text>
              <Divider />
              <Text>Email: {formData.email}</Text>
              <Divider />
              <Text>Phone Number: {formData.phoneNumber}</Text>
              <Divider />
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
                <Text>{item.brand}</Text>
                <Flex>
                  <ProductAmountInput />
                  <Select size={"sm"} maxWidth={"33%"} px={2}>
                    {item.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                </Flex>
                <Text fontWeight={"bold"} marginTop={3}>
                  ${item.price}
                </Text>
              </Box>
            ))}
            <Stack>
              <Text fontWeight={"bold"} marginTop={3}>
                Total Price: ${calculateTotalPrice().toFixed(2)}
              </Text>
              <Checkbox defaultChecked>Join our mailing list</Checkbox>
              <Button
                color="white"
                bgGradient="linear(to-r, pink.500, purple.500)"
                fontSize="md"
                fontWeight="bold"
                rounded={"none"}
                _hover={{
                  bgGradient: "linear(to-r, pink.600, purple.600)",
                }}
                onClick={handleCashOut}
              >
                Cash Out
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ShoppingCart;
