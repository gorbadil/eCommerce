import { NavLink, Link } from "react-router-dom";
import styles from "./styles.module.css";
import { fetcherCategories } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { useBasket } from "../../context/Basket";
import {
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/Logo.png";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["category"],
    queryFn: fetcherCategories,
  });
  const { basket } = useBasket();

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  let arr = [];
  for (let i of data) {
    let str = i.replace("-", " ");
    str = str[0].toUpperCase() + str.slice(1).toLowerCase();
    arr.push(str);
  }
  return (
    <div>
      <nav>
        <Box
          display={{ base: "none", lg: "flex" }}
          w={{ base: "", md: "80vw" }}
          justifyContent={"space-between"}
        >
          <Box>
            <NavLink exact to="/">
              <img src={logo} alt="Logo" className={styles.logo} />
            </NavLink>
            <Text
              position={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
              fontSize={{ base: "xl", md: "3xl" }}
              as={"b"}
              color="tomato"
            >
              {" "}
              MdSaler{" "}
            </Text>
            <NavLink
              className={(isActive) =>
                !isActive ? styles.navlink : styles.selected
              }
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(isActive) =>
                !isActive ? styles.navlink : styles.selected
              }
              exact
              to="/products"
            >
              Products
            </NavLink>
          </Box>
          <div className={styles.right}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Categories
              </MenuButton>
              <MenuList>
                {data.map((item) => {
                  return (
                    <MenuItem
                      key={item}
                      to={`/product/category/${item}`}
                      as={NavLink}
                    >
                      <Box as="b" p={"0 10px"}>
                        {(
                          item[0].toUpperCase() + item.slice(1).toLowerCase()
                        ).replace("-", " ")}
                      </Box>{" "}
                      {/* </Link> */}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <Link to={"/basket"}>
              <Button m={"0 10px"} colorScheme={"whatsapp"}>
                Basket ({basket.length})
              </Button>
            </Link>
          </div>
        </Box>
        <Flex display={{ base: "flex", lg: "none" }}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"80vw"}
            position={"relative"}
          >
            <NavLink exact to="/">
              <img src={logo} alt="Logo" className={styles.logo} />
            </NavLink>
            <Text
              position={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
              fontSize={{ base: "xl", md: "3xl" }}
              as={"b"}
              color="tomato"
            >
              MdSaler
            </Text>
            <Flex gap={"5px"}>
              <Menu>
                <MenuButton
                  as={Button}
                  color="white"
                  bg={"red.400"}
                  rightIcon={<HamburgerIcon />}
                  _hover={{ bg: "red.500" }}
                  colorScheme="red"
                >
                  Menu
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NavLink exact to="/">
                      Home
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink exact to="/products">
                      Products
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/basket"}>Basket ({basket.length})</Link>
                  </MenuItem>
                  <MenuItem>
                    <MenuList maxH={"30vh"} overflow={"scroll"}>
                      {data.map((item) => {
                        return (
                          <MenuItem
                            key={item}
                            to={`/product/category/${item}`}
                            as={NavLink}
                          >
                            <Box as="b" p={"0 10px"}>
                              {(
                                item[0].toUpperCase() +
                                item.slice(1).toLowerCase()
                              ).replace("-", " ")}
                            </Box>{" "}
                            {/* </Link> */}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>
      </nav>
    </div>
  );
}

export default Navbar;
