import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/authContext";
import AppRoutes from "./routes/routes";

export const App: React.FC = () => (
  <AuthProvider>
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  </AuthProvider>
);

export default App;
