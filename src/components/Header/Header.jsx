import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link, Text } from "@chakra-ui/layout";
import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { CgSun } from "react-icons/cg";

const Header = ({ toggleColorMode, headerSidBarBg, BorderColorHeader }) => {
  return (
    <Flex
      w="full"
      bg={headerSidBarBg}
      height="52px"
      alignItems="center"
      justifyContent="space-between"
      pr="27px"
      pl="27px"
      borderBottom=".5px solid"
      borderColor={BorderColorHeader}
      position="fixed"
      zIndex="10"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link
          href="https://github.com/pravishtibhardwaj"
          _focus={{}}
          isExternal
        >
          <Avatar name="Pravishti Bhardwaj" w="34px" h="34px">
            <AvatarBadge boxSize="1rem" bg="green.500" />
          </Avatar>
        </Link>
        <Button
          cursor="pointer"
          bg="none"
          as="a"
          p="5px"
          height="35px"
          left="17%"
          onClick={toggleColorMode}
        >
          <CgSun fontSize="23px" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
