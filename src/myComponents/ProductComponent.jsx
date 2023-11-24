import React, { useState, useEffect } from "react";
import "../componentStyles/ProductGrid.css";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  useDisclosure,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loadingStates, setLoadingStates] = useState([]);
  const [successMessages, setSuccessMessages] = useState([]);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoadingStates(new Array(data.length).fill(false));
        setSuccessMessages(new Array(data.length).fill(false));
      });
  }, []);

  const handleClick = (index) => {
    setLoadingStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? true : state))
    );
    onToggle();

    // Simulate an asynchronous operation (replace this with your actual logic)
    setTimeout(() => {
      setLoadingStates((prevStates) =>
        prevStates.map((state, i) => (i === index ? false : state))
      );
      onToggle();

      // Display success message after another 2 seconds
      setSuccessMessages((prevStates) =>
        prevStates.map((state, i) => (i === index ? true : state))
      );
      setTimeout(() => {
        setSuccessMessages((prevStates) =>
          prevStates.map((state, i) => (i === index ? false : state))
        );
      }, 2000);
    }, 2000);
  };

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Text mt={4} textAlign="left" color="gray.600">
        Total Products: {products.length}
      </Text>
      <div className="product-grid">
        {products.map((product, index) => (
          <Card
            key={index}
            maxW="sm"
            boxShadow="md"
            borderRadius="lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={
                hoveredIndex === index ? product.hoveredImage : product.image
              }
              alt={product.name}
              borderRadius="lg"
            />
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text color="black" fontSize="xl" fontWeight={"bold"}>
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />

            <Button
              variant="solid"
              colorScheme="purple"
              rounded="none"
              isLoading={loadingStates[index]}
              loadingText="Adding to cart"
              onClick={() => handleClick(index)}
            >
              Add to cart
            </Button>
            {successMessages[index] && (
              <Alert status="success" mt={4}>
                <AlertIcon />
                Order was successful!
              </Alert>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
