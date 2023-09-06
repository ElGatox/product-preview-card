import React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { Box, Card, Text, Image } from "@chakra-ui/react";
import ImageMobi from "../assets/images/image-product-mobile.jpg";
import ImageDes from "../assets/images/image-product-desktop.jpg";

const ProductImage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex justifyContent="end">
      {isMobile ? (
        <Image borderTopRadius="20" src={ImageMobi.src} alt="Imagen móvil" />
      ) : (
        <Image
          borderLeftRadius="20"
          w="50%"
          src={ImageDes.src}
          alt="Imagen desktop"
        />
      )}
    </Flex>
  );
};

export default ProductImage;
