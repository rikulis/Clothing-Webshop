import React from "react";
import { Box, Flex, Spacer, Input, Link } from "@chakra-ui/react";
import "../componentStyles/Header.css";
const Header = () => {
  return (
    <Box className="header" py={4} borderBottom="1px" borderColor="gray.200">
      <Flex align="center">
        <nav>
          <ul>
            <li>
              <Link fontWeight="bold" textDecor="none">
                Clothing
              </Link>
            </li>
            <li>
              <Link fontWeight="bold" textDecoration={"none"}>
                Boots
              </Link>
            </li>
            <li>
              <Link fontWeight="bold" className="header-link">
                Jackets
              </Link>
            </li>
            <li>
              <Link fontWeight="bold" className="header-link">
                Dresses
              </Link>
            </li>
            <li>
              <Link fontWeight="bold" className="header-link">
                Accessories
              </Link>
            </li>
            <li>
              <Link fontWeight="bold" className="header-link">
                Sport
              </Link>
            </li>
            <li>
              <Link fontWeight="bold" className="header-link">
                Accessories
              </Link>
            </li>
            <li>
              <Link fontWeight="bold" className="header-link">
                Ale
              </Link>
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
