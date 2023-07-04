import styles from "./styles.module.css";
import { Text, Container, Button, Image, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Furniture() {
  return (
    <Container maxW={{ md: "80vw", base: "100vw" }}>
      <div className={styles.gamingRoom}>
        <Box width={{ base: "100%", md: "100%" }}>
          <Image
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg"
            alt="gaming room"
            minW={"300px"}
          />
        </Box>
        <Flex flexDirection={"column"} maxW={{ base: "100%", md: "100%" }}>
          <Text fontSize={"3xl"}>Furnitures</Text>
          <Text mt={"20px"}>
            Furniture categories in an e-commerce platform encompass a diverse
            range of furniture pieces, including sofas, tables, chairs, beds,
            and more, catering to different styles, materials, and
            functionalities.
          </Text>
          <Button colorScheme="blue" m={"20px 20px 0 auto"} maxW={"100px"}>
            <Link to={"/product/category/furniture"}>Shop Now!</Link>
          </Button>
        </Flex>
      </div>
    </Container>
  );
}
