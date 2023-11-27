import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import ShoppingCart from "./ShoppingCart";

const Account = ({ isAuthenticated }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Add a state for isAuthenticated
  const [isAuthenticatedState, setIsAuthenticatedState] =
    useState(isAuthenticated);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  // Initialize the toast
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Validate form data
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phoneNumber.trim() === "" ||
      formData.address.trim() === ""
    ) {
      // Display an error toast
      toast({
        position: "top",
        title: "Please fill in all fields",
        status: "error",
        duration: 3000,
      });
      return;
    }

    // Handle form submission logic here
    console.log("Form Data:", formData);

    // Set isAuthenticatedState to true when the form is submitted
    setIsAuthenticatedState(true);

    // Display a success toast
    if (isAuthenticatedState) {
      toast({
        position: "top",
        title: "Account details updated",
        status: "success",
        duration: 1000,
      });
    } else {
      toast({
        position: "top",
        title: "Account created successfully",
        status: "success",
        duration: 1000,
      });
    }

    onClose();
  };

  return (
    <>
      {isAuthenticatedState ? (
        <Button
          onClick={onOpen}
          marginEnd={4}
          variant="outline"
          color="black"
          size="md"
          mr={2}
          rounded={"none"}
          _focus={{ outline: "none" }}
        >
          Account
        </Button>
      ) : (
        <Button
          onClick={onOpen}
          marginEnd={4}
          variant="outline"
          color="black"
          size="md"
          mr={2}
          rounded={"none"}
          _focus={{ outline: "none" }}
        >
          Sign Up
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input
                required
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ShoppingCart formData={formData}></ShoppingCart>
    </>
  );
};

export default Account;
