import React from "react";
import { Box, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/layout";
import { TiUser } from "react-icons/ti";
import { IoBook } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";

const LeftSidBar = ({ headerSidBarBg, MainBg, headerIconColor }) => {
  return (
    <Box
      bg={headerSidBarBg}
      height="full"
      pt="14px"
      display="flex"
      flexDirection="column"
      position="fixed"
      zIndex="5"
      w={{ base: "50px", sm: "auto", md: "auto", lg: "auto", xl: "auto" }}
    >
      <Box mt="52px">
        <Heading
          mb="18px"
          pl="35px"
          mt="5"
          size="md"
          display={{ base: "none", md: "block", lg: "block", xl: "block" }}
        >
          Folders
        </Heading>

        <Flex
          width="full"
          alignItems="center"
          justifyContent={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          }}
          pl={{ base: "0px", md: "35px", lg: "35px", xl: "35px" }}
          height="49px"
          bg={MainBg}
          cursor="pointer"
          transition=".1s ease-in-out"
          _hover={{ borderLeft: "5px solid", borderColor: "gray.500" }}
        >
          <Flex
            boxSize="28px"
            bg="#78DEC7"
            borderRadius="8px"
            alignItems="center"
            justifyContent="center"
          >
            <TiUser color="white" fontSize="20px" />
          </Flex>
          <Heading
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
            size="sm"
            ml="2"
          >
            Personal
          </Heading>
        </Flex>

        <Flex
          width="full"
          alignItems="center"
          height="49px"
          justifyContent={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          }}
          pl={{ base: "0px", md: "35px", lg: "35px", xl: "35px" }}
          cursor="pointer"
          mt="1"
          transition=".1s ease-in-out"
          _hover={{ borderLeft: "5px solid", borderColor: "gray.500" }}
        >
          <Flex
            boxSize="28px"
            bg="#FF95C5"
            borderRadius="8px"
            alignItems="center"
            justifyContent="center"
          >
            <IoBook color="white" fontSize="14px" />
          </Flex>
          <Heading
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
            size="sm"
            ml="2"
          >
            School
          </Heading>
        </Flex>

        <Flex
          width="full"
          alignItems="center"
          height="49px"
          justifyContent={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          }}
          pl={{ base: "0px", md: "35px", lg: "35px", xl: "35px" }}
          cursor="pointer"
          transition=".1s ease-in-out"
          _hover={{ borderLeft: "5px solid", borderColor: "gray.500" }}
        >
          <Flex
            boxSize="28px"
            bg="#B983FF"
            borderRadius="8px"
            alignItems="center"
            justifyContent="center"
          >
            <RiComputerFill color="white" fontSize="14px" />
          </Flex>
          <Heading
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
            size="sm"
            ml="2"
          >
            Work
          </Heading>
        </Flex>
      </Box>
      <Spacer />
    </Box>
  );
};

export default LeftSidBar;
