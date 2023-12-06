import {
  Box,
  Avatar,
  Wrap,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Spacer,
  Progress,
  Stack,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import image from "../images/logo.jpg";
import VideoCards from "../components/videoCards";
import Footer from "../components/footer";
import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useAuth } from "../context/authContext";

export const Home: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMM dd", { locale: enUS });
  const { dailyGoalProgress, isAuthenticated, emailLogin, login } = useAuth();

  useEffect(() => {
    // Use o email do contexto se o usuário estiver autenticado
    if (!isAuthenticated) {
      console.log(`E-mail do usuário: ${emailLogin}`);
    } else {
      // Se não estiver autenticado, faça login (substitua com sua lógica real)
      login("seu@email.com");
    }
  }, [isAuthenticated, login, emailLogin]);

  return (
    <Box background="#BFA4A4" minHeight="100vh" overflowX="hidden">
      <Box
        borderWidth="1px"
        borderRadius="10px"
        borderColor="gray.300"
        padding="4"
        margin="2"
        backgroundColor="white"
        boxShadow="md"
      >
        <Flex>
          <Wrap>
            <WrapItem>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Segun Adebayo" src={image} />

                <Box>
                  <Heading size="sm">
                    {isAuthenticated ? (
                      <span>{emailLogin}</span>
                    ) : (
                      <span>Visitante</span>
                    )}
                  </Heading>
                </Box>
              </Flex>
            </WrapItem>
          </Wrap>
          <Spacer />
          <Box>
            <Stat>
              <StatLabel>Collected</StatLabel>
              <StatNumber>$ 300.00</StatNumber>
              <StatHelpText>{formattedDate}</StatHelpText>
            </Stat>
          </Box>
        </Flex>

        <Box
          background="white"
          borderWidth="1px"
          borderRadius="10px"
          borderColor="gray.300"
          mt={6}
          p={4}
          m={2}
          mb={10}
          boxShadow="md"
        >
          <Stack spacing={5}>
            <Text fontSize="sm" fontWeight="bold">
              Daily goal: {dailyGoalProgress}% completed
            </Text>
            <Progress colorScheme="green" size="sm" value={dailyGoalProgress} />
          </Stack>
        </Box>

        <Box
          backgroundColor="#BFA4A4"
          borderWidth="1px"
          borderRadius="10px"
          borderColor="gray.300"
          p={4}
          m={2}
          boxShadow="md"
        >
          <Stack backgroundColor="#BFA4A4" spacing={5}>
            <VStack>
              <Text color="white" fontSize="sm" fontWeight="bold">
                Reach 100% and get a bonus of R$ 10.00
              </Text>
            </VStack>
          </Stack>
        </Box>

        <VStack mt={10}>
          <Box
            backgroundColor="white"
            borderWidth="1px"
            borderRadius="10px"
            borderColor="gray.300"
            p={4}
            m={2}
            boxShadow="md"
          >
            <Stack spacing={5}>
              <Text color="BFA4A4" fontSize="sm" fontWeight="bold">
                My balance $ 300.00
              </Text>
            </Stack>
          </Box>
        </VStack>

        <VStack mt={10}>
          <Text fontSize="sm" fontWeight="bold">
            My videos
          </Text>
        </VStack>

        <VStack spacing={4} align="stretch">
          <Box
            borderWidth="1px"
            borderRadius="10px"
            borderColor="gray.300"
            p={4}
            m={2}
            bg="white"
            boxShadow="md"
          >
            <VideoCards />
          </Box>
        </VStack>
      </Box>

      <Footer />
    </Box>
  );
};
