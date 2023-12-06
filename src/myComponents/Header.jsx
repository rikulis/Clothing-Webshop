import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useMediaQuery,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon, Icon } from "@chakra-ui/icons";
import "../componentStyles/Header.css";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box className="header" py={4} borderBottom="1px" borderColor="gray.200">
      <Flex direction={{ base: "row", md: "row" }} align="center">
        <Box mb={{ base: 4, md: 0 }}>
          {/* Conditionally render the Menu on small screens */}
          {isMobile ? (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="blackAlpha"
                size="md"
                mr={2}
                rounded={"none"}
              >
                Categories
              </MenuButton>
              <MenuList>
                <MenuItem>Clothing</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Jackets</MenuItem>
                <MenuItem>Dresses</MenuItem>
                <MenuItem>Accessories</MenuItem>
                <MenuItem>Sport</MenuItem>
                <MenuItem>Accessories</MenuItem>
                <MenuItem color={"pink.500"}>Ale</MenuItem>
              </MenuList>
            </Menu>
          ) : (
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
                    Ale
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </Box>
        <Spacer />
        <InputGroup
          width={{ base: "100%", md: "150px" }}
          marginEnd={{ base: 0, md: 7 }}
          marginStart={{ base: 5, md: 0 }}
        >
          <Input placeholder="Search" size="sm" />
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.300" />
          </InputLeftElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Header;
