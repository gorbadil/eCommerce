import styles from "./styles.module.css";
import { Text, Container, Button, Image, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Laptops() {
  return (
    <Container maxW={{ md: "80vw", base: "100vw" }}>
      <div className={styles.gamingRoom}>
        <Box width={{ base: "100%" }}>
          <Image
            src="https://www.pcworld.com/wp-content/uploads/2022/07/pcw-midrange-laptop-hub-100892862-orig.jpg?quality=50&strip=all"
            alt="gaming room"
            minW={"300px"}
          />
        </Box>
        <Flex flexDirection={"column"} maxW={{ base: "100%" }}>
          <Text fontSize={"3xl"}>Laptops</Text>
          <Text mt={"20px"}>
            Laptop categories in an e-commerce platform encompass a range of
            laptops with various brands, models, and features.
          </Text>
          <Button colorScheme="blue" m={"20px 20px 0 auto"} maxW={"100%"}>
            <Link to={"/product/category/laptops"}>Shop Now!</Link>
          </Button>
        </Flex>
      </div>
    </Container>
  );
}
