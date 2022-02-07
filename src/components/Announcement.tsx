import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";

export const Announcement: React.FC<{ cta: React.ReactNode }> = ({
  cta,
  children,
}) => {
  return (
    <Flex
      bg="whiteAlpha.200"
      as="section"
      marginBlock="4"
      marginInline="-4"
      paddingInline="4"
      paddingBlock="4"
      direction="column"
      gap="6"
      border="4px solid"
      borderColor="black"
      boxShadow="0 0 0 4px var(--chakra-colors-whiteAlpha-200)"
    >
      <Text margin="0!important">{children}</Text>
      <Button
        justifyContent="center"
        bg="primary.500"
        _hover={{ bg: "primary.600", color: "white" }}
        _active={{ bg: "primary.600", color: "white" }}
        _focus={{ bg: "primary.600", color: "white" }}
        color="white"
        as="a"
        textDecoration="none"
        href="#"
        width="max-content"
      >
        {cta}
      </Button>
    </Flex>
  );
};
