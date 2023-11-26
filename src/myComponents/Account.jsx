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
} from "@chakra-ui/react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form Data:", formData);

    // Set isAuthenticatedState to true when the form is submitted
    setIsAuthenticatedState(true);

    onClose();
  };

  return (
    <>
      {isAuthenticatedState ? (
        <Button onClick={onOpen} marginEnd={4}>
          Account
        </Button>
      ) : (
        <Button onClick={onOpen} marginEnd={4}>
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
    </>
  );
};

export default Account;
