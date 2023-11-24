import React from "react";
import { Box, Flex, Spacer, Input, Link } from "@chakra-ui/react";
import "../componentStyles/Header.css";
import Account from "../myComponents/Account";

const Header = () => {
  return (
    <Box className="header" py={4} borderBottom="1px" borderColor="gray.200">
      <Flex align="center">
        <nav>
          <ul>
            <li>
              <Link
                fontWeight="bold"
                textDecor="none"
                _hover={{ textDecor: "underline white" }}
              >
                Clothing
              </Link>
            </li>
            <li>
              <Link
                fontWeight="bold"
                textDecoration={"none"}
                _hover={{ textDecor: "underline white" }}
              >
                Boots
              </Link>
            </li>
            <li>
              <Link
                fontWeight="bold"
                className="header-link"
                _hover={{ textDecor: "underline white" }}
              >
                Jackets
              </Link>
            </li>
            <li>
              <Link
                fontWeight="bold"
                className="header-link"
                _hover={{ textDecor: "underline white" }}
              >
                Dresses
              </Link>
            </li>
            <li>
              <Link
                fontWeight="bold"
                className="header-link"
                _hover={{ textDecor: "underline white" }}
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link
                fontWeight="bold"
                className="header-link"
                _hover={{ textDecor: "underline white" }}
              >
                Sport
              </Link>
            </li>
            <li>
              <Link
                fontWeight="bold"
                className="header-link"
                _hover={{ textDecor: "underline white" }}
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link
                fontWeight="bold"
                className="header-link"
                _hover={{ textDecor: "underline white" }}
              >
                Ale
              </Link>
            </li>
          </ul>
        </nav>
        <Spacer />
        <Input
          placeholder="Search"
          size="sm"
          width="150px"
          marginEnd={7}
          marginStart={5}
        />
        <Account></Account>
      </Flex>
    </Box>
  );
};

export default Header;
