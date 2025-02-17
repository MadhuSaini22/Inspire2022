import React from "react";
import {
  Box,
  Heading,
  Flex,
  UnorderedList,
  ListItem,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Web = () => {
  const details = {
    imgsrc: "/assets/poster1.jpg",
    title: "Poster Pradarshanee ",
    Category: "Group",
    route: "/civil/posterpradarshanee",
  };

  return (
    <Box p={["2", "2", "5", "10"]} mt={["0", "5", "", ""]}>
      <Container
        maxW="1200"
        boxShadow="0 5px 10px gray"
        p="6"
        rounded="xl"
        bg="blackAlpha.300"
        width={["95%", "90%", "80%", "70%"]}
        margin="auto"
        position="relative"
      >
        <Box position="absolute" top={["2", "3", "4", "4"]} cursor="pointer">
          {/* <Text> Back</Text> */}
          <Link href="/civil">
            <a>
              <Flex color="blue.500">
                <IoIosArrowRoundBack fontSize="25px" />
                <Text>Back</Text>
              </Flex>
            </a>
          </Link>
        </Box>
        <Heading
          p="5"
          // fontSize="45"
          fontSize={["35", "40", "42", "45"]}
          fontFamily="Helvetica"
          align="center"
          textShadow="2px 2px #008080"
        >
          {details.title}
        </Heading>
        <Box
          mx="auto"
          my="5"
          color="black"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="20"
        >
          <Flex flexDir={["column", "column", "column", "row"]}>
            <Image
              src={details.imgsrc}
              height={["", "", "", "400"]}
              width="400"
              alt="Cannot Display"
            />
            <Box pl={["", "", "", "35"]}>
              <Heading>Event Category</Heading>

              <Text m="3">{details.Category}</Text>

              <Box>
                <Heading my="20px"> Description</Heading>
                <UnorderedList>
                  <ListItem>
                    Competitors are required to prepare the poster on any one
                    topic. The competitors are required to express about the new
                    technologies which are related to the topic in the posters.
                  </ListItem>
                  <ListItem>
                    Topics:
                    <UnorderedList>
                      <ListItem>
                        Advances in Civil Engineering and Construction
                        Materials.
                      </ListItem>
                      <ListItem>Climate Change</ListItem>
                      <ListItem>Renewable Energy</ListItem>
                      <ListItem>Traffic Management </ListItem>
                      <ListItem>Smart cities</ListItem>
                      <ListItem>Sustainable Environment</ListItem>
                    </UnorderedList>
                  </ListItem>
                  <ListItem>The language for the poster is English.</ListItem>
                  <ListItem>Per Group - 2 members .</ListItem>
                  <ListItem>
                    Poster size: A1 (594 x 841 mm)/ (23.4 x 33.1 in)- 1” margin
                    on all sides.
                  </ListItem>
                  <ListItem>
                    Posters should be readable from at least 6 feet(2 meter).
                  </ListItem>
                  <ListItem>
                    Poster should be self-explanatory and students should be
                    able to explain the queries made by the evaluation
                    committee.
                  </ListItem>
                  <ListItem>
                    Participants must bring a fully prepared poster at the time
                    of the event.
                  </ListItem>
                  <ListItem>Use white background for posters only.</ListItem>
                  <ListItem>
                    Best poster is selected based on innovation, creativity,
                    presentation skills etc.
                  </ListItem>
                  <ListItem>
                    Final decision will be taken by jury members.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Web;
