import { Box, Flex } from "@chakra-ui/react";
import { AuthProvider } from "../context/authContext";
import FormValue from "../components/formValue";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const RequestValue: React.FC = () => {
  return (
    <Box backgroundColor="black">
      <Link to="/home">
        <Box p={4}>
          <ArrowBackIcon />
        </Box>
      </Link>
      <Flex
        backgroundColor="black"
        height="95vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          marginTop="10%"
          boxShadow="dark-lg"
          background="white"
          marginBottom="10%"
          w="70%"
          p={15}
        >
          <AuthProvider>
            <FormValue />
          </AuthProvider>
        </Box>
      </Flex>
    </Box>
  );
};

export default RequestValue;
