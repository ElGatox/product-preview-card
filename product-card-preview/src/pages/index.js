import { Stack, Flex } from "@chakra-ui/react";
import Productinfo from "@/components/Card";
import Productfoto from "../components/ProductPhoto";
export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" className="home">
      <Stack
        flexDirection={["column", null, "row"]}
        w={[null, null, null, "full"]}
        justifyContent="center"
      >
        <Productfoto />
        <Productinfo />
      </Stack>
    </Flex>
  );
}
