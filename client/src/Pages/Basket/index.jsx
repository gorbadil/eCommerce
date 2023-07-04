import { useBasket } from "../../context/Basket";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../api";
import { Link } from "react-router-dom";
import {
  Spinner,
  Flex,
  Card,
  Image,
  Stack,
  Button,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Box,
} from "@chakra-ui/react";
import styles from "./styles.module.css";

function Basket() {
  const { basket, setBasket } = useBasket();
  const handleClick = (id) => {
    setBasket((prev) => [...prev, id]);
    console.log(basket.indexOf(4));
  };
  let basketArr = [];
  const { isLoading, isError, data } = useQuery(["products"], fetcher);
  if (isLoading)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  for (let i of basket) {
    for (let j of data.products) {
      if (i == j.id) {
        basketArr.push(j);
      }
    }
  }
  let totalPrice = 0;
  for (let i of basketArr) {
    totalPrice += i.price;
  }

  if (isError) return "An error has occurred: ";
  return (
    <Flex
      justifyContent={"start"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"10"}
      minH={"80vh"}
    >
      <Text fontSize={"2xl"} p={"30px"}>
        Basket
      </Text>
      {basketArr.length > 0 ? (
        basketArr.map((item, key) => (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            key={key}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={item.thumbnail}
              alt={item.title}
            />

            <Stack>
              <Link to={`/products/${item.id}`}>
                <CardBody w={"400px"}>
                  <Heading size="md">
                    {" "}
                    {item.brand} / {item.title}{" "}
                  </Heading>

                  <Heading size={"md"} float={"right"} py="2">
                    {item.price} €
                  </Heading>
                </CardBody>
              </Link>

              <CardFooter>
                {basket.includes(item.id) ? (
                  <Button
                    colorScheme={"red"}
                    variant={"outline"}
                    onClick={() =>
                      setBasket((prev) => prev.filter((i) => i !== item.id))
                    }
                  >
                    Remove from basket
                  </Button>
                ) : (
                  <Button
                    colorScheme={"blue"}
                    onClick={() => handleClick(item.id)}
                  >
                    Add to basket
                  </Button>
                )}
              </CardFooter>
            </Stack>
          </Card>
        ))
      ) : (
        <Flex fontSize={"xl"} as="b" p={"0 0 50px"}>
          Your basket is empty
        </Flex>
      )}
      <Box
        fontSize={"xl"}
        as="b"
        shadow={"md"}
        borderRadius={"lg"}
        overflow={"hidden"}
      >
        <Box bg={"red.100"} w={"50vw"} padding={"15px"}>
          Order Details
        </Box>
        <Box padding={"15px"}>
          Total Price: <Box ml={"150px"}> {totalPrice} €</Box>
          <Button w={"100%"} colorScheme="whatsapp" mt={"15px"}>
            Order Now
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default Basket;
