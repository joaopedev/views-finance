import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const VideoCards: React.FC = () => {
  const emailLogin = localStorage.getItem("emailLogin") || "";
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
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoPrimeiroExperimental)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoIdAnimation)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoMusician)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoSports)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoExperimental)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoMusicianRapper)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoMusicianExperimental2)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoMusicianExperimental3)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoMusicianExperimental4)}  />
  <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoMusicianExperimental5)}  />
</Flex>
  );
};

export default VideoCards;
