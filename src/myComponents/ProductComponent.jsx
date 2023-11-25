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
  useToast,
} from "@chakra-ui/react";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loadingStates, setLoadingStates] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoadingStates(new Array(data.length).fill(false));
      });
  }, []);

  // Extract unique sizes from products
  const allSizes = Array.from(
    new Set(products.flatMap((product) => product.sizes))
  );

  // Filter products based on selected size
  const filteredProducts = selectedSize
    ? products.filter((product) => product.sizes.includes(selectedSize))
    : products;

  const handleClick = (index) => {
    setLoadingStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? true : state))
    );
    onToggle();

    // Simulate an asynchronous operation
    setTimeout(() => {
      setLoadingStates((prevStates) =>
        prevStates.map((state, i) => (i === index ? false : state))
      );
      onToggle();

      // Display toast
      toast({
        title: "Order was successful!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }, 2000);
  };

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Text mt={4} textAlign="left" color="gray.600">
        Total Products: {filteredProducts.length}
      </Text>

      <div>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          Sizes:
        </Text>
        {allSizes.map((size) => (
          <Button
            key={size}
            margin={1}
            colorScheme={selectedSize === size ? "purple" : "gray"}
            onClick={() => setSelectedSize(selectedSize === size ? null : size)}
            borderRadius="full"
            _focus={{ outline: "none" }}
            w="40px"
          >
            {size}
          </Button>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
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
                <Text>Available in:</Text>
                <Text fontWeight={"bold"}>{product.sizes.join(" ")}</Text>
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
