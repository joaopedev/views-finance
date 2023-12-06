import { Box, Grid, GridItem } from "@chakra-ui/react";
import { AuthProvider } from "../context/authContext";
import FormValue from "../components/formValue";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const RequestValue: React.FC = () => {
  return (
    <Grid backgroundColor="#BFA4A4" templateColumns="repeat(3, 1fr)" gap={2}>
      <GridItem backgroundColor="#BFA4A4" colSpan={1} p={4}>
      <Box
  
        >
        <Link to="/home">
          <ArrowBackIcon />
        </Link>
      </Box>  
      </GridItem>
      <GridItem backgroundColor="#BFA4A4" h="100vh" colSpan={1} p={4}>
        <Box
          marginTop="20%"
          boxShadow="dark-lg"
          background="white"
          marginBottom="60%"
          w="100%"
          p={15}
        >
          <AuthProvider>
            <FormValue />
          </AuthProvider>
        </Box>
      </GridItem>
      <GridItem backgroundColor="#BFA4A4" colSpan={1} p={2} />
    </Grid>
  );
};

export default RequestValue;
