import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetcherProductDetail } from "../../api";
import { StarIcon } from "@chakra-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Button, Box, Flex } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useBasket } from "../../context/Basket";

function ProductDetails() {
  const { product_id } = useParams();
  const { isLoading, isError, data } = useQuery(
    ["productDetail", product_id],
    () => fetcherProductDetail(product_id)
  );
  const { basket, setBasket } = useBasket();
  const handleClick = (id) => {
    setBasket((prev) => [...prev, id]);
    console.log(basket.indexOf(4));
  };
  if (isLoading) {
    return (
      <div className={styles.loading}>
        {" "}
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return <div>Error!</div>;
  }
  return (
    <Flex flexDirection={"column"}>
      <Box pt={"100px"} fontSize={"2xl"} alignSelf={"center"} as="b">
        {data.brand}
      </Box>
      <Flex>
        <Box w={"50%"} p={"3% 10%"}>
          <Carousel autoPlay={true} autoFocus infiniteLoop>
            {data.images.map((item, key) => (
              <div className={styles.tumbDiv} key={key}>
                <img src={item} className={styles.tumbImage} />
              </div>
            ))}
          </Carousel>
        </Box>
        <Flex
          w={"50%"}
          p={"0 10%"}
          flexDirection={"column"}
          h={"100%"}
          justifyContent={"space-between"}
          position={"relative"}
          gap={"10"}
        >
          <Box>
            <Box fontSize={"xl"} as="b">
              {data.title}
            </Box>
            <Box>{data.description}</Box>
          </Box>
          <Flex flexDirection={"column"} gap={"3"}>
            <Box
              display="flex"
              mt="2"
              alignItems="center"
              gap={"10px"}
              mb={"40px"}
            >
              {Array(5)
                .fill("")
                .map((_, i) => {
                  return (
                    <div key={i}>
                      <StarIcon
                        color={i < data.rating ? "pink.400" : "gray.300"}
                      />
                    </div>
                  );
                })}
              <Box>Rating: {data.rating}</Box>
            </Box>
            <Flex
              fontSize={"xl"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              Price: <Box> {data.price}€</Box>
            </Flex>
            {basket.includes(data.id) ? (
              <Button
                colorScheme={"red"}
                variant={"outline"}
                onClick={() =>
                  setBasket((prev) => prev.filter(i => i !== data.id))
                }
              >
                Remove from basket
              </Button>
            ) : (
              <Button colorScheme={"blue"} onClick={() => handleClick(data.id)}>
                Add to basket
              </Button>
            )}
            <Box>Stock: {data.stock}</Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProductDetails;
