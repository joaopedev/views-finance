import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const VideoCards: React.FC = () => {
  const emailLogin = localStorage.getItem("emailLogin") || "";
  const vimeoVideoPrimeiroExperimental = 896231378;
  const vimeoVideoIdAnimation = 869580762;
  const vimeoVideoMusician = 893878552;
  const vimeoVideoSports = 891775405;
  const vimeoVideoExperimental = 861981495;
  const vimeoVideoMusicianRapper = 880633911;
  const vimeoVideoMusicianExperimental2 = 449464866;
  const vimeoVideoMusicianExperimental3 = 280567414;
  const vimeoVideoMusicianExperimental4 = 273280419;
  const vimeoVideoMusicianExperimental5 = 254364219;
  const vimeoVideoMusicianExperimental6 = 247068452;
  const vimeoVideoMusicianExperimental7 = 264101415;
  const vimeoVideoMusicianExperimental8 = 264829470;
  const vimeoVideoMusicianExperimenta19 = 892901931;
  const vimeoVideoMusicianExperimenta20 = 267574553;
  const vimeoVideoMusicianExperimenta21 = 271940482;
  const vimeoVideoMusicianExperimenta22 = 878610223;
  const vimeoVideoMusicianExperimenta29 = 871186624;
  const vimeoVideoMusicianExperimenta30 = 884977510;

  return (
    <Flex
      mt={8}
      direction={{ base: "column", md: "row" }}
      flexWrap="wrap"
      justify="center"
      align="center"
      gap={4}
    >
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoPrimeiroExperimental)}
      />
      <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoIdAnimation)} />
      <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoMusician)} />
      <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoSports)} />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoExperimental)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianRapper)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental2)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental3)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental4)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental8)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental5)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental7)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta19)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta20)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta21)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta22)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta29)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta30)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental6)}
      />
    </Flex>
  );
};

export default VideoCards;
