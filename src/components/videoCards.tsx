import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const VideoCards: React.FC = () => {
  const emailLogin = localStorage.getItem("emailLogin") || "";
  const vimeoVideoPrimeiroExperimental = 909768963;
  const vimeoVideoIdAnimation = 918618154;
  const vimeoVideoMusician = 912235319;
  const vimeoVideoSports = 328244198;
  const vimeoVideoExperimental = 914391191;
  const vimeoVideoMusicianRapper = 326955261;
  const vimeoVideoMusicianExperimental2 = 392873817;
  const vimeoVideoMusicianExperimental3 = 385434749;
  const vimeoVideoMusicianExperimental4 = 913310943;
  // const vimeoVideoMusicianExperimental5 = 901621701;
  const vimeoVideoMusicianExperimental6 = 458178403;
  const vimeoVideoMusicianExperimental7 = 706146418;
  const vimeoVideoMusicianExperimental8 = 333561655;
  const vimeoVideoMusicianExperimenta19 = 405211306;
  const vimeoVideoMusicianExperimenta20 = 416109278;
  const vimeoVideoMusicianExperimenta21 = 386423621;
  const vimeoVideoMusicianExperimenta22 = 470020599;
  const vimeoVideoMusicianExperimenta29 = 911816030;
  const vimeoVideoMusicianExperimenta30 = 854724381;
  const vimeoVideoMusicianExperimenta31 = 470647095;
  const vimeoVideoMusicianExperimenta32 = 446493477;
  const vimeoVideoMusicianExperimenta33 = 366574905;
  const vimeoVideoMusicianExperimenta34 = 330784899;
  const vimeoVideoMusicianExperimenta35 = 191554374;
  const vimeoVideoMusicianExperimenta36 = 861736545;
  const vimeoVideoMusicianExperimenta37 = 330743725;
  const vimeoVideoMusicianExperimenta38 = 238447552;
  const vimeoVideoMusicianExperimenta39 = 333091980;
  const vimeoVideoMusicianExperimenta40 = 880883264;
  const vimeoVideoMusicianExperimenta41 = 333758769;
  const vimeoVideoMusicianExperimenta42 = 277501740;
  const vimeoVideoMusicianExperimenta43 = 334764561;
  const vimeoVideoMusicianExperimenta44 = 337060404;
  const vimeoVideoMusicianExperimenta45 = 336641127;
  const vimeoVideoMusicianExperimenta46 = 903433306;
  const vimeoVideoMusicianExperimenta47 = 335874600;
  const vimeoVideoMusicianExperimenta48 = 330121673;
  const vimeoVideoMusicianExperimenta49 = 334057391;
  const vimeoVideoMusicianExperimenta50 = 294687024;
  const vimeoVideoMusicianExperimenta51 = 903417652;
  const vimeoVideoMusicianExperimenta52 = 903371114;
  const vimeoVideoMusicianExperimenta53 = 340087842;
  const vimeoVideoMusicianExperimenta54 = 900643328;
  const vimeoVideoMusicianExperimenta55 = 337160920;

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
      {/* <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental5)}
      /> */}
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
