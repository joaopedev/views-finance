import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const VideoCards: React.FC = () => {
  const vimeoVideoPrimeiroExperimental = 259539583;
  const vimeoVideoIdAnimation = 266850611;
  const vimeoVideoMusician = 275407702;
  const vimeoVideoSports = 255804519;
  const vimeoVideoExperimental = 260342086;
  const vimeoVideoMusicianRapper = 346787418;
  const vimeoVideoMusicianExperimental2 = 168232487;
  const vimeoVideoMusicianExperimental3 = 157221452;
  const vimeoVideoMusicianExperimental4 = 892389795; 
  const vimeoVideoMusicianExperimental5 = 888939361; 

  return (
<Flex mt={8} direction={{ base: "column", md: "row" }} flexWrap="wrap" justify="center" align="center" gap={4}>
  <VimeoPlayer videoId={Number(vimeoVideoPrimeiroExperimental)}  />
  <VimeoPlayer videoId={Number(vimeoVideoIdAnimation)}  />
  <VimeoPlayer videoId={Number(vimeoVideoMusician)}  />
  <VimeoPlayer videoId={Number(vimeoVideoSports)}  />
  <VimeoPlayer videoId={Number(vimeoVideoExperimental)}  />
  <VimeoPlayer videoId={Number(vimeoVideoMusicianRapper)}  />
  <VimeoPlayer videoId={Number(vimeoVideoMusicianExperimental2)}  />
  <VimeoPlayer videoId={Number(vimeoVideoMusicianExperimental3)}  />
  <VimeoPlayer videoId={Number(vimeoVideoMusicianExperimental4)}  />
  <VimeoPlayer videoId={Number(vimeoVideoMusicianExperimental5)}  />
</Flex>
  );
};

export default VideoCards;
