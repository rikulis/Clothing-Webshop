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
} from "@chakra-ui/react";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

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
          <Card key={index} maxW="sm" boxShadow="md" borderRadius="lg">
            <Image src={product.image} alt={product.name} borderRadius="lg" />
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />

            <Button variant="solid" colorScheme="blue" rounded="none">
              Add to cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
