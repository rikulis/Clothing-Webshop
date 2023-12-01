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
  Flex,
} from "@chakra-ui/react";
import "./LogoHeader";
import { useCart } from "./CartContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loadingStates, setLoadingStates] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const { isOpen, onToggle } = useDisclosure();
  const { state, dispatch } = useCart();
  const toast = useToast();
  const { addToCart } = useCart();

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

  // Extract unique genders from products
  const allGenders = Array.from(
    new Set(products.flatMap((product) => product.gender))
  );

  // Filter products based on selected size and gender
  const filteredProducts = products
    .filter((product) =>
      selectedSize ? product.sizes.includes(selectedSize) : true
    )
    .filter((product) => {
      const sizeCondition = selectedSize
        ? product.sizes.includes(selectedSize)
        : true;
      const genderCondition = selectedGender
        ? product.gender === selectedGender
        : true;
      return sizeCondition && genderCondition;
    });

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
        title: "Order added to shopping cart.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      // Get the product details from the filteredProducts array
      const productToAdd = filteredProducts[index];

      // Add the product to the cart using the addToCart function
      addToCart(productToAdd);
    }, 2000);
  };

  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (index) => {
    setLikedProducts((prevLikedProducts) => {
      const isLiked = prevLikedProducts.includes(index);
      return isLiked
        ? prevLikedProducts.filter((item) => item !== index)
        : [...prevLikedProducts, index];
    });
    toast({
      title: "Product added to favorites.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Flex justify={"space-around"} align={"center"} my={5}>
        <div>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            Sizes
          </Text>
          {allSizes.map((size) => (
            <Button
              key={size}
              margin={1}
              colorScheme={selectedSize === size ? "purple" : "gray"}
              onClick={() =>
                setSelectedSize(selectedSize === size ? null : size)
              }
              borderRadius="full"
              _focus={{ outline: "none" }}
              w="40px"
            >
              {size}
            </Button>
          ))}
        </div>

        <div>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            Category
          </Text>
          {allGenders.map((gender) => (
            <Button
              key={gender}
              variant="solid"
              color="black"
              size="md"
              mr={2}
              rounded={"5"}
              _focus={{ outline: "none" }}
              colorScheme={selectedGender === gender ? "purple" : "gray"}
              style={{
                color: selectedGender === gender ? "white" : "black",
                textTransform: "Capitalize",
              }}
              onClick={() =>
                setSelectedGender(selectedGender === gender ? null : gender)
              }
            >
              {gender}
            </Button>
          ))}
        </div>
      </Flex>
      {filteredProducts.length === 0 ? (
        <Text mt={4} textAlign="center" color="gray.600">
          Currently there are no products available that match your search.
        </Text>
      ) : (
        <>
          <Text mt={4} textAlign="left" color="gray.600">
            Total Products: {filteredProducts.length}
          </Text>

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
                    hoveredIndex === index
                      ? product.hoveredImage
                      : product.image
                  }
                  alt={product.name}
                  borderRadius="lg"
                />
                <Flex
                  align="center"
                  justify="flex-end"
                  position="absolute"
                  backgroundColor={"white"}
                  right={0}
                  p={1}
                  borderRadius={5}
                  onClick={() => toggleLike(index)}
                  cursor="pointer"
                >
                  {likedProducts.includes(index) ? (
                    <FaHeart size={20} color="purple" />
                  ) : (
                    <FaRegHeart size={20} color="purple" />
                  )}
                </Flex>

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
        </>
      )}
    </div>
  );
};

export default ProductComponent;
