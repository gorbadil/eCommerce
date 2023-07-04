import Hero from "../../components/Hero";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../api.jsx";
import { Spinner, Text, Divider } from "@chakra-ui/react";
import Cards from "../../components/Cards";
import styles from "./styles.module.css";
import Laptops from "../../components/Laptops";
import Furniture from "../../components/Furniture";

function Landing() {
  const products = useQuery({
    queryKey: ["products"],
    queryFn: fetcher,
  });
  if (products.isLoading)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );

  if (products.error) return "An error has occurred: " + products.error.message;
  const item = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * products.data.products.length);
    item.push(products.data.products[random]);
  }
  const item2 = [];
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * products.data.products.length);
    item2.push(products.data.products[random]);
  }
  return (
    <div>
      <Hero />
      <Divider padding={"0 0 10px"} size={"sm"} />
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        padding={"10px 0 0"}
      >
        Products on discount
      </Text>
      <Divider padding={"10px"} />
      <div className={styles.discount}>
        {item.map((item, key) => (
          <Cards
            key={key}
            title={item.title}
            photo0={item.thumbnail}
            desc={item.description}
            price={item.price}
            discount={item.discountPercentage}
            id={item.id}
          />
        ))}
      </div>
      <Laptops />
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        padding={"10px 0 0"}
      >
        Products for you
      </Text>
      <div className={styles.discount}>
        {item2.map((item, key) => (
          <Cards
            key={key}
            title={item.title}
            photo0={item.thumbnail}
            desc={item.description}
            price={item.price}
            discount={item.discountPercentage}
            id={item.id}
          />
        ))}
      </div>
      <Furniture />
    </div>
  );
}

export default Landing;
