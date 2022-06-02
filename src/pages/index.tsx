import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      width={`xl`}
      height={`xl`}
      borderRadius={`lg`}
      backgroundColor="primary.900"
      sx={{ borderTop: "10px solid", borderColor: "primary.50" }}
      fontSize={`md`}
    >
      Hello
    </Box>
  );
};

export default Home;
