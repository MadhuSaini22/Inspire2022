import React from "react";
import Data from "./Data";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Format from "../Format";

const Tresurehunt = () => {
  const details = {
    imgsrc: "/assets/computer.png",
    title: "Computer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    rules:
      "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    judgecriteria:
      "lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip",
    contact: "24355689797",
    name: "john",
  };

  return (
    <Box mx="auto" my="5" mb="20px" align="center" justifyContent="center">
      <Heading mb="20px">Tresurehunt</Heading>
      <Format
        imgsrc={details.imgsrc}
        title={details.title}
        description={details.description}
        rules={details.rules}
        judgecriteria={details.judgeCriteria}
        contact={details.contact}
        name={details.name}
      />
    </Box>
  );
};

export default Tresurehunt;
