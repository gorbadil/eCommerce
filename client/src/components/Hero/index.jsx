import { Container, Grid, GridItem, Box, Image, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div className={styles.herodiv}>
      <Container maxW="1000px">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(6, 1fr)" }}
          templateRows={{ base: "repeat(2, 1fr)", sm:"repeat(1,1fr)" }}
          gap={4}
          overflow="hidden"
          width={"100%"}
        >
          <GridItem
            colSpan={{ base: 1, md: 3 }}
            rowSpan={{ md: 3 }}
            display={{ base: "none", md: "grid" }}
          >
            <Box
              color="white"
              fontWeight="semibold"
              role="group"
              position={"relative"}
            >
              <Link to={"/product/category/womens-dresses"}>
                <Image
                  src="https://www.have-clothes-will-travel.com/wp-content/uploads/2019/05/qtq80-7bsDUb.jpeg"
                  alt="category image"
                  boxSize="420px"
                  objectFit="fill"
                  />
                <Text
                  fontSize={"xl"}
                  transition={"all .3s ease"}
                  color={"white"}
                  _groupHover={{ fontSize: "2xl" }}
                  position={"absolute"}
                  bottom={"0"}
                  padding={"20px"}
                  textShadow="1px 1px 10px #000000"
                  >
                  Womens Clothing
                </Text>
              </Link>
            </Box>
          </GridItem>
          <GridItem colSpan={2} rowSpan={1}>
            <Box
              color="white"
              fontWeight="semibold"
              role="group"
              position={"relative"}
              >
              <Link to={"/product/category/mens-shoes"}>
                <Image
                  src="https://i.insider.com/60c8e7176d855e00181582ac?width=700"
                  alt="category image"
                  boxSize="300px"
                  objectFit="cover"
                  h="200px"
                  w={"100%"}
                  />
                <Text
                  fontSize={"xl"}
                  transition={"all .3s ease"}
                  color={"white"}
                  _groupHover={{ fontSize: "2xl" }}
                  position={"absolute"}
                  bottom={"0"}
                  padding={"20px"}
                  textShadow="1px 1px 10px #000000"
                >
                  Mens Shoes
                </Text>
              </Link>
            </Box>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Box
              color="white"
              fontWeight="semibold"
              w={{md:"300px", base:"100vw"}}
              h={{md:"200px", base:""}}
              overflow="hidden"
              role="group"
              position={"relative"}
            >
              <Link to={"/product/category/laptops"}>
                <Image
                  src="https://i.rtings.com/assets/pages/IxCXzynA/apple-laptop-lineup-20220825-3-medium.jpg"
                  alt="category image"
                  boxSize={{md:"300px", base:"740px"}}
                  h="200px"
                  objectFit={"cover"}
                  />
                <Text
                  fontSize={"xl"}
                  transition={"all .3s ease"}
                  color={"white"}
                  _groupHover={{ fontSize: "2xl" }}
                  position={"absolute"}
                  bottom={"0"}
                  padding={"20px"}
                  textShadow="1px 1px 10px #000000"
                >
                  Laptops
                </Text>
              </Link>
            </Box>
          </GridItem>
          <GridItem colSpan={2} rowSpan={1}>
            <Box
              color="white"
              fontWeight="semibold"
              overflow="hidden"
              role="group"
              position={"relative"}
            >
              <Link to={"/product/category/home-decoration"}>
                <Image
                  src="https://www.storyhomes.co.uk/wp-content/uploads/2022/10/Living-room-inspiration-to-make-it-feel-cosy.jpg"
                  alt="category image"
                  boxSize="300px"
                  w={{md:"300px", base:"100vw"}}
                  h="200px"
                  objectFit={"cover"}
                />
                <Text
                  fontSize={"xl"}
                  transition={"all .3s ease"}
                  color={"white"}
                  _groupHover={{ fontSize: "2xl" }}
                  position={"absolute"}
                  bottom={"0"}
                  padding={"20px"}
                  textShadow="1px 1px 10px #000000"
                >
                  Home Decorations
                </Text>
              </Link>
            </Box>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Box
              color="white"
              fontWeight="semibold"
              overflow="hidden"
              role="group"
              position={"relative"}
            >
              <Link to={"/product/category/sunglasses"}>
                <Image
                  src="https://www.usmagazine.com/wp-content/uploads/2022/05/model-round-sunglasses.jpg?quality=70&strip=all"
                  alt="category image"
                  w={{md:"300px", base:"100vw"}}
                  h="200px"
                  objectFit={"cover"}
                />
                <Text
                  fontSize={"xl"}
                  transition={"all .3s ease"}
                  color={"white"}
                  _groupHover={{ fontSize: "2xl" }}
                  position={"absolute"}
                  bottom={"0"}
                  padding={"20px"}
                  textShadow="1px 1px 10px #000000"
                >
                  Sunglasses
                </Text>
              </Link>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
