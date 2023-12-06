import React from "react";
import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import VideoPlayer from "./vimeoVideos";

const VideoCards: React.FC = () => {
  const vimeoVideoId = 887312980;
  const vimeoVideoIdAnimation = 296302547;
  const vimeoVideoMusician = 250148748;
  const vimeoVideoSports = 255804519;

  return (
    <VStack>
      <Grid mt={8} templateColumns={{ base: "1fr", md: "1.1fr 1fr" }} gap={4}>
        <GridItem>
          <VideoPlayer videoId={Number(vimeoVideoId)} />
        </GridItem>

        <GridItem>
          <Box>
            <VideoPlayer videoId={Number(vimeoVideoIdAnimation)} />
          </Box>
        </GridItem>
      </Grid>

      <Grid mt={8} templateColumns={{ base: "1fr", md: "1.1fr 1fr" }} gap={4}>
        <GridItem>
          <Box>
            <VideoPlayer videoId={Number(vimeoVideoMusician)} />
          </Box>
        </GridItem>

        <GridItem>
          <Box>
            <VideoPlayer videoId={Number(vimeoVideoSports)} />
          </Box>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default VideoCards;
