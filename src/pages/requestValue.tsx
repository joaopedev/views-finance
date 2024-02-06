import { Box, Flex, Button } from "@chakra-ui/react";
import { AuthProvider } from "../context/authContext";
import FormValue from "../components/formValue";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const RequestValue: React.FC = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <Box h="100vh"  backgroundColor="black">
      <Button color="black" background="black" onClick={handleButtonClick}>
          <ArrowBackIcon color="white" />
      </Button>
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
