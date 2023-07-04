import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Cards from "../../components/Cards";
import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.css";
import { Spinner, Box } from "@chakra-ui/react";
import { fetcherProductCategory } from "../../api";
import { useEffect } from "react";

function ProductCategory() {
  const { product_cat } = useParams();
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => fetcherProductCategory(product_cat),
  });
  useEffect(() => {
    // product_cat değeri değiştiğinde yeniden veri talebi yapar
    refetch();
  }, [product_cat, refetch]);
  console.log(data);
  if (isLoading)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );

  if (isError) return "An error has occurred: ";
  const catStr = product_cat.replace("-", " ")
  return (
    <section className={styles.products}>
      <Box fontSize={"3xl"} padding={"10"} >
        {catStr[0].toUpperCase() + catStr.slice(1)}
      </Box>
      <Box w={"100%"} h={"3px"} bg={"red.500"} ></Box>
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
            key={`${key}${item.category}`}
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

export default ProductCategory;
