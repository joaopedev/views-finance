import { Box, Grid, GridItem } from "@chakra-ui/react";
import LoginForm from "../components/loginForm";
import { AuthProvider } from "../context/authContext";

export const Login: React.FC = () => {
  return (
    <Grid backgroundColor="#BFA4A4" templateColumns="repeat(3, 1fr)" gap={2}>
      <GridItem backgroundColor="#BFA4A4" colSpan={1} p={4}></GridItem>
        <GridItem backgroundColor="#BFA4A4" h="105vh" colSpan={1} p={4}>
            <Box marginTop="20%" boxShadow='dark-lg' background="white" marginBottom="60%" w="100%" p={15}>
              <AuthProvider>
                <LoginForm />
              </AuthProvider>
            </Box>
        </GridItem>
      <GridItem backgroundColor="#BFA4A4" colSpan={1} p={4} />
    </Grid>
  );
};

export default Login;
