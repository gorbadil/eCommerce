/* eslint-disable react/prop-types */
import { Box, Image, Badge, Button, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useBasket } from "../../context/Basket";

export default function Cards({
  id,
  title,
  photo0,
  price,
  discount,
  rating,
  brand,
}) {
  const { basket, setBasket } = useBasket();
  const handleClick = (id) => {
    setBasket((prev) => [...prev, id]);
    console.log(basket);
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      role="group"
      mb={"20px"}
    >
      <Link to={`/products/${id}`}>
        <Box
          width={"300px"}
          height={"300px"}
          display={"flex"}
          overflow={"hidden"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Image src={photo0} alt="image" objectFit={"cover"} />
          <Badge
            borderRadius="full"
            px="2"
            colorScheme="pink"
            alignSelf={"center"}
            position={"absolute"}
            top={"0"}
            right={"0"}
          >
            Discount {discount}%
          </Badge>
          {basket.includes(id) && (
            <Badge
              borderRadius="full"
              px={"20px"}
              colorScheme="whatsapp"
              alignSelf={"center"}
              top={"0"}
              left={"0"}
              position={"absolute"}
            >
              At Basket
            </Badge>
          )}
        </Box>
        <Box p="6">
          <Box fontSize={"lg"} as="b">
            {" "}
            {brand}{" "}
          </Box>
          <Flex justifyContent="space-between">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={2}
              maxW={"250px"}
            >
              {title}
            </Box>
          </Flex>
          <Box
            fontSize={"lg"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => {
                  return (
                    <div key={i}>
                      <StarIcon color={i < rating ? "pink.400" : "gray.300"} />
                    </div>
                  );
                })}
            </Box>
            <Box alignSelf={"center"}>{price}€</Box>
          </Box>
          <Box> {rating} </Box>
        </Box>
      </Link>
      <Flex
        mb="10px"
        alignItems="center"
        justifyContent="space-around"
        width={"100%"}
        visibility={"hidden"}
        _groupHover={{ visibility: "visible" }}
      >
        {basket.includes(id) ? (
          <Button
            colorScheme={"red"}
            variant={"outline"}
            onClick={() =>
              setBasket((prev) => prev.slice(basket.indexOf(id) + 1))
            }
          >
            Remove from basket
          </Button>
        ) : (
          <Button colorScheme={"blue"} onClick={() => handleClick(id)}>
            Add to basket
          </Button>
        )}
      </Flex>
    </Box>
  );
}
