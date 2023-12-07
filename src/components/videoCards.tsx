import React from "react";
import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const VideoCards: React.FC = () => {
  const vimeoVideoPrimeiroExperimental = 259539583;
  const vimeoVideoIdAnimation = 266850611;
  const vimeoVideoMusician = 275407702;
  const vimeoVideoSports = 255804519;
  const vimeoVideoExperimental = 260342086;
  const vimeoVideoMusicianRapper = 346787418;

  return (
    <VStack>
      <Grid mt={8} templateColumns={{ base: "1fr", md: "1.1fr 1fr" }} gap={4}>
        <GridItem>
          <VimeoPlayer videoId={Number(vimeoVideoPrimeiroExperimental)} />
        </GridItem>

        <GridItem mt={2}>
          <Box>
            <VimeoPlayer videoId={Number(vimeoVideoIdAnimation)} />
          </Box>
        </GridItem>

        <GridItem mt={2}>
          <Box>
            <VimeoPlayer videoId={Number(vimeoVideoMusician)} />
          </Box>
        </GridItem>

        <GridItem mt={2}>
          <Box>
            <VimeoPlayer videoId={Number(vimeoVideoSports)} />
          </Box>
        </GridItem>

        <GridItem mt={2}>
          <Box>
            <VimeoPlayer videoId={Number(vimeoVideoExperimental)} />
          </Box>
        </GridItem>

        <GridItem mt={2} mb={3}>
          <Box>
            <VimeoPlayer videoId={Number(vimeoVideoMusicianRapper)} />
          </Box>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default VideoCards;
