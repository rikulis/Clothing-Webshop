import React from "react";
import { Box, Flex, Spacer, Input, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box className="header" py={4} borderBottom="1px" borderColor="gray.200">
      <Flex align="center">
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <li>
              <Text fontWeight="bold">Clothing</Text>
            </li>
            <li>
              <Text fontWeight="bold">Boots</Text>
            </li>
            <li>
              <Text fontWeight="bold">Jackets</Text>
            </li>
            <li>
              <Text fontWeight="bold">Dresses</Text>
            </li>
            <li>
              <Text fontWeight="bold">Accessories</Text>
            </li>
            <li>
              <Text fontWeight="bold">Sport</Text>
            </li>
            <li>
              <Text fontWeight="bold">Accessories</Text>
            </li>
            <li>
              <Text fontWeight="bold">Ale</Text>
            </li>
          </ul>
        </nav>
        <Spacer />
        <Input placeholder="Search" size="sm" width="150px" />
      </Flex>
    </Box>
  );
};

export default Header;
