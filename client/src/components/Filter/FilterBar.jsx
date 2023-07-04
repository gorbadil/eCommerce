// /* eslint-disable react-hooks/rules-of-hooks */

// import { fetcherCategories } from "../../api";
// import { useQuery } from "@tanstack/react-query";
// import styles from "./styles.module.css";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   Menu,
//   MenuButton,
//   Button,
//   MenuList,
//   MenuItem,
// } from "@chakra-ui/react";
// import {ChevronDownIcon} from "@chakra-ui/icons";

// export default function filterBar() {
//   const { isLoading, isError, data } = useQuery({
//     queryKey: ["category"],
//     queryFn: fetcherCategories,
//   });

//   if (isLoading) {
//     return <div>Loading</div>;
//   }
//   if (isError) {
//     return <div>Error</div>;
//   }
//   let arr = [];
//   for (let i of data) {
//     let str = i.replace("-", " ");
//     str = str[0].toUpperCase() + str.slice(1).toLowerCase();
//     arr.push(str);
//   }
//   return (
//     <div className={styles.filterBar}>
      
//       <Flex
//         flexDirection={"row"}
//         gap={"3"}
//         flexWrap={"wrap"}
//         justifyContent={"center"}
//         alignItems={"center"}
//         padding={"4"}
//       >
//         {data.map((item) => {
//           return (
//             <Link key={item} to={`/product/category/${item}`}>
//               {" "}
//               <Box
//                 as="b"
//                 p={"0 10px"}
//                 border={"1px solid black"}
//                 borderRadius={"10px"}
//                 _hover={{
//                   bg: "red.100",
//                 }}
//               >
//                 {(item[0].toUpperCase() + item.slice(1).toLowerCase()).replace(
//                   "-",
//                   " "
//                 )}
//               </Box>{" "}
//             </Link>
//           );
//         })}
//       </Flex>
//     </div>
//   );
// }
