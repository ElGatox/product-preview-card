import React from "react";

import { Flex, Heading, Box, Stack } from "@chakra-ui/react";
import {
  Card,
  Divider,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";

const Productinfo = () => {
  return (
    <Card borderRadius="" borderRightRadius="2xl" maxW="">
      <Flex flexDirection={["column", null, "row"]}>
        <Stack ml="5" px="21" w="300px" mt="6" spacing={["4", null, null, "6"]}>
          <Text> PERFUME</Text>
          <Heading fontSize={["2rem", null, null, "2.5rem"]}>
            {" "}
            Gabrielle Essence Eau De Parfum
          </Heading>
          <Text fontSize="15px">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </Text>
          <Flex>
            <Text
              as="b"
              color="green.500"
              fontSize={["2rem", null, null, "2.5rem"]}
            >
              $149.99
            </Text>
            <Text as="del" color="grey" fontSize="2xl">
              $169.99
            </Text>
          </Flex>
        </Stack>
      </Flex>

      <CardFooter>
        <Button w="full" variant="solid" colorScheme="green">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Productinfo;
