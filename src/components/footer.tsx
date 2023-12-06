import { Box, VStack, Grid } from "@chakra-ui/react";
import React from "react";
import { FaHome, FaWallet, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <Box backgroundColor="#BFA4A4" mt={6} p={4} m={2}>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        <VStack>
          <Link to="/home">
            <FaHome />
          </Link>
        </VStack>

        <VStack>
          <Link to="/requestValue">
            <FaWallet />
          </Link>
        </VStack>

        <VStack>
          <Link to="/vip">
            <FaStar />
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Footer;
