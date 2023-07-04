import { Flex } from "@chakra-ui/react";
import Cards from "../../components/Cards";
import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.css";
import { Spinner, Box } from "@chakra-ui/react";
import { fetcher } from "../../api";

function Products() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetcher,
  });
  if (isLoading)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );

  if (isError) return "An error has occurred: ";
  return (
    <section className={styles.products}>
      <Box fontSize={"3xl"} padding={"10"}>
        All Products
      </Box>
      <Box w={"100%"} h={"3px"} bg={"red.500"}></Box>
      <Flex
        w={{
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1300px",
        }}
        flexDirection="row"
        flexWrap="wrap"
        justify="center"
        gap="20px"
      >
        {data.products.map((item, key) => (
          <Cards
            key={key}
            title={item.title}
            photo0={item.thumbnail}
            desc={item.description}
            price={item.price}
            discount={item.discountPercentage}
            rating={item.rating}
            brand={item.brand}
            id={item.id}
          />
        ))}
      </Flex>
    </section>
  );
}

export default Products;
