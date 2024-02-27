import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const VideoCards: React.FC = () => {
  const emailLogin = localStorage.getItem("emailLogin") || "";
  const vimeoVideoPrimeiroExperimental = 916779781;
  // const vimeoVideoIdAnimation = 888104051;
  const vimeoVideoMusician = 339593711;
  const vimeoVideoSports = 915744407;
  const vimeoVideoExperimental = 337424927;
  const vimeoVideoMusicianRapper = 902275478;
  const vimeoVideoMusicianExperimental2 = 341315839;
  const vimeoVideoMusicianExperimental3 = 827066711;
  const vimeoVideoMusicianExperimental4 = 342692141;
  const vimeoVideoMusicianExperimental5 = 270637523;
  const vimeoVideoMusicianExperimental6 = 230263775;
  const vimeoVideoMusicianExperimental7 = 263974008;
  const vimeoVideoMusicianExperimental8 = 347015432;
  const vimeoVideoMusicianExperimenta19 = 343019358;
  const vimeoVideoMusicianExperimenta20 = 363666651;
  const vimeoVideoMusicianExperimenta21 = 367945766;
  const vimeoVideoMusicianExperimenta22 = 371469703;
  const vimeoVideoMusicianExperimenta29 = 372671867;
  const vimeoVideoMusicianExperimenta30 = 289059542;
  const vimeoVideoMusicianExperimenta31 = 145108228;
  const vimeoVideoMusicianExperimenta32 = 827066711;
  const vimeoVideoMusicianExperimenta33 = 252653436;
  const vimeoVideoMusicianExperimenta34 = 902571486;
  const vimeoVideoMusicianExperimenta35 = 298200022;
  const vimeoVideoMusicianExperimenta36 = 905277654;
  const vimeoVideoMusicianExperimenta37 = 283314367;
  const vimeoVideoMusicianExperimenta38 = 283265177;
  const vimeoVideoMusicianExperimenta39 = 283483906;
  const vimeoVideoMusicianExperimenta40 = 285541104;
  const vimeoVideoMusicianExperimenta41 = 285779587;
  const vimeoVideoMusicianExperimenta42 = 296418897;
  const vimeoVideoMusicianExperimenta43 = 297885089;
  const vimeoVideoMusicianExperimenta44 = 299874098;
  const vimeoVideoMusicianExperimenta45 = 288393864;
  const vimeoVideoMusicianExperimenta46 = 251310923;
  const vimeoVideoMusicianExperimenta47 = 296373541;
  const vimeoVideoMusicianExperimenta48 = 252680309;
  const vimeoVideoMusicianExperimenta49 = 249315648;
  const vimeoVideoMusicianExperimenta50 = 532396381;
  const vimeoVideoMusicianExperimenta51 = 645566927;
  const vimeoVideoMusicianExperimenta52 = 645566927;
  const vimeoVideoMusicianExperimenta53 = 331864018;
  const vimeoVideoMusicianExperimenta54 = 252863313;
  const vimeoVideoMusicianExperimenta55 = 133177167;

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
      {/* <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoIdAnimation)} /> */}
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
        videoId={Number(vimeoVideoMusicianExperimenta47)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental6)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta42)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta43)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta44)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta45)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta46)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta48)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta49)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta50)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta51)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta52)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta53)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta54)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta38)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta55)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta39)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta40)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta41)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta33)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta32)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta35)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta31)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta34)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta36)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta37)}
      />
    </Flex>
  );
};

export default VideoCards;
