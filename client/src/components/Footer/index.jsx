import styles from "./styles.module.css";
import { Text, Center, Button, Input, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Center alignItems={"center"} m={"4"}>
        <Text fontSize={"4xl"} as={"b"}>
          Newsletter
        </Text>
      </Center>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
        gap={"2"}
      >
        <Input placeholder={"Email"} maxW={"300px"} />
        <Button colorScheme={"whiteAlpha"} variant={"outline"}>
          Subscribe
        </Button>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"} gap={"20px"} m={"40px 0 0"} >
        <Text>About</Text>
        <Text>Location</Text>
        <Text>FAQs</Text>
        <Text>News</Text>
        <Text>Careers</Text>
        <Text>Contact Us</Text>
      </Flex>
    </footer>
  );
}
