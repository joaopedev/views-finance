import React from "react";
import { Box, Text, VStack, Button, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const CommunityPage: React.FC = () => {
  const handleAccessClick = () => {
    window.location.href = "https://global.mundpay.com/h4tz8"; // Altere para seu link real
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, #7B2D20, #5D1E12)"
      color="white"
      px={6}
      py={10}
      textAlign="center"
    >
      <VStack spacing={6} maxW="lg" mx="auto">
        <Text fontSize="3xl" fontWeight="bold">
          EXCLUSIVE
        </Text>
        <Text fontSize="4xl" fontWeight="extrabold">
          CONTENT
        </Text>

        <Text fontSize="2xl" fontWeight="bold" color="yellow.400">
          ACCESS
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="yellow.400">
          $9 ONE-TIME PAYMENT
        </Text>

        <VStack align="start" spacing={3} pt={4}>
          <Text>
            <Icon as={CheckCircleIcon} color="white" mr={2} />
            Exclusive videos
          </Text>
          <Text>
            <Icon as={CheckCircleIcon} color="white" mr={2} />
            Private livestreams
          </Text>
          <Text>
            <Icon as={CheckCircleIcon} color="white" mr={2} />
            Members-only community
          </Text>
        </VStack>

        <Button
          mt={6}
          bg="yellow.400"
          color="black"
          size="lg"
          fontWeight="bold"
          px={10}
          _hover={{ bg: "yellow.300" }}
          onClick={handleAccessClick}
        >
          GET ACCESS
        </Button>
      </VStack>
    </Box>
  );
};

export default CommunityPage;
