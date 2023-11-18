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
  ButtonGroup,
} from "@chakra-ui/react";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
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

          <Button variant="solid" colorScheme="blue">
            Add to cart
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ProductComponent;
